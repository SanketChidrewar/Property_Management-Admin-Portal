import { PropertyService } from './../property.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PropertyDetailsComponent } from '../property-details/property-details.component';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  property_data = []
  result = []
  images = [
    "https://images.all-free-download.com/images/graphicthumb/beautiful_city_architectural_photography_6_165964.jpg",
    "https://images.adsttc.com/media/images/51d4/84a8/b3fc/4bea/e100/01d6/large_jpg/Portada.jpg?1372882078",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwt1B3wYeHcErabp24KGQGGaOBKPO3rudmw&usqp=CAU",
    "https://navimumbaihouses.com/wp-content/property/00001920/20161211052126_1101753242.jpg",
    "https://i.pinimg.com/originals/1b/b0/47/1bb0477a1429a66bb34614a8a90a9e5f.jpg " 
  ]
 
  constructor(private property:PropertyService,private modealService:NgbModal) { }

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties()
  {
    this.property.getProperties().subscribe(res=>{
      if(res['status']=="success")
      {
        this.property_data = res['data']
        console.log(this.property_data)
      }
    })
  }

  print(rating)
  {
    console.log(rating)
    this.result=[]
    for(let i = 0;i<rating%6;i++)
    {
      this.result.push(1)
    }
  }

  loadModal(prop)
  {
    const modalRef = this.modealService.open(PropertyDetailsComponent,{size : "lg"})
    prop['prop_images'] = this.images
    modalRef.componentInstance.property = prop
  }

}
