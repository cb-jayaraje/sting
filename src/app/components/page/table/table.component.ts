import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map } from 'rxjs';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tables: any;
  convertedDatas: any = [];
  html: SafeHtml = '';
  constructor(
    private tableService: TableService,
    public sanitizer: DomSanitizer, private titleService: Title,
  ) { 
    this.titleService.setTitle("Sting - Tables");
  }

  ngOnInit(): void {
    this.tables =  this.tableService.tableDatas;


    from(this.tables)
    .pipe(
      map((data:any) => {
        this.html = data.code;
      //  console.log(this.html)
        const datas = {
         id: data.id,
         title: data.title,
         code:this.html
        }
 
        return datas;
 
        
        
      })
    )
     .subscribe(dataRes => {
       this.convertedDatas.push(dataRes)
       // console.log(this.convertedDatas)
     })
  }



}
