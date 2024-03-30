import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private API_Url:string='https://restcountries.com/v3.1'

  constructor(private http:HttpClient) { }

  orderCountriesByCountry(countries:Country[]):Country[]{

    let orderCountries:Country[];

    orderCountries=countries.sort(function({population:power1}:Country,{population:power2}:Country){

      if (power1>power2) return 1;
      if (power1<power2) return -1;
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

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error=>{
          console.log(error);
          return(of([]))
        })
        );
  }

  searchCountry(name:string):Observable<Country[]>{
    const url=`${this.API_Url}/name/${name}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error=>{
          console.log(error);
          return(of([]))
        })
        );
  }
  searchRegion(region:string):Observable<Country[]>{
    const url=`${this.API_Url}/region/${region}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error=>{
          console.log(error);
          return(of([]))
        })
        );
  }
}
