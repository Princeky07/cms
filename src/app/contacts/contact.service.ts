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

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact{
    for (let i = 0; i < this.contacts.length; i++){
      if (this.contacts[i].id ===id){
        return this.contacts[i];
      } 
    }
    return null;
  }
}
