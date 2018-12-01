import { Injectable } from '@angular/core';
import { Emoji } from './emoji.model';
import { Observable, of } from 'rxjs';

const EMOJIS = [
  {
    name: '100',
    link:
      'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4af.png?v8',
    isFavorite: false,
    isDeleted: false,
  },
  {
    name: '1st_place_medal',
    link:
      'https://assets-cdn.github.com/images/icons/emoji/unicode/1f947.png?v8',
    isFavorite: true,
    isDeleted: false,
  },
  {
    name: 'south_georgia_south_sandwich_islands',
    link:
      'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f8.png?v8',
    isFavorite: true,
    isDeleted: false,
  },
];

@Injectable({
  providedIn: 'root',
})
export class EmojiService {
  constructor() {}

  getEmojis(): Observable<Emoji[]> {
    return of(EMOJIS);
  }
}
