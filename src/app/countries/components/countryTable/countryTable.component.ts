import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-country-table',
  templateUrl: './countryTable.component.html',
  styleUrls: ['./countryTable.component.css'],
})
export class CountryTableComponent implements OnInit{

  @Input()
  public countries:Country[]=[];

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.countries=this.countriesService.orderMayorPopulationsCountry(this.countries)
  }

 }
