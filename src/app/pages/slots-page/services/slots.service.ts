import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class SlotsService {
  private http = inject(HttpClient);

  getSlotCategories<T>() {
    return this.http.get<{ data: T[] }>(
      `https://cms.crocobet.com/integrations/v2/slot/categories?include=games`
    );
  }
  getProviders<T>() {
    return this.http.get<{ data: T[] }>(
      `https://cms.crocobet.com/integrations?type=slot&platform=desktop`
    );
  }
  getSlotsByProvider<T>(id: string) {
    return this.http.get<{ data: T }>(
      `https://cms.crocobet.com/integrations/v2/slot/providers/${id}`
    );
  }
}
