import { Component } from '@angular/core';
import { HomeBannerComponent } from '../../components/home-banner/home-banner.component';
import { CategoryBoxComponent } from '../../components/category-box/category-box.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { OurProjectComponent } from '../../components/our-project/our-project.component';
import { OurStrengthComponent } from '../../components/our-strength/our-strength.component';
import { TopDevelopersComponent } from '../../components/top-developers/top-developers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeBannerComponent, CategoryBoxComponent, AboutSectionComponent, OurProjectComponent, OurStrengthComponent, TopDevelopersComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {






  
}
