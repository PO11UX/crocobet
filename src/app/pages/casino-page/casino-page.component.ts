import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found/page-not-found.component';

@Component({
  selector: 'app-casino-page',
  standalone: true,
  imports: [CommonModule, PageNotFoundComponent],
  templateUrl: './casino-page.component.html',
  styleUrls: ['./casino-page.component.css']
})
export class CasinoPageComponent {

}
