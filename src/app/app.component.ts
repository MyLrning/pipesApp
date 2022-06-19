import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  name: string = 'facundo valerio'
  value: string = '123456'
  obj: object = {name: this.name.split(' ')[0], lastName: this.name.split(' ')[1]}


  getName() {
    console.log(this.name);    
  }

}
