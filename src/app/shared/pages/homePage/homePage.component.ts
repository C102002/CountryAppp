import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-home-page',
  templateUrl: './homePage.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HomePageComponent { }
