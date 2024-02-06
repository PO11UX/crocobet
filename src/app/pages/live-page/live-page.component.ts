import { Component } from '@angular/core';

import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';

@Component({
  selector: 'app-live-page',
  standalone: true,
  imports: [PageNotFoundComponent],
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.scss']
})
export class LivePageComponent {

}
