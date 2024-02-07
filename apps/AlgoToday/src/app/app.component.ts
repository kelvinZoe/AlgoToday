import { Component } from '@angular/core';

@Component({
  selector: 'algo-today-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'algo-today';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
