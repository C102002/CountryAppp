import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Clp, Country } from '../../interfaces/country';

@Component({
  selector: 'components-monedas-info',
  templateUrl: './MonedasInfo.component.html',
  styleUrls: ['./MonedasInfo.component.css'],
})
export class MonedasInfoComponent implements OnInit{

  @Input()
  country!:Country
  monedas:string[]=[];
  monedasInfo:string[]=[];

  monedaData:Clp[]=[{name:'',symbol:''}]

  getCurrencies():void{
    this.monedas=Object.keys(this.country.currencies);
    let values=Object.values(this.country.currencies);
    values.forEach(values=> {
      this.monedasInfo.push(values);
    });
    this.monedaData=values
  }

  ngOnInit(): void {
    this.getCurrencies()
  }
}
