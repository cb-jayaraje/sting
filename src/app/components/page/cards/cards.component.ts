import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { from, map, take } from 'rxjs';
import { CardService } from 'src/app/services/card.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  cards: any;
  convertedDatas: any = [];


  constructor(
    public commonService: CommonService, public cardService: CardService,
    public sanitizer: DomSanitizer, private titleService: Title,
  ) {
    this.titleService.setTitle("Sting - Cards");
   }

   ngOnInit(): void {
    this.cards = this.cardService.cardsData;
    this.commonService.componentDatas(this.cards);
    this.commonService.getComponentDatas().pipe(take(1)).subscribe(data => {
     this.convertedDatas = data
    })
     

  }

}
