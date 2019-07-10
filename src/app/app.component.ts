import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temp-workspace';
  theme = true;

  public changeTheme() {
    this.theme = !this.theme;
  }
}
