import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { SlotsStore } from '../store';


@Component({
  selector: 'app-slots-list',
  standalone: true,
  imports: [],
  templateUrl: './slot-list.component.html',
  styleUrls: ['./slot-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsListComponent  {
  readonly store = inject(SlotsStore)
}
