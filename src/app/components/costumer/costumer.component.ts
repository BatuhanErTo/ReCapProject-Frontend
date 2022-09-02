import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.css']
})
export class CostumerComponent implements OnInit {
  customers : Customer[] = []
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers(){
    this.customerService.getCustomers().subscribe(response =>{
      this.customers = response.data
    })
  };
}
