import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Person } from './Person'


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private subject = new Subject<Person>();

    addPerson(person: Person) {
        this.subject.next(person);
    }

    addPersonObserve(): Observable<Person> {
        return this.subject.asObservable();
    }

}
