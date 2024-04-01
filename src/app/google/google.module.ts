// google-maps-demo.module.ts

import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsDemoComponent } from './GoogleMapsDemo/GoogleMapsDemo.component';



@NgModule({
  declarations: [
    GoogleMapsDemoComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  exports: [
    GoogleMapsDemoComponent,
  ],
})
export class GoogleModule {}
