import { ChangeDetectionStrategy, Component, OnInit, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { SlotsFacade } from 'src/app/services/slots.facade';

@Component({
  selector: 'app-slots-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slot-list.component.html',
  styleUrls: ['./slot-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlotsListComponent implements OnInit  {
  data: any;
  slotsFacade = inject(SlotsFacade);

  ngOnInit(): void {
    this.data = this.slotsFacade.getData();
  }
}
