import { Component, OnInit } from '@angular/core';
import { ManagedataService } from './Myservice/managedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Api_Node';
  data:any
  constructor(private AccessService:ManagedataService){

  }
  async ngOnInit(): Promise<void> {
    this.data = await this.AccessService.get_data()
    console.log(this.data)
    
  }
}
