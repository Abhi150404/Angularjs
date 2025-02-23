import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ManagedataService {
  load_data ='http://localhost:2024/get_data'

  constructor() { }

  async get_data(){
    let res = await axios.get(this.load_data)
    return res.data
  }
}
