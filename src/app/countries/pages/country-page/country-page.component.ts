import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params, Router} from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  public country?:Country

  constructor(
    private activatedRoute:ActivatedRoute,
    private countriesService:CountriesService,
    private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.countriesService.searchCountryByAlphaCode(id))
    )
    .subscribe((country)=>{
      if (!country) return this.router.navigateByUrl('');

      setTimeout(() => {
        this.country=country
      }, 1000);
      return
    })
  }

  searchCountry(code:string){
    this.countriesService.searchCountryByAlphaCode(code)
    .subscribe(country=>{
      // console.log(country);
    });
  }
}
