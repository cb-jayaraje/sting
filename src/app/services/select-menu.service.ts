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
            <label class="label"> Assigned to </label>
            <div class="relative">
              <button class="select-button">
                <span> Tom Cook </span>
                <span class="select-button-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>              
                </span>
              </button>
    
              <ul class="select-ul">
    
                <li>
                  <span> Item </span>
                </li>

                <!-- More items -->
    
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
              <label class="label"> Assigned to </label>
              <div class="relative">
                <button class="select-button">
                  <span> Tom Cook </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>              
                  </span>
                </button>
      
                <ul class="select-ul">
      
                  <li class="select-li-selected">
                    <span> Item selected </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </li>

                  <li>
                    <span> Item </span>
                  </li>

                  <!-- More items -->
      
                </ul>
              </div>
            </div>
            `
        },
       
        {
            id: "select_4",
            title: "Custom with label in the button",
            code: `
            <div class="form-control">
              <label id="listbox-label" class="sr-only">Sort</label>
              <div class="relative mt-1">
                <button type="button" class="select-button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                  <span class="flex gap-2">
                    <span class="font-semibold">Sort:</span>
                    <span>Tom Cook</span>
                  </span>
                  <span class="pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>  
                  </span>
                </button>
            
                <ul class="select-ul">
            
                <li class="select-li-selected">
                  <span> Item selected </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </li>
                <li>
                  <span> Item </span>
                </li>

                <!-- More items -->

              </ul>
              </div>
            </div>
            `
        },
       
     
    ];
 }