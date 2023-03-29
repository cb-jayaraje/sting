import { Injectable, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { BehaviorSubject, from, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RightPanelService implements OnInit {
  contentData = [
    {
      id: 'm1',
      title: 'about',
      menu: [
        { id: 'c1', title: 'What is Sting?' },
        { id: 'c2', title: 'Who primarily uses Sting?' },
        { id: 'c3', title: 'How are we benefitted from Sting?' },
        { id: 'c4', title: 'What happens to Classic and Leap UI?' },
      ],
    },
    {
      id: 'm2',
      title: 'feedback',
      menu: [
        { id: 'c1', title: 'Guidelines' },
        { id: 'c2', title: 'Examples' },
      ],
    },
    {
      id: 'm3',
      title: 'metaphors',
      menu: [
        { id: 'c1', title: 'Guidelines' },
        { id: 'c2', title: 'Examples' },
      ],
    },
    {
      id: 'm4',
      title: 'conversation',
      menu: [
        { id: 'c1', title: 'Guidelines' },
        { id: 'c2', title: 'Examples' },
      ],
    },
    {
      id: 'm5',
      title: 'grouping',
      menu: [
        { id: 'c1', title: 'Guidelines' },
        { id: 'c2', title: 'Examples' },
      ],
    },
    {
      id: 'm6',
      title: 'colors',
      menu: [
        { id: 'c1', title: 'Brand palette' },
        { id: 'c2', title: 'Core UI palette' },
        { id: 'c3', title: 'Semantic palette' },
      ],
    },
    {
      id: 'm7',
      title: 'typography',
      menu: [
        { id: 'c1', title: 'Typography' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm8',
      title: 'alerts',
      menu: [
        { id: 'c1', title: 'Alerts' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm9',
      title: 'badges',
      menu: [
        { id: 'c1', title: 'Badges' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm10',
      title: 'breadcrumbs',
      menu: [
        { id: 'c1', title: 'Breadcrumbs' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm11',
      title: 'buttons',
      menu: [
        { id: 'c1', title: 'Button' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm12',
      title: 'cards',
      menu: [
        { id: 'c1', title: 'Cards' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm13',
      title: 'checkbox',
      menu: [
        { id: 'c1', title: 'Checkboxs' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm14',
      title: 'dropdowns',
      menu: [
        { id: 'c1', title: 'Dropdowns' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm15',
      title: 'input-groups',
      menu: [
        { id: 'c1', title: 'Input Groups' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm16',
      title: 'modals',
      menu: [
        { id: 'c1', title: 'Modals' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm17',
      title: 'notifications',
      menu: [
        { id: 'c1', title: 'Notifications' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm18',
      title: 'page-headings',
      menu: [
        { id: 'c1', title: 'Page Headings' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm19',
      title: 'pagination',
      menu: [
        { id: 'c1', title: 'Pagination' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm20',
      title: 'radio-groups',
      menu: [
        { id: 'c1', title: 'Radio Groups' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm20',
      title: 'select-menus',
      menu: [
        { id: 'c1', title: 'Select Menus' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm21',
      title: 'stacked-lists',
      menu: [
        { id: 'c1', title: 'Stacked Lists' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm21',
      title: 'stats',
      menu: [
        { id: 'c1', title: 'Stats' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm22',
      title: 'tabs',
      menu: [
        { id: 'c1', title: 'Tabs' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm23',
      title: 'table',
      menu: [
        { id: 'c1', title: 'Table' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },

    {
      id: 'm24',
      title: 'toggles',
      menu: [
        { id: 'c1', title: 'Toggles' },
        { id: 'c2', title: 'Guidelines' },
      ],
    },
    {
      id: 'm25',
      title: 'new',
      menu: [],
    },
    {
      id: 'm26',
      title: 'installation',
      menu: [],
    },
  ];

  private _pageName = new BehaviorSubject<any>('');
  private _pageName$ = this._pageName.asObservable();

  constructor(private router: Router) {
    const title = this.getUrlLastValue(this.router.url);
    // var n = this.router.url.lastIndexOf('/');
    // var title = this.router.url.substring(n + 1);
    this._pageName.next(title);
  }

  ngOnInit(): void {}

  contentDataList(data: any) {
    console.log('list ', data);
    this._pageName.next(data);
  }

  getContentPage(): Observable<string> {
    return this._pageName$;
  }

  getUrlLastValue(url: string) {
    var n = url.lastIndexOf('/');
    var title = url.substring(n + 1);
    return title;
  }
}
