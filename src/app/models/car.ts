import { CarImage } from "./car_image";

export interface Car{
    id : number,
    carId : number,
    carName : string,
    brandName : string,
    colorName : string,
    modelYear : number,
    dailyPrice : number,
    description : string,
    carImage : CarImage[]
}