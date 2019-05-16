import { Component, OnInit, Input } from '@angular/core';

import { Message } from '../../messages.model'
import { initDomAdapter } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;

  constructor(){ }

  ngOnInit() { }

  
}
