import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SlotsListComponent } from './slot-list/slot-list.component';
import { CategoryFiltersComponent, ProviderFiltersComponent } from './filters';

@Component({
  selector: 'app-slots-page',
  standalone: true,
  imports: [
    CategoryFiltersComponent,
    ProviderFiltersComponent,
    SlotsListComponent
],
  templateUrl: './slots-page.component.html',
  styleUrls: ['./slots-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsPageComponent {}
