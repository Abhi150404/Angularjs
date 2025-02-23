import { Component, OnInit } from '@angular/core';
import { ManagaedataService } from '../myService/managaedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data:any
constructor(private AccessService:ManagaedataService){  // AccessService -> ManagedataService Token
}
async ngOnInit(): Promise<void> {
  this.data= await this.AccessService.get_data()  // Service Componet Variable = get_data()
  console.log(this.data);
  
}
}
  // data =
   //[
  //   {
  //     id:1,
  //     name:'Abhishek Sharma',
  //     Qualification:'BTECH',
  //     city:'Rishikesh',
  //     dob:12-12-2012,
  //     fee:50000,
  //   },
  //   {
  //     id:2,
  //     name:'Amit Rawat',
  //     Qualification:'MTECH',
  //     city:'Pune',
  //     dob:12-11-2012,
  //     fee:60000,
  //   },
  //   {
  //     id:3,
  //     name:'Arun Bhaskar',
  //     Qualification:'BTECH',
  //     city:'Rishikesh',
  //     dob:12-8-2012,
  //     fee:56000,

  //   },
  //   {
  //     id:4,
  //     name:'Akhilesh Rana',
  //     Qualification:'BA',
  //     city:'Delhi',
  //     dob:12-1-2012,
  //     fee:40000,

  //   }
  // ]


