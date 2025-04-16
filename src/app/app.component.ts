import { Component } from '@angular/core';
import { HorizontalScrollerComponent } from './horizontal-scroller/horizontal-scroller.component';

@Component({
  selector: 'app-root',
  imports: [HorizontalScrollerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'horizontal scroller';
}
