import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { Category, Provider, Slot } from '../interfaces';
import { SlotsService } from './slots.service';

@Injectable()
export class SlotsFacade {
  private slotsService = inject(SlotsService);
  getSlotCategories(){
    return this.slotsService
      .getSlotCategories<Category>()
      .pipe(
        map((response) =>
          response.data.filter(
            (data: { platform: string }) =>
              data.platform === 'desktop' || data.platform === 'all'
          )
        )
      );
  }
  getProviders() {
    return this.slotsService
      .getProviders<Provider>()
      .pipe(map((response) => response.data));
  }

  getSlotsByProvider(provider: string) {
    return this.slotsService
      .getSlotsByProvider<Slot>(provider)
      .pipe(map((response) => response.data));
  }
}
