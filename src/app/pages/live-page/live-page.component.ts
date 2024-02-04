import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found/page-not-found.component';

@Component({
  selector: 'app-live-page',
  standalone: true,
  imports: [CommonModule, PageNotFoundComponent],
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.css']
})
export class LivePageComponent {

}
