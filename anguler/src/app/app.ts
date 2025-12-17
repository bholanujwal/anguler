import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Button } from './shared/UI/button/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  constructor(private router: Router) { }

  goToAbout() {
    this.router.navigate(["/about"]);
  }

  goToHome() {
    this.router.navigate([""]);
  }

  goToContactUs() {
    this.router.navigate(["/contactUs"]);
  }

  goToApi() {
    this.router.navigate(["/api"]);
  }

  save(){
    console.log("button is clicked");
  }
}
