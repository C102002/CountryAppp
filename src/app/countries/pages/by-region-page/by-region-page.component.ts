import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {
  public countries:Country[]=[];

  public regions:Region[]=['Africa','Americas','Asia','Europe','Oceania'];

  public selectedRegion?: Region;

  constructor (private countriesServices:CountriesService){}

  ngOnInit(): void {
    this.countries=this.countriesServices.caheStore.byRegion.countries;
    this.selectedRegion=this.countriesServices.caheStore.byRegion.region;
  }

  searchByRegion(region:Region):void{

    this.selectedRegion=region;

    const answer=this.countriesServices.searchRegion(region)
      .subscribe(countries=>{
        this.countries=countries
      });
  }

}
