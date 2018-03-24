import { Component, OnInit ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() lodedFeatures = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }
    onSelect(fatures: string)
    {
      this.lodedFeatures.emit(fatures);
    }

}
