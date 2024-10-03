import { Component } from '@angular/core';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';

import { animate, style, transition, trigger } from "@angular/animations";

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
  selector: 'app-contact',
  standalone: true,
  imports: [InnerBannerComponent, InnerBannerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [fadeIn, fadeOut],

})
export class ContactComponent {

  contactBanner:string = '../../assets/contact-banner.jpg'


}
