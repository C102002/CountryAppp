import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private API_Url:string='https://restcountries.com/v3.1';

  public caheStore:CacheStore={
    byCapital:{term:'',countries:[]},
    byCountry:{term:'',countries:[]},
    byRegion:{region:'',countries:[]}
  }

  private SaveToLocalStorage(){
    localStorage.setItem('cacheStore',JSON.stringify(this.caheStore))
  }

  private LoadToLocalStorage(){
    if (!localStorage.getItem('cacheStore')) return;
    this.caheStore=JSON.parse(localStorage.getItem('cacheStore')!);
  }


  constructor(private http:HttpClient) {
    this.LoadToLocalStorage();
  }

  private countriesRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(()=>of([])),
        delay(1000),
      )
  }

  orderMenorPopulationsCountry(countries:Country[]):Country[]{

    let orderCountries:Country[];

    orderCountries=countries.sort(function({population:power1}:Country,{population:power2}:Country){

      if (power1>power2) return 1;
      if (power1<power2) return -1;
      return 0;
    });
    return(orderCountries);
  }

  orderMayorPopulationsCountry(countries:Country[]):Country[]{

    let orderCountries:Country[];

    orderCountries=countries.sort(function({population:power1}:Country,{population:power2}:Country){

      if (power1<power2) return 1;
      if (power1>power2) return -1;
      return 0;
    });
    return(orderCountries);
  }

  searchCountryByAlphaCode(code:string):Observable<Country|null>{
    const url=`${this.API_Url}/alpha/${code}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries=>countries.length>0 ? countries[0] : null),
        catchError(()=>of(null))
        );
  }

  searchCapital(term : string):Observable<Country[]>{
    const url=`${this.API_Url}/capital/${term}`;
    return this.countriesRequest(url)
      .pipe(
        tap(countries=>this.caheStore.byCapital={term,countries}),
        tap(()=>this.SaveToLocalStorage())
      )
  }

  searchCountry(name:string):Observable<Country[]>{
    const url=`${this.API_Url}/name/${name}`;
    return this.countriesRequest(url)
    .pipe(
      tap(countries=>this.caheStore.byCountry={term:name,countries}),
      tap(()=>this.SaveToLocalStorage())
    )
  }
  searchRegion(region:Region):Observable<Country[]>{
    const url=`${this.API_Url}/region/${region}`;
    return this.countriesRequest(url)
    .pipe(
      tap(countries=>this.caheStore.byRegion={region,countries}),
      tap(()=>this.SaveToLocalStorage())
    )
  }
}
