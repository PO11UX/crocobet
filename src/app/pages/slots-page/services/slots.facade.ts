import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { SlotsService } from './slots.service';
import { map } from 'rxjs';
import { Slot } from '../interfaces/slot.interface';

@Injectable({ providedIn: 'root' })
export class SlotsFacade {
  slotsService = inject(SlotsService);
  activeProvider = signal('egt');
  slotList = computed(() => this.getSlotsByProvider(this.activeProvider()));
  slotGamesData = signal<Slot>({
    games: [],
    name: '',
  });
  slotGames = computed(() => this.slotGamesData());
  constructor() {
    effect(() => {
      this.slotList().subscribe((res) => this.slotGamesData.set(res));
    });
  }
  getSlotCategories() {
    return this.slotsService
      .getSlotCategories()
      .pipe(
        map((response) =>
          response.data.filter(
            (data: { platform: string }) =>
              data.platform === 'desktop' || data.platform === 'all'
          )
        )
      );
  }
  getData() {
    return this.slotGames;
  }

  getProviders() {
    return this.slotsService
      .getProviders()
      .pipe(map((response) => response.data));
  }

  getSlotsByProvider(provider: string) {
    return this.slotsService
      .getSlotsByProvider(provider)
      .pipe(map((response) => response.data));
  }
  setData(data: Slot) {
    this.slotGamesData.set(data);
  }

  setSlotProviderId(provider: string) {
    this.activeProvider.set(provider);
  }
}
