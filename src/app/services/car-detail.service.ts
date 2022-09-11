import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/car_image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = "https://localhost:44380/api/carimages/getbycarid?carId="
  constructor(private httpClient : HttpClient) { }
  getCarImagesByCarId(carId : number): Observable<ListResponseModel<CarImage>>{
    let newUrl = this.apiUrl + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newUrl);
  }
}
