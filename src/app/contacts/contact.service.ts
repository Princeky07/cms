import { Injectable, EventEmitter } from '@angular/core';

import { Contact } from './contacts.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() { 
    this.contacts = MOCKCONTACTS;
  }

  contacts: Contact[] = [];

  contactSelected = new EventEmitter<Contact>();

  contactListChangedEvent = new EventEmitter<Contact[]>();

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(index: string): Contact{
    return this.contacts[index];
  }

  deleteContact(contact: Contact) {
    if (contact === null) {
      return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }
    this.contacts.splice(pos, 1);
    this.contactListChangedEvent.emit(this.contacts.slice());
  }

}
