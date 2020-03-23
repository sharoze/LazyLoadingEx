import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odc3',
  templateUrl: './odc3.component.html',
  styleUrls: ['./odc3.component.css']
})
export class ODC3Component implements OnInit {
employees
  constructor() {
    this.employees = [
      {
        id: 100,
        Name: "Sam"
      },
      {
        id: 101,
        Name: "Suman"
      },
      {
        id: 102,
        Name: "Sushant"
      }
    ];
  }

  ngOnInit(): void {
  }

}
