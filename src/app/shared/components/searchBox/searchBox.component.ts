import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css'],
})
export class SearchBoxComponent implements OnInit,OnDestroy {

  private debouncerSubscription?:Subscription;

  private _debouncer: Subject<string> = new Subject<string>();

  public get debouncer(): Subject<string> {
    return this._debouncer;
  }
  public set debouncer(value: Subject<string>) {
    this._debouncer = value;
  }

  @Output()
  public onValue:EventEmitter<string> =new EventEmitter() ;

  @Output()
  public ondDebounce:EventEmitter<string> =new EventEmitter() ;

  @Input()
  public placeholder:string='';

  @Input()
  public initialValue:string='';

  ngOnInit(): void {
    //OJO siempre debemos eliminar la subscription
    console.log(this.initialValue);

    this.debouncerSubscription=this.debouncer
    .pipe(
      debounceTime(100)
    )
    .subscribe(value=>{
      console.log('debaouncer',value)
      this.ondDebounce.emit(value)
    });
  }

  ngOnDestroy(): void {
    this.ondDebounce.unsubscribe();
  }


  searchElement(value:string):void{
    console.log(value);
    this.onValue.emit(value);
    //this.elementInput.nativeElement.value='';
  }
  onKeyPress(searchTerm:string){
    // console.log(searchTerm);
    this.debouncer.next(searchTerm);
  }
 }
