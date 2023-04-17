import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { SearchService } from 'src/app/services/search.service';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  search = '';
  searchText = '';
  searchDatas: any = [];
  searchDisabled = false;
  searchModal = false;
  isDarkMode = false;
  modeSub: Subscription | undefined;

  private searchSubject = new Subject<string>();
  readonly search$ = this.searchSubject.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap((searchdata: any) => {
      return searchdata;
    })
  );

  @HostListener('window:keydown.meta.k', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.onKeydown(event);
  }
  constructor(
    public commonService: CommonService,
    public searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.modeSub = this.commonService
      .getSystemMode()
      .subscribe((theme: string) => {
        console.log(theme);
        theme === 'dark' ? (this.isDarkMode = true) : (this.isDarkMode = false);
      });
  }

  onKeydown($event: Event) {
    this.searchDisabled = true;
    this.searchModal = true;
    const val = ($event.target as HTMLInputElement).value;
  }

  closeModal(event: string = '') {
    // console.log(event)
    this.searchModal = false;
    this.searchDisabled = false;
  }
  onClickMode() {
    this.commonService.onClickSytemTheme();
  }

  ngOnDestroy(): void {
    this.modeSub?.unsubscribe();
  }
}
