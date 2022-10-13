import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';


import * as data from './../../data-page.json'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  leftNav = data;
  path = '/components/page/';
  search = '';

  private searchSubject = new Subject<string>();

  readonly search$ = this.searchSubject.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap((searchdata: any ) => {
      // console.log(searchdata)
      return searchdata;
    })
  )



  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.url);

    console.log(this.leftNav.leftNav)
  }

  searchPosts(event: any){
    // console.log(event.value)
    this.searchSubject.next(event.value)
  }

}
