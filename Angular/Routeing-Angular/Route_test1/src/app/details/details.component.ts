import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagaedataService } from '../myService/managaedata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  token:any
 singledata :any
  constructor(private route:ActivatedRoute, private AccessService:ManagaedataService){
    console.log(route.snapshot.params['city_name'])
    this.token= route.snapshot.params['city_name']
  }
 async ngOnInit(): Promise<void> {
  let data = await this.AccessService.get_data()
  this.singledata=data.filter((row:any)=>{
    return  row.id==this.token

  })
  console.log(this.singledata[0])

  
  }
}
