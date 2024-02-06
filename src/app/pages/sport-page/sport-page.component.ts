import { Component } from '@angular/core';

import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';

@Component({
  selector: 'app-sport-page',
  standalone: true,
  imports: [PageNotFoundComponent],
  templateUrl: './sport-page.component.html',
  styleUrls: ['./sport-page.component.scss']
})
export class SportPageComponent {

}
