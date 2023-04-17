import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { RightPanelService } from 'src/app/services/right-panel.service';
import { SearchService } from 'src/app/services/search.service';

import * as data from './../../data-page.json';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  leftNav = data;
  path = '/components/page/';
  search = '';
  searchText = '';
  searchDatas: any = [];
  searchDisabled = false;
  searchModal = false;

  private searchSubject = new Subject<string>();

  readonly search$ = this.searchSubject.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap((searchdata: any) => {
      // console.log(searchdata)
      return searchdata;
    })
  );

  @HostListener('window:keydown.meta.k', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    console.log(event);
    this.onKeydown(event);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public commonService: CommonService,
    public searchService: SearchService,
    public rightPanelService: RightPanelService
  ) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.url);

    // console.log(this.searchService.getList());

    this.searchDatas = this.searchService.getList();

    // console.log(this.leftNav.leftNav)
  }

  searchPosts(event: any) {
    // console.log(event.value)
    this.searchSubject.next(event.value);
  }

  selectTitle(title: string) {
    this.commonService.setPageTitle(title);
  }

  onKeydown($event: Event) {
    console.log('log event');
    this.searchDisabled = true;
    this.searchModal = true;
    const val = ($event.target as HTMLInputElement).value;
  }

  closeModal(event: string = '') {
    // console.log(event)
    this.searchModal = false;
    this.searchDisabled = false;
  }

  getStatusValue(value: string = '') {
    let statusText = '';
    if (value === 'new') {
      statusText = 'New';
    } else if (value === 'update') {
      statusText = 'Updated';
    } else if (value === 'coming') {
      statusText = 'Coming Soon';
    }
    return statusText;
  }
  onClickLeftMenu(subnav: any) {
    console.log(subnav.status);
    if (subnav.status !== 'coming') {
      this.rightPanelService.contentDataList(subnav.link);
      this.commonService.setPageTitle(subnav.title);
    }
  }
}
