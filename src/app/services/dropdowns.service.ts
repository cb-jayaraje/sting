import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class DropdownsService {

    badgeDatas= [
        {
            id: 'dropdown_1',
            title: 'Simple',
            code: `
            
<div class="relative inline-block text-left">
  <div>
  <button  class="btn btn-outline btn-icon" id="menu-button" aria-expanded="true" aria-haspopup="true">
  Options
  <!-- Heroicon name: solid/chevron-down -->
  <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
</button>
  </div>

  <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  <div class="dropdown !w-56" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
  <div class="py-1" role="none">
    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
    <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
    <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
    <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
    <form method="POST" action="#" role="none">
      <button type="submit" class="btn-link" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
    </form>
  </div>
</div>
</div>
`
        },
        {
            id: 'dropdown_2',
            title: 'With dividers',
            code: `
                      
            <div class="relative inline-block text-left">
              <div>
              <button  class="btn btn-outline btn-icon" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Options
              <!-- Heroicon name: solid/chevron-down -->
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
              </div>
            
              <!--
                Dropdown menu, show/hide based on menu state.
            
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div class=" dropdown !w-56 dropdown-divider" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-0">Edit</a>
                  <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-1">Duplicate</a>
                </div>
                <div class="py-1" role="none">
                  <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-2">Archive</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Move</a>
                </div>
                <div class="py-1" role="none">
                  <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-4">Share</a>
                  <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
                </div>
                <div class="py-1" role="none">
                  <a href="#" class="btn-link" role="menuitem" tabindex="-1" id="menu-item-6">Delete</a>
                </div>
              </div>
            </div>
            
`
        }
    ];

}