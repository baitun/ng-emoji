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
  page: string = 'all';
  emojis: Emoji[];
  getEmojis(): void {
    console.log('TableEmojiComponent.getEmojis');
    this.emojis = this.emojiService.getEmojis();
  }
  ngOnInit() {
    this.getEmojis();
  }
}
