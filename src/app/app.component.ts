import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myprofile';
  name  = 'Ankit';
  student ={
    'rno':1,"name":"abc"
  }

  arr =[1,4,2,6,9];

  stuArr =[
    { rno : 1, name : "ABC"},
    { rno : 3, name : "DEF"}
  ];
}
