import { Component, OnInit } from '@angular/core';

import { Message } from '../messages.model';
@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message("1", "some subject", "some message", "a sender")
  ]

  constructor() { }
  
  ngOnInit() {
  }

  onMessageAdded(message: Message){
    this.messages.push(message)
  }
}
