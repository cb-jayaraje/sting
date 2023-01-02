import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-design-patterns',
  templateUrl: './design-patterns.component.html',
  styleUrls: ['./design-patterns.component.css'],
})
export class DesignPatternsComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Sting - Design Patterns');
  }

  ngOnInit(): void {}
}
