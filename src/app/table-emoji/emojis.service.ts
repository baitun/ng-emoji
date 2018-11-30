import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emoji } from '../emoji.model';

@Injectable()
export class EmojisService {
  readonly URL = 'https://api.github.com/emojis';
  constructor(private http: HttpClient) {}
  getEmojis() {
    // @TODO get rid of `res`
    let res = this.http.get<Emoji[]>(this.URL);
    console.log('getEmojis() res =', res);
    return res;
  }
}
