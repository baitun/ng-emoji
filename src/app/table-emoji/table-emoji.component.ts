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
  getEmojis(): void {
    this.emojiService.getEmojis().subscribe(emojis => (this.emojis = emojis));
  }
  ngOnInit() {
    this.getEmojis();
  }
  onFavoriteClick(d) {
    console.log(d);
  }
}
