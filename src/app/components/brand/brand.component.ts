import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands : Brand[] = [];
  currentBrand : Brand = {id:0,name:""}
  constructor(private brandService:BrandService) { }
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
        this.brands = response.data
    })
  };
  setCurrentBrandClass(brand: Brand){
    this.currentBrand = brand;
  }
  setAllBrandClass(){
    this.currentBrand = {id:0,name:""} 
  }
  getCurentBrandClass(brand : Brand){
    if(this.currentBrand == brand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllBrandClass(){
    if(this.currentBrand.name == "" && this.currentBrand.id == 0){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }


}
