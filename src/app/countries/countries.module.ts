import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/countryTable/countryTable.component';
import { GooglemapsMapComponent } from './components/googlemapsMap/googlemapsMap.component';
import { GoogleModule } from '../google/google.module';
import { LenguageInfoComponent } from './components/lenguageInfo/lenguageInfo.component';
import { TraduccionInfoComponent } from './components/traduccionInfo/traduccionInfo.component';
import { MoreInfoComponent } from './components/moreInfo/moreInfo.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
    GooglemapsMapComponent,
    LenguageInfoComponent,
    TraduccionInfoComponent,
    MoreInfoComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    GoogleModule
  ],
})
export class CountriesModule { }
