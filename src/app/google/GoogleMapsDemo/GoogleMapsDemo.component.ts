import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-google-maps-demo',
  templateUrl: './GoogleMapsDemo.component.html',
  styleUrls: ['./GoogleMapsDemo.component.css'],
})
export class GoogleMapsDemoComponent implements OnInit {
  apiLoaded!: Observable<boolean>;

  @Input()
  Countrylatng:number[]=[];

  CountrylatngLiteral!:google.maps.LatLngLiteral

  @Input()
  locationLiteral!:google.maps.LatLngLiteral

  lenguage:string=navigator.language;

  private apiLoading():Observable<boolean>{
    const url='https://maps.googleapis.com/maps/api/js?key=AIzaSyBiG_lMtofhM0g89J3ioQdjEyeTyd_1F74'
    return this.httpClient.jsonp<boolean>(url,'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      )
  }

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {

    this.apiLoaded=this.apiLoading();

    if(this.apiLoaded){
      this.CountrylatngLiteral={
        lat:this.Countrylatng[0],
        lng:this.Countrylatng[1]
      }
      console.log('Google map element');

      console.log('literal'+this.locationLiteral);
      console.log('number'+this.CountrylatngLiteral);
    }
    else throw new Error('Error al cargar')
  }
 }
