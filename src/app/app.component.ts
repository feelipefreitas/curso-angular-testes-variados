import { Component } from '@angular/core';

interface IPeople {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputFilter = '';
  showComponent = false;
  currentStatusSelected = 'Ativo';

  renderComponent() {
    this.showComponent = !this.showComponent;
  }

  onStatusChanged(status: string) {
    this.currentStatusSelected = status;
  }
}
