import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook  } from '@fortawesome/free-brands-svg-icons';
import { faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';




@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
faFacebook = faFacebook;
faTwitter = faTwitter;
faInstagram = faInstagram;

faPhone = faPhone;
faEnvelope = faEnvelope;
faClock = faClock;


}
