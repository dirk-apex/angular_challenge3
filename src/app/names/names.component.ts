import { Component, OnInit } from '@angular/core';

import { Person } from '../Person';
import { PEOPLE } from '../mock-people';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  names: Person[]

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.names = PEOPLE;
    this.personService.addPersonObserve().subscribe(person => this.addPerson(person));
  }

  addPerson(person: Person) {
    this.names.push(person);
  }

}
