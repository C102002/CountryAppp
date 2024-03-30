import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css'],
})
export class SearchBoxComponent {
  @Output()
  public onValue:EventEmitter<string> =new EventEmitter() ;

  @Input()
  public placeholder:string='';


  searchElement(value:string):void{
    console.log(value);
    this.onValue.emit(value);
    // this.elementInput.nativeElement.value='';
  }
 }
