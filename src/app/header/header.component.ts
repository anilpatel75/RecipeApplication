import { fadeInAnimation } from './../animation';
import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fadeInAnimation],
   host: { '[@fadeInAnimation]': '' }
 
})
export class HeaderComponent {
  onclick()
  {
    console.log("hello there")
  }
 }
