import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class DropdownsService {

    badgeDatas= [
        {
            id: 'dropdown_1',
            title: 'Simple',
            code: `
            <div class="form-control">
                <div class="relative inline-block text-left">
                    <div>
                    <button type="button" class="btn btn-outline btn-icon" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Options
                        <!-- Heroicon name: solid/chevron-down -->
                        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    </div>

                    <div class="dropdown-container" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                        <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                        <a href="#" class="dropdown-list__a dropdown-list__a--active" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                        <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                        <form method="POST" action="#" role="none">
                        <button type="submit" class="dropdown-submit" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                        </form>
                    </div>
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
        },
        {
        id: 'dropdown_3',
        title: 'With icon',
        code: ` 
        <div class="form-control">
            <div class="relative inline-block text-left">
                <div>
                <button type="button" class="btn btn-outline btn-icon" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Options
                    <!-- Heroicon name: solid/chevron-down -->
                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                </div>

                <div class="dropdown-container divide-y dropdown-divider" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                        <a href="#" class="dropdown-list__a !flex" role="menuitem" tabindex="-1" id="menu-item-0">
                          <!-- Heroicon name: solid/pencil-alt -->
                          <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                          </svg>
                          Edit
                        </a>
                        <a href="#" class="dropdown-list__a !flex" role="menuitem" tabindex="-1" id="menu-item-1">
                          <!-- Heroicon name: solid/duplicate -->
                          <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                          </svg>
                          Duplicate
                        </a>
                      </div>
                      <div class="py-1" role="none">
                        <a href="#" class="dropdown-list__a !flex" role="menuitem" tabindex="-1" id="menu-item-2">
                          <!-- Heroicon name: solid/archive -->
                          <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                            <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                          </svg>
                          Archive
                        </a>
                        <a href="#" class="dropdown-list__a !flex" role="menuitem" tabindex="-1" id="menu-item-3">
                          <!-- Heroicon name: solid/arrow-circle-right -->
                          <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                          </svg>
                          Move
                        </a>
                      </div>
                </div>
            </div>
        </div>`
        } ,
        {
        id: 'dropdown_4',
        title: 'with minimal button',
        code: ` 
        <div class="form-control">
            <div class="relative inline-block text-left">
                <div>
                <button type="button" class="dropdown-icn__btn rounded-full flex items-center text-gray-400 hover:text-gray-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <span class="sr-only">Open options</span>
                    <!-- Heroicon name: solid/dots-vertical -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>

                <div class="dropdown-container" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                    <a href="#" class="dropdown-list__a " role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                    <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                    <a href="#" class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                    <form method="POST" action="#" role="none">
                    <button type="submit" class="dropdown-submit" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                    </form>
                </div>
                </div>
            </div>
        </div>`
        } ,
    ];

    
  }
