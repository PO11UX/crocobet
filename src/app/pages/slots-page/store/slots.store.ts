import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { Category, Game, Provider } from '../interfaces/slot.interface';
import { SlotsFacade } from '../services/slots.facade';

type SlotsState = {
  categories: Category[];
  activeCategory: string;
  providers: Provider[];
  activeProvider: string;
  activeProviderGames: Game[];
  activeFilter: 'category' | 'provider';
};

const initialState: SlotsState = {
  categories: [],
  activeCategory: 'web:popular',
  providers: [],
  activeProvider: '',
  activeProviderGames: [],
  activeFilter: 'category',
};

export const SlotsStore = signalStore(
  withState(initialState),
  withComputed(
    ({ activeFilter, activeCategory, categories, activeProviderGames }) => ({
      gameList: computed(() => {
        let filteredGames;
        if (activeFilter() === 'category') {
          filteredGames = categories().find(
            (c) => c.category === activeCategory()
          )?.games;
        } else {
          filteredGames = activeProviderGames();
        }
        
        return filteredGames;
      }),
    })
  ),
  withMethods((store, slotsFacade = inject(SlotsFacade)) => ({
    async getCategories() {
      patchState(store);
      const categories = await firstValueFrom(slotsFacade.getSlotCategories());
      patchState(store, { categories })
      
    },
    async getProviders() {
        patchState(store);
        const providers = await firstValueFrom(slotsFacade.getProviders());
        patchState(store, { providers});
      },
    async getGamesByProvider(provider: string) {
      if(provider === store.activeProvider()) return
      patchState(store);
      const providerData = await firstValueFrom(
        slotsFacade.getSlotsByProvider(provider)
      );
      patchState(store, {
        activeProviderGames: providerData.games
      });
    },
    updateActiveCategory(category: string) {
      patchState(store, { activeCategory: category, activeFilter: 'category' });
    },
    updateActiveProvider(provider: string) {
      this.getGamesByProvider(provider);
      patchState(store, {
        activeProvider: provider,
        activeFilter: 'provider',
      });
    },
  })),
  withHooks({
    onInit({ getCategories, getProviders }) {
      getCategories();
      getProviders();
    },
  })
);
