import { NgModule, Component } from '@angular/core';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes:Routes=[
  {
    path:'by-capital',
    component:ByCapitalPageComponent,
  },
  {
    path:'by-region',
    component:ByRegionPageComponent,
  },
  {
    path:'by-country',
    component:ByCountryPageComponent,
  },
  {
    path:'by/:id',
    component:CountryPageComponent,
  },
  {
    path:'**',
    redirectTo: 'by-capital',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  //NT OJO cuidado no se exporta el CountriesRoutingModule sino RouterModule
  exports: [RouterModule],
  providers: [],
})
export class CountriesRoutingModule { }
