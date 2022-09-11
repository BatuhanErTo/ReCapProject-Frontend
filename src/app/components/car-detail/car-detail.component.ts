import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/car_image';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carImages: CarImage[]
  carDetail : Car[]
  constructor(private carDetailService: CarDetailService,private carService: CarService ,private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarImagesById(params["carId"])
        this.getCarDetails(params["carId"])
      }
    })
  }

  getCarImagesById(carId: number) {
    this.carDetailService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data
    })
  }

  getCarDetails(carId: number){
    this.carService.getCarsById(carId).subscribe(response => {
      this.carDetail = response.data
    })
  }

  getImage(carImage : CarImage):string{
    return "https://localhost:44380/Uploads/Images/"+carImage.imagePath
  }

  getActiveString(carImage:CarImage){
    if(carImage===this.carImages[0]){
      return "active"
    }else{
      return ""
    }
  }
}
