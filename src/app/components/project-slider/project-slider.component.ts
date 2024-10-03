import { Component, signal  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { style, trigger, transition, animate, query, group } from '@angular/animations';


@Component({
  selector: 'app-project-slider',
  standalone: true,
  imports: [SlickCarouselModule, RouterLink],
  templateUrl: './project-slider.component.html',
  styleUrl: './project-slider.component.scss',
  animations: [
    trigger('slideToggle', [
      transition('* => *', [
        group([
          query(':enter', style({ transform: 'translateX({{ enterStart }}) scale(0.25)' })),
          query(':leave', [
            animate('750ms ease-in-out', style({ transform: 'translateX({{ leaveEnd }}) scale(0.25)' }))
          ]),
          query(':enter', [
            animate('750ms ease-in-out', style({ transform: 'translateX(0) scale(1)' }))
          ])
        ])
      ],
      { 
        params: {
          leaveEnd: '',
          enterStart: ''
        }
      })
    ])
  ]
})
export class ProjectSliderComponent  {

 
 
  slides = [
    {
      id: 1,
      img: 'assets/projects/h8_pic2.jpg',
      title: 'Copper Park, Mumbai',
      path:'/about'
    },
    {
      id: 2,
      img: 'assets/projects/h8_pic3.jpg',
      title: 'Golden Park, Thane',
      path:'/property'
    },
    {
      id: 3,
      img: 'assets/projects/h8_pic4.jpg',
      title: ' Silver Park, Pune',
      path:'/property'
    },
    {
      id: 4,
      img: 'assets/projects/mjp_market.jpg',
      title: 'Sky Apartment, Gujarat',
      path:'/property'
    },



  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, dots: false, nav: true, autoplay: true };



  protected selectedImage = signal(1);
  protected animationDirection = signal<'right' | 'left'>('right');

  previous() {
    if (this.selectedImage() > 1) {
      this.selectedImage.set(this.selectedImage() - 1);
    }
  }

  next() {
    if (this.selectedImage() < 4) {
      this.selectedImage.set(this.selectedImage() + 1);
    }
  }





}
