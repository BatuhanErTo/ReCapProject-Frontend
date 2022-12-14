import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/car_image';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars : Car[] = []
  constructor(private carService : CarService,private activatedRoute : ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else if(params["colorId"],params["brandId"]){
        this.getCarsByBoth(params["colorId"],params["brandId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data
    })
  };
  
  getCarsByBrand(brandId : number){
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data
    })
  };

  getCarsByColor(colorId : number){
    this.carService.getCarsByColor(colorId).subscribe(response =>{
      this.cars = response.data
    })
  };

  getCarsByBoth(colorId:number,brandId:number){
    this.carService.getCarsByColorBrand(colorId,brandId).subscribe(response => {
      this.cars = response.data
    })
  }

  getImage(car : Car):string{
    return "https://localhost:44380/Uploads/Images/"+car.carImage[0].imagePath
  }
}
