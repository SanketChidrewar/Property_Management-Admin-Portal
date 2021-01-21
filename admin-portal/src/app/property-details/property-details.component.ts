import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  property = []
  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  closeDismiss()
  {
    this.modalService.dismissAll()
  }

}
