import {Injectable} from '@angular/core';
import { Contact } from '../contacts/contacts.model';

@Injectable()
export class Message {
    constructor(
      public id: string,
      public subject: string,
      public msgText: string,
      public sender: string
    ) {}
  }