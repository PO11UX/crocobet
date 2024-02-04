import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, filter, find, map, tap } from 'rxjs';
import { SlotsService } from 'src/app/services/slots.service';
import { SlotsFacade } from 'src/app/services/slots.facade';

@Component({
  selector: 'app-category-filters',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './category-filters.component.html',
  styleUrls: ['./category-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class CategoryFiltersComponent implements OnInit {
  data$: Observable<any[]> | undefined;
  selectedButton: any;
 
  slotsFacade = inject(SlotsFacade);
  ngOnInit(): void {
    this.data$ = this.slotsFacade.getSlotCategories();
    this.selectedButton = this.slotsFacade.getData();
  }
  selectButton(item: any): void {
    this.slotsFacade.setData(item)
  }
}
