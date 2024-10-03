import { Component } from '@angular/core';
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
  selector: 'app-category-box',
  standalone: true,
  imports: [],
  templateUrl: './category-box.component.html',
  styleUrl: './category-box.component.scss',
  animations: [fadeIn, fadeOut],

})
export class CategoryBoxComponent {
  ResditialIcon = "./assets/service_icon_1.png"
  CommericlalIcon = "./assets/service_icon_3.png"

}
