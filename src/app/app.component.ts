import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Joaquim";//irei compartilhar esse dado com outro componente
  userData = {
    email: "joaquim@gmail.com",
    role: "admin"
  }

  title = 'y';
}
