import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  objek={
    field1:11,
    field2:12
  }
  constructor() {}

  ngOnInit(): void {}
}
