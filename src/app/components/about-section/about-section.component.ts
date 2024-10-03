import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { animate, query, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ ButtonComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
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
export class AboutSectionComponent {

}
