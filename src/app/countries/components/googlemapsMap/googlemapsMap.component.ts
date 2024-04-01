import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CapitalInfo } from '../../interfaces/country';

@Component({
  selector: 'countries-googlemaps-map',
  templateUrl: './googlemapsMap.component.html',
  styleUrls: ['./googlemapsMap.component.css'],
})
export class GooglemapsMapComponent implements OnInit {
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    this.capitalinfoCenter=this.capitalinfo.latlng
  }
  @Input()
  capitalinfo!:CapitalInfo

  capitalinfoCenter:number[]=[];

  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };



  zoomIn() {
    console.log('componente',this.capitalinfo?.latlng);
    // if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    // if (this.zoom > this.options.minZoom) this.zoom--;
  }

}
