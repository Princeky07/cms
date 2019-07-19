import { Component, OnInit } from '@angular/core';
import { Document } from './documents.model';
import { DocumentsService } from './document.service';

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedDocument: Document;

  constructor(private documentService: DocumentsService) { }

  ngOnInit() {
    this.documentService.documentSelectedEvent.subscribe((document) => {
      this.selectedDocument = document;
    });
  }

}
