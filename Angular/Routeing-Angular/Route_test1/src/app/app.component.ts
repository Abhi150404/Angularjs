import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Route_test1';
  data =[
    {
      id:1,
      name:'Abhishek Sharma',
      Qualification:'BTECH',
      city:'Rishikesh',
      dob:12-12-2012,
      fee:50000,
    },
    {
      id:2,
      name:'Amit Rawat',
      Qualification:'MTECH',
      city:'Pune',
      dob:12-11-2012,
      fee:60000,
    },
    {
      id:3,
      name:'Arun Bhaskar',
      Qualification:'BTECH',
      city:'Rishikesh',
      dob:12-8-2012,
      fee:56000,

    },
    {
      id:4,
      name:'Akhilesh Rana',
      Qualification:'BA',
      city:'Delhi',
      dob:12-1-2012,
      fee:40000,

    }
  ]
}
