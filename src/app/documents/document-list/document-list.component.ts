import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Document } from '../documents.model' 
@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() documentWasSelected = new EventEmitter<Document>();
  documents: Document[] = [
    new Document("1", "Some Name", "A Description", "A URL", "Childs" ),
    new Document("2", "Some Other Name", "Another Description", "Another URL", "More Children")
  ];
  
  constructor() {}

  ngOnInit() { }

  onDocumentSelected(document: Document) {
    this.documentWasSelected.emit(document);
  }
}
