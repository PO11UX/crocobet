import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgClass } from '@angular/common';
import { SlotsStore } from '../../store';

@Component({
  selector: 'app-provider-filters',
  standalone: true,
  imports: [NgClass],
  templateUrl: './provider-filters.component.html',
  styleUrls: ['./provider-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '55px',
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

export class ProviderFiltersComponent {
  readonly store = inject(SlotsStore);

  seeMore = signal(false);

  selectButton(provider: string): void {
    this.store.updateActiveProvider(provider);
  }
  toggleButton(): void {
    this.seeMore.update((value) => !value);
  }
}
