import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {

  onButtonClick(event){
    console.log('Click event is working, event:', event);
  }

  randcolor:Array<any>;

  constructor() {
    this.randcolor=[]
    for(var i=0; i<=10; i++){
      let color = '#' + Math.floor(Math.random()*16777215).toString(16)
    this.randcolor.push(color)
    }
  }

  ngOnInit() {
  }

}
