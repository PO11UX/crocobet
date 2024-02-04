import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SlotsFacade } from 'src/app/pages/slots-page/services/slots.facade';
import { Provider } from '../../interfaces/slot.interface';

@Component({
  selector: 'app-provider-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './provider-filters.component.html',
  styleUrls: ['./provider-filters.component.css'],
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
export class ProviderFiltersComponent implements OnInit {
  data$: Observable<Provider[]> | undefined;
  selectedButton: any;
  collapseText: string = 'See more';
  seeMore: boolean = false;
  filterText: Signal<string> | undefined;
  slotsFacade = inject(SlotsFacade);
  ngOnInit(): void {
    this.data$ = this.slotsFacade.getProviders();
    this.selectedButton = this.slotsFacade.getData();
  }
  selectButton(button: string): void {
    this.slotsFacade.setSlotProviderId(button);
  }
  toggleButton(): void {
    this.seeMore = !this.seeMore;
    this.collapseText = this.seeMore ? 'See less' : 'See more';
  }
}
