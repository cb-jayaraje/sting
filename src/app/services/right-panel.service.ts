import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RightPanelService {
  contentData = [
    {
      id: 'm1',
      title: 'feedback',
      menu: [
        { id: 'c1', title: 'Guidelines' },
        { id: 'c2', title: 'Examples' },
      ],
    },
    {
      id: 'm2',
      title: 'new',
      menu: [
        { id: 'c1', title: 'What is Sting?' },
        { id: 'c2', title: 'Who primarily uses Sting?' },
        { id: 'c3', title: 'How are we benefitted from Sting?' },
        { id: 'c4', title: 'What happens to Classic and Leap UI?' },
      ],
    },
  ];

  private _pageName = new BehaviorSubject<any>('');
  private _pageName$ = this._pageName.asObservable();

  contentDataList(data: any) {
    this._pageName.next(data);
  }

  getContentPage(): Observable<string> {
    return this._pageName$;
  }
}
