
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  providers:[
    importProvidersFrom(RouterModule.forRoot(routes)), importProvidersFrom(HttpClientModule), importProvidersFrom(BrowserAnimationsModule)
  ]
})  .catch(err => console.error(err));