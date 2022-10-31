import { Component, Directive, OnInit } from '@angular/core';
import * as constant from '../data/constant';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.scss'],
})
export class MangaCardComponent implements OnInit {
  title = 'angular-study';
  text: string = 'トグルボタン未選択';

  constructor() {}

  ngOnInit(): void {
    console.log(constant.COLS);
    console.log(constant.ROWS);
  }

  onClick() {
    alert('ボタン');
  }
}
