import { Component } from '@angular/core';

import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';

@Component({
  selector: 'app-casino-page',
  standalone: true,
  imports: [PageNotFoundComponent],
  templateUrl: './casino-page.component.html',
  styleUrls: ['./casino-page.component.scss']
})
export class CasinoPageComponent {

}
