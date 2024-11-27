import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/housing";
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number) : Promise<HousingLocation | undefined>{
    const data = await fetch(`${this.url}/${id}`); // http://localhost:3000/housing/1
    return await data.json() ?? {};
  }

  submitApplication(firstName: String, lastName: String, email: String){
    const apiurl = "http://localhost:3000/insert/register";
    const data = fetch(apiurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email
      })
    });
    return data.then(response => {
      if(!response.ok){
        throw new Error("Submit Application Failed");
      }else{
        alert("Submit Application Success");
      }
      return response.json();
    });
  }
}
