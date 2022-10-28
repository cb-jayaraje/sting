import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class SelectMenuServices {

    selectMenuDatas = [
        {
            id: "select_1",
            title: "Simple native",
            code: `
            <div class="form-control">
              <label for="location" class="label">Location</label>
              <select id="location" name="location" class="select">
                <option>United States</option>
                <option selected>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          `
        },
   

        {
          id: "select_2",
          title: "Custom",
          code: `
          <div class="form-control">
            <label id="listbox-label" class="label"> Assigned to </label>
            <div class="mt-1 relative">
              <button class="select-button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                <span class="block truncate"> Tom Cook </span>
                <span class="select-button-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
                </span>
              </button>

              <ul tabindex="-1" class="select-ul" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                <li class="select-li-selected group"  id="listbox-option-0" role="option">
                  <span class="font-normal block truncate"> Wade Cooper </span>
                  <span class="select-li-icon ">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </li>
              </ul>

            </div>
          </div>
          `
      },
       
        {
            id: "select_3",
            title: "Custom with status indicator",
            code: `
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
       
     
    ];
 }