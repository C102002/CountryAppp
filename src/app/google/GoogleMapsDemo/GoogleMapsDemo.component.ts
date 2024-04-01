import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-google-maps-demo',
  templateUrl: './GoogleMapsDemo.component.html',
  styleUrls: ['./GoogleMapsDemo.component.css'],
})
export class GoogleMapsDemoComponent implements OnInit{
  apiLoaded!: Observable<boolean>;

  @Input()
  Countrylatng!:google.maps.LatLngLiteral;

  @Input()
  locationLiteral!:google.maps.LatLngLiteral;

  @Input()
  options!: google.maps.MapOptions

  zoom:number=8;

  lenguage:string=navigator.language;

  public isLoading:boolean=false;


  private apiLoading ():Observable<boolean>{
    const url='https://maps.googleapis.com/maps/api/js?key=AIzaSyBiG_lMtofhM0g89J3ioQdjEyeTyd_1F74'
    return this.httpClient.jsonp<boolean>(url,'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      )
  }

  private displayGoogleMaps():void{
    setTimeout(() => {
      this.apiLoaded=this.apiLoading();
    }, 5000);
    this.isLoading=true;
  }

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.displayGoogleMaps();
  }
 }
