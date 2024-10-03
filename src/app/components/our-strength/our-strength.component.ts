import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-strength',
  standalone: true,
  imports: [],
  templateUrl: './our-strength.component.html',
  styleUrl: './our-strength.component.scss'
})
export class OurStrengthComponent implements OnInit {

count: number = 0;
maxCount: number = 100;
intervaltime: number = 50;
plusSign: string = "+";


count2: number = 0;  // Second counter value
maxCount2: number = 434;  // Maximum count for the second counter



ngOnInit() {
  this.startCounter();
  this.startCounter2();
}

startCounter(){
const interval = setInterval(() => {
if(this.count < this.maxCount){
  this.count += 1;

}else if(this.count === this.maxCount){
  clearInterval(interval); // Stop the counter when it reaches 100



}


}, this.intervaltime);





  
}


startCounter2(){
  const interval = setInterval(() => {
  if(this.count2 < this.maxCount2){
    this.count2 += 1;
  
  }else if(this.count2 === this.maxCount2){
    clearInterval(interval); // Stop the counter when it reaches 100
    
  }
    
  }, this.intervaltime);
  
  
  
  
  
    
  }
  


  

}
