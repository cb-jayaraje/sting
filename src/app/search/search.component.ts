import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import * as data from './../../data-page.json'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() colseSearchModal = new EventEmitter<string>();

  search = '';
  searchText = '';
  searchDatas:any = [];
  showComponentsDiv = false;
  mergedData:any = [];
  enterFistTime = true;

  constructor(
    public searchService: SearchService,
    private router: Router,
  ) { }

  ngOnInit(): void {


    // console.log(this.searchService.getList())

   

  }

  onEnterKey($event: Event) {
    

    const val = ($event.target as HTMLInputElement).value

    if(val.length > 1) {
      this.showComponentsDiv = true;
      this.searchDatas = this.searchService.getList();
    let addAll:any[] =[]
    this.mergedData = this.searchDatas.map((data: any) => {
      for (const i of data.subMenu) {
        addAll.push(i)
      }

      

    })

 
    this.mergedData = addAll
    } else {

      this.showComponentsDiv = false;
    }

     
  }

  gotoPage(link: string){
    this.closeModal();
    this.router.navigateByUrl(`/components/page/${link}`);
    //console.log(link)
  }

  checkEntry(event: any){
    // console.log(event)
    if(event > 1){
      this.closeModal();
    }
  }

  closeModal(){
    this.colseSearchModal.emit("closeModal")
  }
  

}
