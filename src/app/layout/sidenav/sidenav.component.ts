import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import * as data from './../../data-page.json'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  leftNav = data;
  path = '/components/page/';

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.url);

    console.log(this.leftNav.leftNav)
  }

}
