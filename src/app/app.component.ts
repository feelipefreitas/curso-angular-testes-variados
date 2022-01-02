import { Component, OnInit } from '@angular/core';

interface IPerson {
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  filterValue = '';
  showComponent = false;
  currentStatusSelected = 'Ativo';

  peopleListFiltered: IPerson[] = [];
  peopleList: IPerson[] = [
    {
      name: 'Lucas'
    },
    {
      name: 'Maria'
    },
    {
      name: 'Laura'
    },
  ];

  ngOnInit() {
      this.peopleListFiltered = this.peopleList;
  }

  renderComponent() {
    this.showComponent = !this.showComponent;
  }

  onStatusChanged(status: string) {
    this.currentStatusSelected = status;
  }

  onInputTextChange(filterText: string) {
    this.filterValue = filterText;

    this.peopleListFiltered = this.returnPeopleListFiltered(filterText);
  }

  returnPeopleListFiltered(filterText: string): IPerson[] {
    if(!filterText) {
      return this.peopleList;
    }

    return this.peopleList
      .filter(person => person.name.includes(filterText));
  }
}
