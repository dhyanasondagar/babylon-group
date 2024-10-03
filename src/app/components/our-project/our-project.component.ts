import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ProjectSliderComponent } from '../project-slider/project-slider.component';

@Component({
  selector: 'app-our-project',
  standalone: true,
  imports: [ButtonComponent, ProjectSliderComponent ],
  templateUrl: './our-project.component.html',
  styleUrl: './our-project.component.scss'
})
export class OurProjectComponent {

}
