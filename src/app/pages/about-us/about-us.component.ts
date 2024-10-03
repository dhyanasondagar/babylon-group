import { Component } from '@angular/core';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { OurStrengthComponent } from '../../components/our-strength/our-strength.component';
import { ButtonComponent } from '../../components/button/button.component';

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
  selector: 'app-about-us',
  standalone: true,
  imports: [InnerBannerComponent, OurStrengthComponent, ButtonComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  animations: [fadeIn, fadeOut],

})
export class AboutUsComponent {
  aboutBanner:string = '../../assets/about-banner.jpg'

}
