import { Component } from '@angular/core';

@Component({
  selector: 'app-table-emoji',
  templateUrl: './table-emoji.component.html',
  styleUrls: ['./table-emoji.component.css'],
})
export class TableEmojiComponent {
  emojis: any = [
    {
      key: '1',
      name: '100',
      link:
        'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4af.png?v8',
      isfavorite: false,
    },
    {
      key: '2',
      name: '1st_place_medal',
      link:
        'https://assets-cdn.github.com/images/icons/emoji/unicode/1f947.png?v8',
      isfavorite: true,
    },
    {
      key: '3',
      name: 'south_georgia_south_sandwich_islands',
      link:
        'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f8.png?v8',
      isfavorite: true,
    },
  ];
}
