import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class CardService {

    cardsData = [
     {
        id: 'card_1',
        title: 'Basic card',
        code: ` <!-- Basic card -->
        <div
          class="card"
        >
          <div class="px-5 py-4">
            <!-- Place your content after this -->
            <p class="cb-text-copy-regular">Elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus.</p>
            <!-- Place your content before this -->
          </div>
        </div>`
     },
     {
        id: 'card_2',
        title: 'Card with link',
        code: `  <!-- Card with link -->
        <div
          class="card-link"
        >
          <div class="px-4 py-3">
            <!-- Place your content after this -->
            <p class="cb-text-copy-regular">Elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus.</p>
            <!-- Place your content before this -->
          </div>
        </div>`
     }
    ]

}