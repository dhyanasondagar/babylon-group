import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterLink } from '@angular/router';
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
  selector: 'app-home-banner',
  standalone: true,
  imports: [ButtonComponent, SlickCarouselModule, RouterLink],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss',
  animations: [fadeIn, fadeOut],

})
export class HomeBannerComponent {
  slides = [
    {
      img: 'assets/banner/banner_1.jpg',
      title: 'New Central Park view Residences',
      path: '/about',
    },
    {
      img: 'assets/banner/banner_2.jpg',
      title: 'New Central Park view Residences',
      path: '/property',
    },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nav: false,
    autoplay: true,
  };
}
