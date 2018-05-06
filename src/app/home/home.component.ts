import { fadeInAnimation } from './../animation';
import { Component, OnInit, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } 
from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation],
 
})
export class HomeComponent implements OnInit{
  imagesrc:String;
  counter:number = 0;
  dailyData:any =[];
  state:string = 'inactive';
 
  images=[
  "assets/images/bady-qb-490119-unsplash.jpg",
  "assets/images/chinh-le-duc-264152-unsplash.jpg",
  "assets/images/dan-gold-298710-unsplash.jpg",
  "assets/images/geo-darwin-39403-unsplash.jpg",
  "assets/images/peter-wendt-123928-unsplash.jpg",
  "assets/images/igor-ovsyannykov-458022-unsplash.jpg"
]



  ngOnInit(){
    this.imagesrc = this.images[0];
    setInterval(()=> {this.myfunction(this.images);}, 3000)
   
  }
  ngOnChages()
  {
   
  }

  setTheValue(valueX) {
    this.imagesrc = valueX;
  }

  onClickRight()
  {  this.onMouseOver();
      if( this.counter<this.images.length-1)
    {
      this.counter++;
      this.imagesrc = this.images[this.counter]
    }    
  }

  onClickLeft()
  { 
    this.onMouseOver();
   if(this.counter>0)
    { 
       this.counter--;
       this.imagesrc = this.images[this.counter]
    }
 }
  onMouseOver()
{
  this.state === 'active' ? this.state ='inactive' :this.state = 'active';
}
 
 
  // slideshow  for  main page
  myfunction(bh)
  {     //generating random number
      let imgSrc = "";
        function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      }
      function fff(){
        imgSrc = bh[getRandomIntInclusive(0,bh.length-1)];
        console.log(imgSrc)
        return imgSrc
      }
      
      this.setTheValue(fff());
     // console.log(this.imagesrc)
  }
}

 
