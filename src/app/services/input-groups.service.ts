import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class inputGroupsService {


    inputGroupDatas= [
        {
            id: "input_1",
            title: "Input with label",
            code: `    <div class="form-control">
            <label for="email" class="label">Email</label>
            <div class="mt-1">
              <input type="email" name="email" id="email" class="input" placeholder="you@example.com">
            </div>
          </div>`

        },
        {
            id: "input_2",
             title: "Input with label and help text",
             code: `
             <div class="form-control">
                <label for="email" class="label">Email</label>
                <div class="mt-1">
                <input type="email" name="email" id="email" class="input" placeholder="you@example.com" aria-describedby="email-description">
                </div>
                <p class="help-text" id="email-description">We'll only use this for spam.</p>
                </div>
           `
         },
 
         {
             id: "input_3",
              title: "Input with validation error",
                code: `  <div class="form-control">
                <label for="email" class="label">Email</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input type="email" name="email" id="email" class="input-error" placeholder="you@example.com" value="adamwathan" aria-invalid="true" aria-describedby="email-error">
                  <div class=" inset-y-0 right-0 w-auto pr-3 flex items-center pointer-events-none absolute">
                     <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p class="error-text" id="email-error">Your password must be less than 4 characters.</p>
              </div>
                       `
            },
          {
             id: "input_4",
              title: "Input with hidden label",
                code: `<div class="form-control">
                <label for="email" class="sr-only">Email</label>
                <input type="email" name="email" id="email" class="input" placeholder="you@example.com">
              </div>`
            },
          {
             id: "input_5",
              title: "Input with corner hint",
            code: `      <div class="form-control">
            <div class="flex justify-between">
              <label for="email" class="label">Email</label>
              <span class="hint-text" id="email-optional">Optional</span>
            </div>
            <div class="mt-1">
              <input type="email" name="email" id="email" class="input" placeholder="you@example.com" aria-describedby="email-optional">
            </div>
          </div>`
            },
            {
              id: "input_6",
               title: "Input with inline leading dropdown",
             code: ` <div class="form-control">
             <label for="phone-number" class="label">Phone Number</label>
             <div class="mt-1 relative rounded-md shadow-sm">
               <div class="absolute inset-y-0 left-0 flex items-center">
                 <label for="country" class="sr-only">Country</label>
                 <select id="country" name="country" autocomplete="country" class="input-select">
                   <option>US</option>
                   <option>CA</option>
                   <option>EU</option>
                 </select>
               </div>
               <input type="text" name="phone-number" id="phone-number" class="input pl-16 " placeholder="+1 (555) 987-6543">
             </div>
           </div>`
             },
             {
              id: "input_7",
               title: "Input with inline leading add-on and trailing dropdown",
             code: ` 
           <div class="form-control">
             <label for="price" class="label">Price</label>
             <div class="mt-1 relative rounded-md shadow-sm">
               <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <span class="text-gray-500 sm:text-sm"> $ </span>
               </div>
               <input type="text" name="price" id="price" class="input pl-7 pr-12" placeholder="0.00">
               <div class="absolute inset-y-0 right-0 flex items-center">
                 <label for="currency" class="sr-only">Currency</label>
                 <select id="currency" name="currency" class="input-select">
                   <option>USD</option>
                   <option>CAD</option>
                   <option>EUR</option>
                 </select>
               </div>
             </div>
           </div>
           `
             },
             {
              id: "input_8",
               title: "Input with inline leading add-on and trailing dropdown with list item",
             code: ` 
             <div class="relative inline-block text-left w-full ">
                <div class="mt-1 relative rounded-md shadow-sm ">
                  <div class="form-control">
                    <label for="price" class="label sr-only">Search</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="input-leading__icon">
                        <span class="text-gray-500 sm:text-sm"> <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.38632 7.97605L11.7074 10.2984C12.0975 10.6889 12.0975 11.3218 11.7074 11.7123C11.3144 12.0959 10.6873 12.0959 10.2943 11.7123L7.97319 9.39045C5.78188 10.8562 2.83666 10.4198 1.16402 8.3815C-0.508623 6.34316 -0.363117 3.36775 1.50042 1.50253C3.36396 -0.362692 6.33769 -0.509331 8.37551 1.16351C10.4133 2.83635 10.8505 5.78303 9.38632 7.97605ZM8.75221 5.13074C8.75221 3.12884 7.13024 1.50598 5.12943 1.50598C3.12954 1.50818 1.50886 3.12975 1.50666 5.13074C1.50666 7.13264 3.12863 8.7555 5.12943 8.7555C7.13024 8.7555 8.75221 7.13264 8.75221 5.13074Z" fill="#666678"/>
                          <mask id="mask0_2622_8553" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.38632 7.97605L11.7074 10.2984C12.0975 10.6889 12.0975 11.3218 11.7074 11.7123C11.3144 12.0959 10.6873 12.0959 10.2943 11.7123L7.97319 9.39045C5.78188 10.8562 2.83666 10.4198 1.16402 8.3815C-0.508623 6.34316 -0.363117 3.36775 1.50042 1.50253C3.36396 -0.362692 6.33769 -0.509331 8.37551 1.16351C10.4133 2.83635 10.8505 5.78303 9.38632 7.97605ZM8.75221 5.13074C8.75221 3.12884 7.13024 1.50598 5.12943 1.50598C3.12954 1.50818 1.50886 3.12975 1.50666 5.13074C1.50666 7.13264 3.12863 8.7555 5.12943 8.7555C7.13024 8.7555 8.75221 7.13264 8.75221 5.13074Z" fill="white"/>
                          </mask>
                          <g mask="url(#mask0_2622_8553)">
                          </g>
                          </svg>
                           </span>
                      </div>
                      <input type="text" name="search" x-model="search" id="search" class="input pl-7 pr-36" >
                      <div class="absolute inset-y-0 right-0 flex items-center">
                        <div>
                          <button type="button"  class="btn-outline" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Search as
                            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div  class="dropdown" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div class="py-1" role="none">
                    
                      <a href="#"  class="dropdown-list__a" role="menuitem" tabindex="-1" id="menu-item-1">ID Starts with</a>
                      <a href="#"  class="dropdown-list__a" role="menuitem" tabindex="-2" id="menu-item-2">Email Starts with</a>

                    
                   
                  </div>
                </div>


              </div>

           `
             }
    ]

}