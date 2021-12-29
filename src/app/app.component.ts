import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showComponent = false;

  renderComponent() {
    this.showComponent = !this.showComponent;
  }
}
