import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PropertyComponent } from './pages/property/property.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './components/details/details.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  //default router
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutUsComponent,
    title: 'About',
  },
  {
    path: 'property',
    component: PropertyComponent,
    title: 'Property',
  },
  {
    path: 'property/details/:name',
    component: DetailsComponent,
    title: 'Property details',
  },

  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
];


export const routing = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled' // This ensures the scroll is restored to top
});
