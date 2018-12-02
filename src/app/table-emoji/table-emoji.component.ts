import { Component, Input, OnInit } from '@angular/core';
import { Emoji } from '../emoji.model';
import { EmojiService } from '../emoji.service';

@Component({
  selector: 'app-table-emoji',
  templateUrl: './table-emoji.component.html',
  styleUrls: ['./table-emoji.component.css'],
})
export class TableEmojiComponent implements OnInit {
  constructor(private emojiService: EmojiService) {}
  @Input() path: string;

  emojis: Emoji[] = [];
  emojisAll: Emoji[] = [];
  size = 'default';
  loading = false;
  searchValue = '';
  getEmojisFirstTime(): void {
    this.loading = true;
    localStorage.clear();
    this.emojiService.getEmojis().subscribe(emojis => {
      this.emojisAll = Object.entries(emojis).map(([name, link]) => ({
        name,
        link,
        isFavorite: false,
        isDeleted: false,
      }));
      this.emojis = this.emojisAll;
      this.loading = false;
      localStorage.setItem('emojis', JSON.stringify(this.emojisAll));
    });
  }
  ngOnInit() {
    const emojisFromLS = localStorage.getItem('emojis');
    if (!emojisFromLS) {
      this.getEmojisFirstTime();
    } else {
      this.emojisAll = JSON.parse(emojisFromLS);
    }
    this.emojis = this.getFiltred();
  }
  getFiltred(): Emoji[] {
    return this.emojisAll.filter(e => {
      const searchCondition =
        e.name.indexOf(this.searchValue.toLowerCase()) > -1;
      switch (this.path) {
        case 'all':
          return !e.isDeleted && searchCondition;
        case 'favorite':
          return e.isFavorite && searchCondition;
        case 'deleted':
          return e.isDeleted && searchCondition;
      }
    });
  }
  onFavoriteToggle(emojiSelected: Emoji) {
    this.emojisAll = this.emojisAll.map(emoji =>
      emoji === emojiSelected
        ? { ...emoji, isFavorite: !emoji.isFavorite }
        : emoji
    );
    localStorage.setItem('emojis', JSON.stringify(this.emojisAll));
    this.emojis = this.getFiltred();
  }
  onDeleteToggle(emojiSelected: Emoji) {
    this.emojisAll = this.emojisAll.map(e =>
      e === emojiSelected ? { ...e, isDeleted: !e.isDeleted } : e
    );
    localStorage.setItem('emojis', JSON.stringify(this.emojisAll));
    this.emojis = this.getFiltred();
  }
  onSearch(value) {
    this.searchValue = value;
    this.emojis = this.getFiltred();
  }
}
