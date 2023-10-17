import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
  constructor(private authService:AuthService , private fb:FormBuilder, private router:Router){}
  login(){
    let user=this.authService.login(this.form.value.username, this.form.value.password)
    if(!user){
      alert("user not found")
    }
    else{
      this.router.navigateByUrl('/admin')
    }
  };
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
  login_alert(){
    alert("this is login page")
  }
  logout(){
    this.authService.logout();
  }
  home(){
    this.router.navigateByUrl('/')
  }
}
