import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFiltersComponent } from './filters/category-filters/category-filters.component';
import { ProviderFiltersComponent } from './filters/provider-filters/provider-filters.component';
import { SlotsListComponent } from './slot-list/slot-list.component';

@Component({
  selector: 'app-slots-page',
  standalone: true,
  imports: [CommonModule, CategoryFiltersComponent, ProviderFiltersComponent, SlotsListComponent ],
  templateUrl: './slots-page.component.html',
  styleUrls: ['./slots-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlotsPageComponent {
}
