import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryList, ProviderList, Slot, SlotList } from '../interfaces/slot.interface';


@Injectable({providedIn: "root"})
export class SlotsService {
  constructor(private http: HttpClient) {}
 

  getSlotCategories() {
    return this.http.get<CategoryList>(
      `https://cms.crocobet.com/integrations/v2/slot/categories?include=games`
    );
  }
  getProviders() {
    return this.http.get<ProviderList>(
      `https://cms.crocobet.com/integrations?type=slot&platform=desktop`
    );
  }
  getSlotsByProvider(id: string) {
    return this.http.get<SlotList>(
      `https://cms.crocobet.com/integrations/v2/slot/providers/${id}`
    );
  }
}
