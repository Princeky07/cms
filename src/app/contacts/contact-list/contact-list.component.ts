import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Contact } from '../contacts.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['../../app.component.css', './contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
   }
  
}
