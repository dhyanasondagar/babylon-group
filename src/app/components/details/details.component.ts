import { Component, inject } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { HousingLocation} from '../../models/housingLocation'
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, NgForOf } from '@angular/common';
import { animate, query, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, NgForOf, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  animations:[ 
    trigger('animation', [
      transition('* <=> *', [
      query(':enter', [
      style({ opacity:0, transform: 'scale(0.7)'}),
      animate('500ms ease-in', style({opacity: 1, transform: 'scale(1)' }))
      ],  {optional: true}),
      query(':leave', [
        style({ opacity:1, transform: 'scale(1)'}),
        animate('500ms ease-in', style({opacity: 0, transform: 'scale(0.7)' }))
        ], {optional: true})
  
  
      ]),
       
      ])
  ]
})
export class DetailsComponent {
route:ActivatedRoute = inject(ActivatedRoute);
// housingLocationId = 0
housingService = inject(HousingService);
housingLocation: HousingLocation | undefined ;

constructor(){
const housingLocationName = String(this.route.snapshot.params['name'])

this.housingLocation = this.housingService.getHousingLocationByName(housingLocationName)

}

}
