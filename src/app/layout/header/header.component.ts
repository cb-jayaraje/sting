import { Component, HostListener, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { SearchService } from 'src/app/services/search.service';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
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
    public commonService: CommonService,
    public searchService: SearchService
  ) {}

  ngOnInit(): void {}

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
}
