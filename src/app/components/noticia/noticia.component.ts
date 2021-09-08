import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: []
})
export class NoticiaComponent implements OnInit {

  @Input() items:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
