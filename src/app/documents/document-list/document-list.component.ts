import { Component, OnInit, OnDestroy } from '@angular/core';

import { Document } from '../documents.model';
import { DocumentsService } from '../document.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  subscription: Subscription;

  constructor(private documentService: DocumentsService) { }

  ngOnInit() {
    
    this.documentService.documentChangedEvent.subscribe((documents: Document[]) => {
      this.documents = documents.slice();
    });

    this.subscription = this.documentService.documentListChangedEvent.subscribe((documents: Document[]) => {
      this.documents = documents;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
