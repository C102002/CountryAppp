import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-google-maps-demo',
  templateUrl: './GoogleMapsDemo.component.html',
  styleUrls: ['./GoogleMapsDemo.component.css'],
})
export class GoogleMapsDemoComponent {
  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBiG_lMtofhM0g89J3ioQdjEyeTyd_1F74', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
    console.log(JSON.stringify(this.apiLoaded));

  }
 }
