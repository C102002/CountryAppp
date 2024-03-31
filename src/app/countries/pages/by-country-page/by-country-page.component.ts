import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  public countries:Country[]=[];

  public isLoading:boolean=false;

  public initialValue:string='';

  constructor (private countriesServices:CountriesService){}

  ngOnInit(): void {
    this.countries=this.countriesServices.caheStore.byCountry.countries;
    this.initialValue=this.countriesServices.caheStore.byCountry.term;
  }

  searchByCountry(term:string):void{
    this.isLoading=true;

    const answer=this.countriesServices.searchCountry(term)
      .subscribe(countries=>{
        this.countries=countries
        this.isLoading=false;
      });
  }
}
