import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SlotsFacade } from 'src/app/pages/slots-page/services/slots.facade';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Category } from '../../interfaces/slot.interface';

@Component({
  selector: 'app-category-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filters.component.html',
  styleUrls: ['./category-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '50px',
        })
      ),
      state(
        'expanded',
        style({
          height: '100%',
        })
      ),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
    trigger('rotateArrow', [
      state(
        'up',
        style({
          transform: 'rotate(180deg)',
        })
      ),
      state(
        'down',
        style({
          transform: 'rotate(0deg)',
        })
      ),
      transition('up <=> down', animate('0.5s ease')),
    ]),
  ],
})
export class CategoryFiltersComponent implements OnInit {
  data$: Observable<Category[]> | undefined;
  selectedButton: any;
  collapseText: string = 'See more';
  seeMore: boolean = false;
  slotsFacade = inject(SlotsFacade);
  ngOnInit(): void {
    this.data$ = this.slotsFacade.getSlotCategories();
    this.selectedButton = this.slotsFacade.getData();
  }
  selectButton(item: Category): void {
    this.slotsFacade.setData(item);
  }
  toggleButton(): void {
    this.seeMore = !this.seeMore;
    this.collapseText = this.seeMore ? 'See less' : 'See more';
  }
}
