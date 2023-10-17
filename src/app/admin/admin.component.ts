import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],

})
export class AdminComponent {
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
}
