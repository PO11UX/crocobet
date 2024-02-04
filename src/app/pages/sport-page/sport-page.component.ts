import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found/page-not-found.component';

@Component({
  selector: 'app-sport-page',
  standalone: true,
  imports: [CommonModule, PageNotFoundComponent],
  templateUrl: './sport-page.component.html',
  styleUrls: ['./sport-page.component.css']
})
export class SportPageComponent {

}
