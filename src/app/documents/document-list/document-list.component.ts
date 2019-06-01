import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Document } from '../documents.model' 
import { DocumentService } from '../document.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  
  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute) {
  
  }

  ngOnInit() { 
    this.documents = this.documentService.getDocuments();
  }

  onNewDocument() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
