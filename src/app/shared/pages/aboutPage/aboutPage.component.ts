import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-about-page',
  template: `<p>aboutPage works!</p>`,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class AboutPageComponent { }
