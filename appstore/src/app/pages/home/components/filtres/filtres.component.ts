import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.css']
})
export class FiltresComponent implements OnInit {
   categories = ['shoes' ,'sports'];
  constructor() { }

  ngOnInit(): void {
  }

}
