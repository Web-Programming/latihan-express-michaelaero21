import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Citra Grand City',
      city: 'Palembang',
      state: 'ID',
      photo:
        'https://awsimages.detik.net.id/community/media/visual/2023/12/15/perumahan-di-gunung-sindurdok-istimewa_43.jpeg?w=600&q=90',
      availableUnits: 12,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'Citra Land',
      city: 'Palembang',
      state: 'ID',
      photo:
        'https://rumahsaya.bca.co.id/media/rumahsaya/Images/Web/ef14278a-5591-ef11-910e-005056aa44b9',
      availableUnits: 10,
      wifi: true,
      laundry: true,
    },
  ];

  constructor() {}


  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }


  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
}
