import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Country, Languages } from '../../interfaces/country';

@Component({
  selector: 'components-lenguage-info',
  templateUrl: './lenguageInfo.component.html',
  styleUrls: ['./lenguageInfo.component.css'],
})
export class LenguageInfoComponent implements OnInit{

  @Input()
  country!:Country
  laguages:string[]=[];

  ngOnInit(): void {
    this.laguages=Object.values(this.country.languages);
  }
}
