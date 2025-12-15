import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,],
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

}
