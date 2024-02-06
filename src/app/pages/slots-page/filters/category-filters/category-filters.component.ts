import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Category } from '../../interfaces/slot.interface';
import { SlotsStore } from '../../store';

@Component({
  selector: 'app-category-filters',
  standalone: true,
  imports: [NgClass],
  templateUrl: './category-filters.component.html',
  styleUrls: ['./category-filters.component.scss'],
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

export class CategoryFiltersComponent {
  readonly store = inject(SlotsStore)

  seeMore = signal(false);

  selectButton(item: Category): void {
    this.store.updateActiveCategory(item.category);
  }

  toggleButton(): void {
    this.seeMore.update((value) => !value);
  }
}
