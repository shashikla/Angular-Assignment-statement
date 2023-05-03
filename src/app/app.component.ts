import { Component, 
  OnInit, 
  OnChanges, 
  OnDestroy, 
  AfterContentChecked, 
  AfterContentInit,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Angular_Assignment';
  //  usr_value : any;
  //  value_print : any;

  constructor(){
    console.log("This is outside console");
  }
  
  // ngOnChanges(){
  //   console.log("This is inside ngonchanges");
  // }

  // ngOnInit(){
  //     console.log("This is inside ngoninit hook");
  //     let a=[1,2,3,4,5]
      
  //     for(let i=0;i<a.length;i++){
  //       console.log(a[2]);
  //       if(a[i] == 3){
  //         console.log("the value is 3");
  //         a[i] = 6;
  //         console.log();
          
  //       }else{
  //         console.log("Error");
          
  //       }
        
  //     }
  // }
  // onclick(){
  //   let a=[1,2,3,4,5]
    
  //   for(let i=0; i<a.length; i++){
  //     // this.usr_value = document.getElementById()
  //     if(a[i] = this.usr_value){
  //       // this.value_print = "you have fetch the value";
  //       a[i] = this.value_print;
  //       this.value_print = a;
  //     }
  //     else{
  //       this.value_print = "value not match";
        
  //     }
  //   }
    
  // }
}
