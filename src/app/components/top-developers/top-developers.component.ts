import { Component } from '@angular/core';

@Component({
  selector: 'app-top-developers',
  standalone: true,
  imports: [],
  templateUrl: './top-developers.component.html',
  styleUrl: './top-developers.component.scss'
})
export class TopDevelopersComponent {

  clientsImage = [
    {
      img: 'assets/clients/kdmc.jpg',
      title: 'New Central Park view Residences',
    },
    {
      img: 'assets/clients/mcgm.jpg',
      title: 'New Central Park view Residences',
    },
    {
      img: 'assets/clients/mmrda.jpg',
      title: 'New Central Park view Residences',
    },
    {
      img: 'assets/clients/pwd.jpg',
      title: 'New Central Park view Residences',
    },
    {
      img: 'assets/clients/skdcl.jpg',
      title: 'New Central Park view Residences',
    },
    {
      img: 'assets/clients/thane_mc.jpg',
      title: 'New Central Park view Residences',
    },
  ];



}
