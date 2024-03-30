import { Component, ElementRef, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  public countries:Country[]=[];

  constructor (private countriesServices:CountriesService){}

  searchByCapital(term:string):void{
    const answer=this.countriesServices.searchCapital(term)
      .subscribe(countries=>{
        this.countries=countries
      });
    // console.log(this.countries);
    // this.countries=this.countriesServices.orderCountriesByCountry(this.countries);
    // console.log(this.countries);


  }
}
