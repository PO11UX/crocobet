import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { SlotsService } from './slots.service';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SlotsFacade {
  slotsService = inject(SlotsService);
  activeProvider = signal('egt');
  slotList = computed(() => this.getSlotsByProvider(this.activeProvider()));
  slotGamesData = signal<any>({
    games: [],
    name: '',
  });
  slotGames = computed(() => this.slotGamesData());
  constructor() {
    effect(() => {
      this.slotList().subscribe(res => this.slotGamesData.set(res));
    });
  }
  getSlotCategories() {
    return this.slotsService.getSlotCategories().pipe(
      map((response) => response.data),
      map((dataArray) =>
        dataArray.filter(
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

  getSlotsByProvider(id: string) {
    return this.slotsService
      .getSlotsByProvider(id)
      .pipe(map((response) => response.data));
  }
  setData(data: any) {
    this.slotGamesData.set(data);
  }

  setSlotProviderId(provider: string) {
    this.activeProvider.set(provider);
  }
}