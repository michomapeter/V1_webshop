import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.css']
})
export class FiltresComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
   categories = ['shoes' ,'sports'];
  constructor() { }

  ngOnInit(): void {
  }

  onShowCategory(category: string): void{
    this.showCategory.emit(category)
  }

}
