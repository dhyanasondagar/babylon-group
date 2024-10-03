import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopbarComponent } from '../topbar/topbar.component';
import {  RouterLink, RouterLinkActive } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

interface MenuItem {
  title: string;
  path: string;
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, TopbarComponent, RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
homeIcon = faArrowLeft;
arrowanimation: string = 'arrow-animation'
LOGO = "./assets/logo.png"


menuItems: MenuItem[] = [
  { title: 'Home', path: 'home' },
  { title: 'About', path: 'about' },
  { title: 'Property', path: 'property' },
  { title: 'Contact', path: 'contact' },



];



constructor() {};


}
