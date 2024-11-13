import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: "Citra Grand City",
      city: "Palembang",
      state: "ID",
      photo: "https://citragrandcity.co.id/wp-content/uploads/2021/05/Calathea.jpg",
      availableUnits: 12,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: "Citra Land",
      city: "Palembang",
      state: "ID",
      photo: "https://rumahsaya.bca.co.id/media/rumahsaya/Images/Web/ef14278a-5591-ef11-910e-005056aa44b9",
      availableUnits: 10,
      wifi: true,
      laundry: true
    },
  ]
}
