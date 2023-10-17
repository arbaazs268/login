import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  showElement = true;
  hide:boolean=false
  sidebar(){
    if(this.hide===false){
      this.showElement = !this.showElement; 
      this.hide=true;
    }
    else{
      this.showElement = !this.showElement; 
        this.hide=false;
    }
    this.showElement = !this.showElement; 
  }

  constructor(private authService:AuthService){}
  logout(){
    this.authService.logout();
  }
  homealert(){
    alert('this is home page')
  }
}
