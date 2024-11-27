import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="baseUrl + housingLocation?.photo"
        alt="Exterior photo of {{housingLocation?.name}}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">
          {{housingLocation?.city}}, {{housingLocation?.state}}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h1 class="section-heading">Apply to live here</h1>
        <form [formGroup]="applyForm" (submit)="submitApplyForm()">
          <label for="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            formControlName="firstName"
            placeholder="Input first name"
          />
          <label for="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            formControlName="lastName"
            placeholder="Input last name"
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            formControlName="email"
            placeholder="Input email"
          />
          <button type="submit" class="primary">Apply</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocationId: number = 0;
  housingLocation: HousingLocation | undefined;

  // Form group untuk form aplikasi
  applyForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    // Ambil parameter 'id' dari route
    this.route.params.subscribe(params => {
      this.housingLocationId = Number(params['id']);
      this.loadHousingLocation();
    });
  }

  // Fungsi untuk memuat data housing location berdasarkan ID
  private loadHousingLocation() {
    this.housingService.getHousingLocationById(this.housingLocationId)
      .then(location => {
        this.housingLocation = location;
      })
      .catch(err => {
        console.error('Error fetching housing location:', err);
      });
  }

  // Fungsi untuk submit form aplikasi
  submitApplyForm() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
    console.log('Application submitted:', this.applyForm.value);
  }
}
