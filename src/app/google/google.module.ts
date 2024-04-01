// google-maps-demo.module.ts

import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsDemoComponent } from './GoogleMapsDemo/GoogleMapsDemo.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GoogleMapsDemoComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SharedModule
  ],
  exports: [
    GoogleMapsDemoComponent,
  ],
})
export class GoogleModule {}
