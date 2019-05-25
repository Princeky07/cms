import { Injectable, EventEmitter } from '@angular/core';
import{Message} from './messages.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { 
    this.messages = MOCKMESSAGES;
  }

  messages: Message[] = [];

  messagesChanged = new EventEmitter<Message[]>();

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    if (!this.messages) {
      return null;
    }

    for (let message of this.messages) {
      if (message.id === id) {
        return message;
      }
    }

    return null;
  }

  addMessage(message: Message){
    this.messages.push(message);
    this.messagesChanged.emit(this.messages.slice());
  }

}
