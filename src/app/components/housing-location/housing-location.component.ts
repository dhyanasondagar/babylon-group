import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { HousingLocation} from '../../models/housingLocation'
import { HousingService } from '../../services/housing.service';
import { DetailsComponent } from '../details/details.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { animate, query, style, transition, trigger } from "@angular/animations";


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [ DetailsComponent, FormsModule, CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss',
  animations:[ 
    trigger('animation', [
      transition('* <=> *', [
      query(':enter', [
      style({ opacity:0, transform: 'scale(0.7)'}),
      animate('500ms ease-in', style({opacity: 1, transform: 'scale(1)' }))
      ],  {optional: true}),
      
      // query(':enter h5, h4, p, :enter dl',[
      // style({color:'#a177ff'}),
      // animate('3s ease-in', style({color: 'inherit'}) )  
      // ],{optional: true}),
      query(':leave', [
        style({ opacity:1, transform: 'scale(1)'}),
        animate('500ms ease-in', style({opacity: 0, transform: 'scale(0.7)' }))
        ], {optional: true})
  
  
      ]),
       
      ])
  ]


  })

export class HousingLocationComponent {

housingLocationList: HousingLocation[]  = [];

filteredHousingLocations: HousingLocation[] = [];
statusOptions: string[] = [];
priceOptions: string[] = [];
typeOptions: string[] = [];
locationOptions: string[] = [];

  // Set default values for the dropdowns
  selectedStatus: string = 'Any'; 
  selectedPrice: string = 'Any';
  selectedType: string = 'Any';
  selectedLocation: string = 'Any';
  carpetArea: number | null = null;


housingService: HousingService = inject(HousingService);




constructor(private router: Router){
this.housingLocationList = this.housingService.getAllHousingLocations();
this.filteredHousingLocations = this.housingLocationList;

    // Get options from the service
    this.statusOptions = ['Any', ...this.housingService.getStatusOptions()];
    this.typeOptions = ['Any', ...this.housingService.getTypeOptions()];
    this.priceOptions = ['Any', ...this.housingService.getPriceOptions()];
    this.locationOptions = ['Any', ...this.housingService.getLocationOptions()];



}


viewDetails(propertyName: string) {
    this.router.navigate(['property/details', propertyName]);  // This triggers the navigation

}



search() {
  this.filteredHousingLocations = this.housingLocationList.filter((property) => {
    const matchesStatus =  this.selectedStatus !== 'Any' ? property.status === this.selectedStatus : true;
    const matchesTypes =  this.selectedType !== 'Any' ? property.type === this.selectedType : true;


    let matchesPrice = true;
    if (this.selectedPrice !== 'Any') {
      const [minPrice, maxPrice] = this.parsePriceRange(this.selectedPrice);
      const propertyPrice = this.parsePrice(property.price);
      matchesPrice = propertyPrice >= minPrice && propertyPrice <= maxPrice;
    }

    const matchesLocation =
      this.selectedLocation !== 'Any' ? property.city === this.selectedLocation : true;

    const matchesCarpetArea =
      this.carpetArea ? parseInt(property.area.split(' ')[0].replace(/,/g, '')) <= this.carpetArea : true;

    return matchesStatus && matchesPrice && matchesLocation && matchesCarpetArea && matchesTypes;
  });
}


private parsePriceRange(priceRange: string): [number, number] {
  switch (priceRange) {
    case '1 Cr - 2 Cr':
      return [1 * 1e7, 2 * 1e7]; // 1 Cr to 2 Cr
    case '2 Cr - 3 Cr':
      return [2 * 1e7, 3 * 1e7]; // 2 Cr to 3 Cr
    case '3 Cr - 4 Cr':
      return [3 * 1e7, 4 * 1e7]; // 3 Cr to 4 Cr
    case '4 Cr - 5 Cr':
      return [4 * 1e7, 5 * 1e7]; // 4 Cr to 5 Cr
    case '5 Cr and above':
      return [5 * 1e7, Infinity]; // 5 Cr and above
    default:
      return [0, Infinity]; // No filter
  }
}

// Helper function to parse the property price
private parsePrice(price: string): number {
  const priceInCrores = parseFloat(price.replace(/[^0-9.]/g, '')) * 1e7; // Convert to number in crores
  return priceInCrores;
}







}
