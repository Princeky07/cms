import { Component, OnInit} from '@angular/core';
import { Contact } from '../contacts.model';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['../../app.component.css', './contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  subscription: Subscription;
  term: string;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.contactService.contactListChangedEvent
      .subscribe((contacts: Contact[])=> {
        this.contacts = contacts;
      })
    this.subscription = this.contactService.contactListChangedEvent
      .subscribe((contactsList: Contact[]) => {
        this.contacts = contactsList;
      })
  }
            
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }  
  
  onKeyPress(value: string) {
    this.term = value;
  }
}
