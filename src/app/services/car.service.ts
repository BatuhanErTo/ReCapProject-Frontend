import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44380/api/";
  constructor(private httpClient : HttpClient) { }
  
  getCars(): Observable<ListResponseModel<Car>>{
    let newUrl = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }
  getCarsById(carId: number): Observable<ListResponseModel<Car>>{
    let newUrl = this.apiUrl+"cars/getcardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newUrl)
  }
  getCarsByBrand(brandId : number): Observable<ListResponseModel<Car>>{
    let newUrl = this.apiUrl + "cars/getcardetailsbybrandid?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newUrl)
  }
  getCarsByColor(colorId:number) : Observable<ListResponseModel<Car>>{
    let newUrl = this.apiUrl + "cars/getcardetailsbycolorid?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }
  getCarsImagePath(car : Car): Observable<ListResponseModel<Car>>{
    let newUrl = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newUrl)
  }
}
