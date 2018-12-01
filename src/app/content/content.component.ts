import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private route: ActivatedRoute, private titleService: Title) {}

  path: string;
  title: string;

  ngOnInit() {
    this.path = this.route.snapshot.routeConfig.path || 'all';
    this.title =
      this.path.charAt(0).toUpperCase() + this.path.slice(1) + ' GitHub Emoji';
    this.titleService.setTitle(this.title);
  }
}
