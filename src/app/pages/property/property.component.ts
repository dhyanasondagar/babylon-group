import { Component, Optional } from '@angular/core';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { NgOptimizedImage } from '@angular/common'
import { HousingLocationComponent } from '../../components/housing-location/housing-location.component';

import { animate, query, style, transition, trigger } from "@angular/animations";

const enterTransition = transition(":enter", [
  style({
    opacity: 0,
  }),
  animate("1s ease-in", style({ opacity: 1 })),
]);

const exitTrasition = transition(":leave", [
  style({
    opacity: 1,
  }),
  animate("1s ease-out", style({ opacity: 0 })),

]);

const fadeIn = trigger("fadeIn", [enterTransition]);
const fadeOut = trigger("fadeOut", [exitTrasition]);

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [InnerBannerComponent, NgOptimizedImage, HousingLocationComponent ],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss',
  // animations: [fadeIn, fadeOut],
animations:[fadeIn, 
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
export class PropertyComponent {
propertyImage:string = '../../assets/property-banner.jpg';

}
