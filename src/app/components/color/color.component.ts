import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors : Color[] = []
  currentColor : Color = {id:0,name:""}
  constructor(private colorService : ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response =>{
      this.colors = response.data
    })
  };

  setColorClass(color:Color){
    this.currentColor = color
  }

  getColorClass(color:Color){
    if(this.currentColor == color){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  setAllColorClass(){
    this.currentColor = {id:0,name:""}
  }

  getAllColorClass(){
    if(this.currentColor.id == 0 && this.currentColor.name == ""){
      return "list-group-item active" 
    }else{
      return "list-group-item"
    }
  }
}
