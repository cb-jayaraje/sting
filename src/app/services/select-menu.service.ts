import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class SelectMenuServices {

    selectMenuDatas = [
        {
            "id": "select_1",
            "title": "Simple native",
            "code": `<div class="form-control">
            <label for="location" class="label">Location</label>
            <select id="location" name="location" class="select">
              <option>United States</option>
              <option selected>Canada</option>
              <option>Mexico</option>
            </select>
          </div>`
        },
        {
            "id": "select_2",
            "title": "Simple custom",
            "code": `
            <div class="form-control">
              <label id="listbox-label" class="label"> Assigned to </label>
              <div class="mt-1 relative">
                <button class="select-button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                  <span class="block truncate"> Tom Cook </span>
                  <span class="select-button-icon-container">
                    <svg class="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
            
                <!--
                  Select popover, show/hide based on select state.
            
                  Entering: ""
                    From: ""
                    To: ""
                  Leaving: "transition ease-in duration-100"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <ul tabindex="-1" class="select-ul" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                  <!--
                    Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
            
                    Highlighted: "text-white bg-primary-600", Not Highlighted: "text-gray-900"
                  -->
                  <li class="select-li pl-3 pr-9 group"  id="listbox-option-0" role="option">
                    <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                    <span class="font-normal block truncate"> Wade Cooper </span>
            
                    <!--
                      Checkmark, only display for selected option.
            
                      Highlighted: "text-white", Not Highlighted: "text-primary-600"
                    -->
                    <span class="select-li-icon right-0 pr-4">
                      <!-- Heroicon name: solid/check -->
                    
                    </span>
                  </li>
            
                  <!-- More items... -->
                </ul>
              </div>
            </div>
            `
        },

        {
          "id": "select_2_2",
          "title": "Simple custom selected",
          "code": `
          <div class="form-control">
            <label id="listbox-label" class="label"> Assigned to </label>
            <div class="mt-1 relative">
              <button class="select-button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                <span class="block truncate"> Tom Cook </span>
                <span class="select-button-icon-container">
                  <svg class="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
          
              <!--
                Select popover, show/hide based on select state.
          
                Entering: ""
                  From: ""
                  To: ""
                Leaving: "transition ease-in duration-100"
                  From: "opacity-100"
                  To: "opacity-0"
              -->
              <ul tabindex="-1" class="select-ul" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                <!--
                  Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
          
                  Highlighted: "text-white bg-primary-600", Not Highlighted: "text-gray-900"
                -->
                <li class="select-li-selected group"  id="listbox-option-0" role="option">
                  <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                  <span class="font-normal block truncate"> Wade Cooper </span>
          
                  <!--
                    Checkmark, only display for selected option.
          
                    Highlighted: "text-white", Not Highlighted: "text-primary-600"
                  -->
                  <span class="select-li-icon ">
                    <!-- Heroicon name: solid/check -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </li>
          
                <!-- More items... -->
              </ul>
            </div>
          </div>
          `
      },
       
        {
            "id": "select_4",
            "title": "Custom with status indicator",
            "code": `
            <div class="form-control">
              <label id="listbox-label" class="label"> Assigned to </label>
              <div class="mt-1 relative">
                <button class="select-button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                  <div class="flex items-center">
                    <span aria-label="Online" class="bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full"></span>
                    <span class="ml-3 block truncate"> Tom Cook </span>
                  </div>
                  <span class="select-button-icon-container">
                    <!-- Heroicon name: solid/selector -->
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
            
                <!--
                  Select popover, show/hide based on select state.
            
                  Entering: ""
                    From: ""
                    To: ""
                  Leaving: "transition ease-in duration-100"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <ul class="select-ul" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                  <!--
                    Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
            
                    Highlighted: "text-white bg-primary-600", Not Highlighted: "text-gray-900"
                  -->
                  <li class="select-li pl-3 pr-9" id="listbox-option-0" role="option">
                    <div class="flex items-center">
                      <!-- Online: "bg-green-400", Not Online: "bg-gray-200" -->
                      <span class="bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full" aria-hidden="true"></span>
                      <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                      <span class="font-normal ml-3 block truncate">
                        Wade Cooper
                        <span class="sr-only"> is online</span>
                      </span>
                    </div>
            
                    <!--
                      Checkmark, only display for selected option.
            
                      Highlighted: "text-white", Not Highlighted: "text-primary-600"
                    -->
                    <span class="select-li-icon right-0 pr-4">
                      <!-- Heroicon name: solid/check -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </li>
            
                  <!-- More items... -->
                </ul>
              </div>
            </div>
            `
        },
        {
            "id": "select_5",
            "title": "Custom with avatar",
            "code": `<!-- This example requires Tailwind CSS v2.0+ -->
            <div class="form-control">
              <label id="listbox-label" class="label"> Assigned to </label>
              <div class="mt-1 relative">
                <button  class="select-button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                  <span class="flex items-center">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full">
                    <span class="ml-3 block truncate"> Tom Cook </span>
                  </span>
                  <span class="select-button-icon-container">
                    <!-- Heroicon name: solid/selector -->
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
            
                <!--
                  Select popover, show/hide based on select state.
            
                  Entering: ""
                    From: ""
                    To: ""
                  Leaving: "transition ease-in duration-100"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <ul class="select-ul" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                  <!--
                    Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
            
                    Highlighted: "text-white bg-primary-600", Not Highlighted: "text-gray-900"
                  -->
                  <li class="select-li pl-3 pr-9" id="listbox-option-0" role="option">
                    <div class="flex items-center">
                      <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full">
                      <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                      <span class="font-normal ml-3 block truncate"> Wade Cooper </span>
                    </div>
            
                    <!--
                      Checkmark, only display for selected option.
            
                      Highlighted: "text-white", Not Highlighted: "text-primary-600"
                    -->
                    <span class="select-li-icon right-0 pr-4">
                      <!-- Heroicon name: solid/check -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </li>
            
                  <!-- More items... -->
                </ul>
              </div>
            </div>
            `
        },
        {
            "id": "select_6",
            "title": "With secondary text",
            "code": `<!-- This example requires Tailwind CSS v2.0+ -->
            <div class="form-control">
              <label id="listbox-label" class="label"> Assigned to </label>
              <div class="mt-1 relative">
                <button class="select-button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                  <span class="w-full inline-flex truncate">
                    <span class="truncate"> Tom Cook </span>
                    <span class="ml-2 select-secondary-text"> @tomcook </span>
                  </span>
                  <span class="select-button-icon-container">
                    <!-- Heroicon name: solid/selector -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
            
                <!--
                  Select popover, show/hide based on select state.
            
                  Entering: ""
                    From: ""
                    To: ""
                  Leaving: "transition ease-in duration-100"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <ul class="select-ul" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                  <!--
                    Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
            
                    Highlighted: "text-white bg-primary-600", Not Highlighted: "text-gray-900"
                  -->
                  <li class="select-li pl-3 pr-9" id="listbox-option-0" role="option">
                    <div class="flex">
                      <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                      <span class="font-normal truncate"> Wade Cooper </span>
                      <!-- Highlighted: "text-primary-200", Not Highlighted: "text-gray-500" -->
                      <span class="select-secondary-text ml-2 "> @wadecooper </span>
                    </div>
            
                    <!--
                      Checkmark, only display for selected option.
            
                      Highlighted: "text-white", Not Highlighted: "text-primary-600"
                    -->
                    <span class="select-li-icon right-0  pr-4">
                      <!-- Heroicon name: solid/check -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </li>
            
                  <!-- More items... -->
                </ul>
              </div>
            </div>
            `
        },
        {
            "id": "select_7",
            "title": "Branded with supported text",
            "code": `<!-- This example requires Tailwind CSS v2.0+ -->
            <div class="form-control">
              <label id="listbox-label" class="sr-only"> Change published status </label>
              <div class="relative ">
                <div class="inline-flex shadow-sm rounded-md divide-x divide-primary-600 ">
                  <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-primary-600 ">
                    <div class="relative inline-flex items-center bg-primary-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white ">
                      <!-- Heroicon name: solid/check -->
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <p class="ml-2.5 text-sm font-medium">Published</p>
                    </div>
                    <button  class="select-button-l-curve" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                      <span class="sr-only">Change published status</span>
                      <!-- Heroicon name: solid/chevron-down -->
                      <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
            
                <!--
                  Select popover, show/hide based on select state.
            
                  Entering: ""
                    From: ""
                    To: ""
                  Leaving: "transition ease-in duration-100"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <ul class="origin-top-right absolute z-10 left-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-0">
                  <!--
                    Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
            
                    Highlighted: "text-white bg-primary-500", Not Highlighted: "text-gray-900"
                  -->
                  <li class="text-gray-900 cursor-default select-none relative p-4 text-sm" id="listbox-option-0" role="option">
                    <div class="flex flex-col">
                      <div class="flex justify-between">
                        <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                        <p class="font-normal">Published</p>
                        <!--
                          Checkmark, only display for selected option.
            
                          Highlighted: "text-white", Not Highlighted: "text-primary-500"
                        -->
                        <span class="text-primary-500">
                          <!-- Heroicon name: solid/check -->
                          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <!-- Highlighted: "text-primary-200", Not Highlighted: "text-gray-500" -->
                      <p class="text-gray-500 mt-2">This job posting can be viewed by anyone who has the link.</p>
                    </div>
                  </li>
            
                  <!-- More items... -->
                </ul>
              </div>
            </div>
            `
        }
    ];
 }