import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/housing";
  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]>{
    const data = await fetch(this.url, {
      method: 'GET'
      },
    );
    console.log(data)
    return await data.json() ?? [];
  }
  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    if (!data.ok) {
        console.error("Failed to fetch housing location by ID:", data.statusText);
        return undefined;
    }
    return await data.json();
}



  submitApplication(firstName: String, lastName: String,
    email: String){
      console.log(firstName, lastName, email);
  }
}
