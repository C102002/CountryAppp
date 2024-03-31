import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit{

  public countries:Country[]=[];

  public isLoading:boolean=false;

  public initialValue:string='';

  constructor (private countriesServices:CountriesService){}
  ngOnInit(): void {
    this.countries=this.countriesServices.caheStore.byCapital.countries;
    this.initialValue=this.countriesServices.caheStore.byCapital.term;
  }

  searchByCapital(term:string):void{
    this.isLoading=true;
    const answer=this.countriesServices.searchCapital(term)
      .subscribe(countries=>{
        this.countries=countries
        this.isLoading=false;
      });
    // console.log(this.countries);
    // this.countries=this.countriesServices.orderCountriesByCountry(this.countries);
    // console.log(this.countries);


  }
}
