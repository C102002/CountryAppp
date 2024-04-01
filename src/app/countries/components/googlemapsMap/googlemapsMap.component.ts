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
    this.capitalinfoCenter={
      lat:this.capitalinfo.latlng[0],
      lng:this.capitalinfo.latlng[1]
    }
    console.log('prueba'+this.capitalinfoCenter);

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
  @Input()
  capitalinfo!:CapitalInfo

  capitalinfoCenter!:google.maps.LatLngLiteral;

  zoom = 1;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
  };



  zoomIn() {
    console.log('componente',this.capitalinfoCenter);
    console.log('componente',this.center);

    // if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    // if (this.zoom > this.options.minZoom) this.zoom--;
  }

}
