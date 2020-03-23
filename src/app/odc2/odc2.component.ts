import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odc2',
  templateUrl: './odc2.component.html',
  styleUrls: ['./odc2.component.css']
})
export class ODC2Component implements OnInit {
employees;
  constructor() {
    this.employees=["acc","ccc"];
    this.employees = [
      {
        id: 100,
        Name: "RAHIM"
      },
      {
        id: 101,
        Name: "Robert"
      },
      {
        id: 102,
        Name: "Rob"
      }
    ];

  }

  ngOnInit(): void {


  }


}
