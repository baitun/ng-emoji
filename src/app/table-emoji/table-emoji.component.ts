import { Component, Input } from '@angular/core';
import { Emoji } from '../emoji.model';
import { EmojiService } from '../emoji.service';

@Component({
  selector: 'app-table-emoji',
  templateUrl: './table-emoji.component.html',
  styleUrls: ['./table-emoji.component.css'],
})
export class TableEmojiComponent {
  constructor(private emojiService: EmojiService) {}
  @Input() path: string;

  emojis: Emoji[] = [];
  emojisAll: Emoji[] = [];
  size = 'default';
  loading = true;
  getEmojis(): void {
    this.emojiService.getEmojis().subscribe(emojis => {
      this.emojisAll = Object.entries(emojis).map(([name, link]) => ({
        name,
        link,
        isFavorite: false,
        isDeleted: false,
      }));
      this.emojis = this.emojisAll;
      this.loading = false;
    });
  }
  ngOnInit() {
    this.getEmojis();
  }
  onFavoriteClick(emoji: Emoji) {
    this.emojisAll = this.emojisAll.map(e =>
      e === emoji ? { ...emoji, isFavorite: !emoji.isFavorite } : e
    );
    this.emojis = this.emojisAll;
  }
  onUnFavoriteClick(emoji: Emoji) {
    this.emojis = this.emojis.filter(e => e !== emoji);
  }
  onDeleteClick(emoji: Emoji) {
    this.emojis = this.emojis.filter(e => e !== emoji);
  }
  onRestoreClick(emoji: Emoji) {
    this.emojis = this.emojis.filter(e => e !== emoji);
  }
  onSearch(value) {
    if (!value.trim()) this.emojis = this.emojisAll;
    else
      this.emojis = this.emojisAll.filter(
        e => e.name.indexOf(value.toLowerCase()) > -1
      );
  }
}
