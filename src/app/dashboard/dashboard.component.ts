import { Component,OnInit } from '@angular/core';
import { customerService } from '../customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit{
Customers:any[]=[];
constructor(private CustomerService:customerService){}
ngOnInit(){
  this.CustomerService.getcustomers().subscribe((data)=>{
    this.Customers=data;

  })
  //this.Customers.getcustomers().subscribe((data)=>{
    
  
}
}

