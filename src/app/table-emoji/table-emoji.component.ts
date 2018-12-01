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
  @Input() search_value: string;
  @Input() path: string;

  emojis: Emoji[];
  size = 'default';
  loading = true;
  getEmojis(): void {
    this.emojiService.getEmojis().subscribe(emojis => {
      this.emojis = Object.entries(emojis).map(([name, link]) => ({
        name,
        link,
        isFavorite: false,
        isDeleted: false,
      }));
      this.loading = false;
    });
  }
  ngOnInit() {
    this.getEmojis();
  }
  onFavoriteClick(d) {
    console.log(d);
  }
}
