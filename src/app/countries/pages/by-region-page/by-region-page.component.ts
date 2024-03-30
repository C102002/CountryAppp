import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {
  public countries:Country[]=[];

  constructor (private countriesServices:CountriesService){}

  searchByCapital(term:string):void{
    const answer=this.countriesServices.searchRegion(term)
      .subscribe(countries=>{
        this.countries=countries
      });
  }

}
