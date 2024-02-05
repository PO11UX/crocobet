import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotsFacade } from 'src/app/pages/slots-page/services/slots.facade';

@Component({
  selector: 'app-slots-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slot-list.component.html',
  styleUrls: ['./slot-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsListComponent implements OnInit {
  data: any;
  slotsFacade = inject(SlotsFacade);

  ngOnInit(): void {
    this.data = this.slotsFacade.getData();
  }
}
