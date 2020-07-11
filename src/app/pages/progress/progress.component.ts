import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  progresoA: number = 20;
  progresoV: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
