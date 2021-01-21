import { PropertyService } from './../property.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-requirement-list',
  templateUrl: './property-requirement-list.component.html',
  styleUrls: ['./property-requirement-list.component.css']
})
export class PropertyRequirementListComponent implements OnInit {

  property_data = []

  selectProp

  constructor(private PropertyService:PropertyService) { }

  ngOnInit(): void {
    this.loadProperty()
  }

  loadProperty()
  {
    this.PropertyService.getPropertyRequirement().subscribe(res=>{
      console.log(res)
      if(res['status'] == "error")
      {
        console.log("Project Requirement Error!")
      }
      else{
        this.property_data = res['data']
      }
    })
  }

  onSelect(id)
  {
    if(this.selectProp!=null)
    {
      this.selectProp = null
    }
    else
    {
      this.selectProp = id
    }
  }
}
