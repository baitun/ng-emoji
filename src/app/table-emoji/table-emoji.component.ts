import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Emoji } from '../emoji.model';
import { EmojiService } from '../emoji.service';

@Component({
  selector: 'app-table-emoji',
  templateUrl: './table-emoji.component.html',
  styleUrls: ['./table-emoji.component.css'],
})
export class TableEmojiComponent {
  constructor(
    private emojiService: EmojiService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}
  @Input() search_value: string;
  path: string = 'all';
  emojis: Emoji[];
  getEmojis(): void {
    this.emojiService.getEmojis().subscribe(emojis => (this.emojis = emojis));
  }
  ngOnInit() {
    this.path = this.route.snapshot.routeConfig.path || 'all';
    let title =
      this.path.charAt(0).toUpperCase() + this.path.slice(1) + ' GitHub Emoji';
    this.titleService.setTitle(title);
    this.getEmojis();
  }
  onFavoriteClick(d) {
    console.log(d);
  }
}
