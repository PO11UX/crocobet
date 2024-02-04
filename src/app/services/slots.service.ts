import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({providedIn: "root"})
export class SlotsService {
  constructor(private http: HttpClient) {}
 

  getSlotCategories() {
    return this.http.get<any>(
      `https://cms.crocobet.com/integrations/v2/slot/categories?include=games`
    );
  }
  getProviders() {
    return this.http.get<any>(
      `https://cms.crocobet.com/integrations?type=slot&platform=desktop`
    );
  }
  getSlotsByProvider(id: string) {
    return this.http.get<any>(
      `https://cms.crocobet.com/integrations/v2/slot/providers/${id}`
    );
  }
}
