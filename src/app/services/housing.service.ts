import { Injectable } from '@angular/core';
import { HousingLocation} from '../models/housingLocation'


@Injectable({
  providedIn: 'root'
})
export class HousingService {
readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Dosti Nest Dove',
      city: 'Mumbai',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
      state: '',
      type: 'House',
      area: '1,300 sq. ft.',
      status: 'Under construction',
      price: '2.25 Cr',
      readmore: 'Roswalt Zaiden boasts a mix of spacious and elegant 2 and 3 BHK apartments that are meticulously designed to offer the ultimate living experience.',
      amenities: ["Swimming Pool", "Garage", "Garden", "Gym"],
      video: 'assets/video/property-single-video-1.mp4',
      slider:[
        'assets/property/Raunak-Bliss.jpg',
        'assets/property/Raunak-Maximum-City.jpg',
        'assets/property/Raunak-Viraj.jpg'
      ]

    },
    {
      id: 1,
      name: 'Sonu Aai Complex',
      city: 'Thane',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
      type: 'Apartment',
      area: '900 sq. ft.',
      status: 'Finished',
      price: '3.55 Cr',
      readmore: 'Roswalt Zaiden boasts a mix of spacious and elegant 2 and 3 BHK apartments that are meticulously designed to offer the ultimate living experience.',
      amenities: ["Elevator", "Security", "Parking"],
      video: 'assets/video/property-single-video-1.mp4',
      slider:[
        'assets/property/residential-01.jpg',
        'assets/property/residential-02.jpg',
        'assets/property/residential-03.jpg',
      ]




    },
    {
      id: 2,
      name: 'Raunak Maximum City',
      city: 'Pune',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
      type: 'Duplex',
      area: '1,200 sq. ft.',
      status: 'Under construction',
      price: '1.50 Cr',
      readmore: 'Roswalt Zaiden boasts a mix of spacious and elegant 2 and 3 BHK apartments that are meticulously designed to offer the ultimate living experience.',
      amenities: ["Gym", "Clubhouse", "Playground"],
      video: 'assets/video/property-single-video-1.mp4',
      slider:[
        'assets/property/residential-04.jpg',
        'assets/property/residential-05.jpg',
        'assets/property/residential-06.jpg',
      ]




    },
    {
      id: 3,
      name: 'Raunak Bliss',
      city: 'Mumbai',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
      type: 'Villa',
      area: '1,500 sq. ft.',
      status: 'Finished',
         price: '1.74 Cr',
         readmore: 'Roswalt Zaiden boasts a mix of spacious and elegant 2 and 3 BHK apartments that are meticulously designed to offer the ultimate living experience.',
         amenities: ["Swimming Pool", "Garage", "Garden"],
         video: 'assets/video/property-single-video-1.mp4',
         slider:[
          'assets/property/residential-04.jpg',
          'assets/property/residential-05.jpg',
          'assets/property/residential-06.jpg',
        ]
  


    },
    {
      id: 4,
      name: 'Raunak Viraj',
      city: 'Thane',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
      type: 'Duplex',
      area: '500 sq. ft.',
      status: 'Under construction',
      price: '2.00 Cr',
      readmore: 'Roswalt Zaiden boasts a mix of spacious and elegant 2 and 3 BHK apartments that are meticulously designed to offer the ultimate living experience.',
      amenities: ["Swimming Pool", "Garage", "Garden"],
      video: 'assets/video/property-single-video-1.mp4',
      slider:[
        'assets/property/residential-01.jpg',
        'assets/property/residential-02.jpg',
        'assets/property/residential-03.jpg',
      ]

    },
    {
      id: 5,
      name: 'Arihant Aarohi',
      city: 'Pune',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
      type: 'Duplex',
      area: '800 sq. ft.',
      status: 'Finished',
      price: '3.10 Cr',
      readmore: 'Aquila at Sarova, a luxurious residential property in Exclusive Neighbourhood Kandivali, offers the epitome of modern living with exquisite 1.5, 2, and 3 BHK homes.',
      amenities: ["Swimming Pool", "Garage", "Garden"],
      video: 'assets/video/property-single-video-1.mp4',
      slider:[
        'assets/property/residential-01.jpg',
        'assets/property/residential-02.jpg',
        'assets/property/residential-03.jpg',
      ]
    },
    {
      id: 6,
      name: 'Star City Complex',
      city: 'Mumbai',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
      type: 'Apartment',
      area: '1,200 sq. ft.',
      status: 'Under construction',
      price: '4.10 Cr',
      readmore: 'Roswalt Zaiden boasts a mix of spacious and elegant 2 and 3 BHK apartments that are meticulously designed to offer the ultimate living experience.',
      amenities: ["Swimming Pool", "Garage", "Garden"],
      video: 'assets/video/property-single-video-1.mp4',
      slider:[
        'assets/property/residential-01.jpg',
        'assets/property/residential-02.jpg',
        'assets/property/residential-03.jpg',
      ]
    },
    {
      id: 7,
      name: 'Bhumi Complex',
      city: 'Thane',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
      type: 'House',
      area: '500 sq. ft.',
      status: 'Finished',
      price: '5.10 Cr',
      readmore: 'Witness a rare artistic rebellion where homes are more than mere structures. Some dreams transcend convention, inspiring creations that break boundaries.',
      amenities: ["Swimming Pool", "Garage", "Garden"],
      video: 'assets/video/property-single-video-1.mp4',
      slider:[
        'assets/property/residential-01.jpg',
        'assets/property/residential-02.jpg',
        'assets/property/residential-03.jpg',
      ]
    },
    {
      id: 8,
      name: 'Garden City Complex',
      city: 'Pune',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
      type: 'Apartment',
      area: '1,800 sq. ft.',
      status: 'Finished',
      price: '4.10 Cr',
      readmore: 'Poddar Satyam, a residential project in Jogeshwari East, Mumbai, offers a variety of units for sale to match your lifestyle and preferences.',
      amenities: ["Swimming Pool", "Garage", "Garden"],
      video: 'assets/video/property-single-video-1.mp4',
      slider:[
        'assets/property/residential-01.jpg',
        'assets/property/residential-02.jpg',
        'assets/property/residential-03.jpg',
      ]
    },
    {
      id: 9,
      name: 'Barsana City Complex',
      city: 'Mumbai',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
      type: 'Villa',
      area: '1,400 sq. ft.',
      status: 'Under construction',
      price: '2.75 Cr',
      readmore: 'Ajmera ICRC presents cutting-edge office spaces in the prime locale of Nityanand Nagar, Ghatkopar West, Mumbai. ',
      amenities: ["Swimming Pool", "Garage ", "Garden "],
      video: 'assets/video/property-single-video-1.mp4',
      slider:[
        'assets/property/residential-01.jpg',
        'assets/property/residential-02.jpg',
        'assets/property/residential-03.jpg',
      ]

    }
  ];









  constructor() { }

getAllHousingLocations(): HousingLocation[] {
  return this.housingLocationList;
};

getHousingLocationByName(name: string): HousingLocation | undefined {
  return this.housingLocationList.find(housingLocation => housingLocation.name === name);
} 

getStatusOptions(): string[] {
  const statuses = new Set(this.housingLocationList.map(property => property.status));
  return Array.from(statuses);
}


getTypeOptions(): string[] {
  const types = new Set(this.housingLocationList.map(property => property.type));
  return Array.from(types);
}





getPriceOptions(): string[] {
  return [
    '1 Cr - 2 Cr',
    '2 Cr - 3 Cr',
    '3 Cr - 4 Cr',
    '4 Cr - 5 Cr',
    '5 Cr and above',
  ];
}

getLocationOptions(): string[] {
  const locations = new Set<string>(); // Using Set to avoid duplicates
  this.housingLocationList.forEach(location => locations.add(location.city));
  return Array.from(locations); // Convert Set back to Array
}









}
