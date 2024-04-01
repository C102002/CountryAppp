import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-traduccion-info',
  templateUrl: './traduccionInfo.component.html',
  styleUrls: ['./traduccionInfo.component.css'],
})
export class TraduccionInfoComponent {
  @Input()
  country!:Country
  traduccions:string[]=[];
  traduccionsInfoCommon:string[]=[];

  ngOnInit(): void {
    this.traduccions=Object.keys(this.country.translations);
    let temp=Object.values(this.country.translations);
    temp.forEach(temps => {
      this.traduccionsInfoCommon.push(temps.common);
    });
  }
}
