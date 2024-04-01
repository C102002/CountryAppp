import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Country, NativeName, Translation } from '../../interfaces/country';

@Component({
  selector: 'countries-more-info',
  templateUrl: './moreInfo.component.html',
  styleUrls: ['./moreInfo.component.css'],
})
export class MoreInfoComponent {

  @Input()
  country!:Country
  timezones:string[]=[]
  borders:string[]=[]
  postalcode:string=''
  NativeNames:string[]=[]
  NativeNamesInfoCommon:string[]=[]

  private getTimeZone(){
    this.timezones=this.country.timezones;
    let n:number=0;
    // if (this.timezone.length>3){
    //   n=this.timezone.length-3;
    //   this.timezone.splice(0,n);
    //   this.timezone.push('...')
    // }
  }

  private getBorders(){
    this.borders=this.country.borders||['No tiene fronteras']
    let n:number=0;
    // if (this.borders.length>5){
    //   n=this.borders.length-5;
    //   this.borders.splice(0,n);
    // }
  }

  ngOnInit(): void {

    this.getTimeZone();
    this.getBorders();
    this.postalcode=this.country.postalCode?.format||'No tiene'


    this.NativeNames=Object.keys(this.country.name.nativeName);
    let temp=Object.values(this.country.name.nativeName);


    let _temp:Translation[]=[]

    temp.forEach(temps => {
      _temp.push(temps);
    });

    this.NativeNames=Object.keys(_temp);


  }
}
