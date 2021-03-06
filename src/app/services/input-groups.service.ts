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
          id: "input_2_1",
           title: "Input with leading icon",
           code: `
           <div class="form-control">
  <label for="email" class="label">Email</label>
  <div class="mt-1 relative rounded-md shadow-sm">
    <div class="input-leading__icon">
      <!-- Heroicon name: solid/mail -->
      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    </div>
    <input type="email" name="email" id="email" class="input pl-10" placeholder="you@example.com">
  </div>
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
                          <button   class="btn btn-outline btn-icon" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Search as
                            <svg class=" h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
             }, {

              id: "input_9",
              title: "Input with trailing icon",
              code: ` 
              <div class="form-control">
                <label for="account-number" class="label">Account number</label>
                <div class="mt-1 relative">
                    <input type="text" name="account-number" id="account-number" class="input" placeholder="00-00-00">
                    <div class="input-trailing__icon ">
                        <!-- Heroicon name: solid/question-mark-circle -->
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd" />
                        </svg>
                      </div>
                  </div>
              </div>
              `
             },
             {
               
             id: "input_10",
             title: "Input with addon",
             code: `
             <div class="form-control">
                 <label for="company-website" class="label">Company Website</label>
                 <div class="mt-1 flex">
                     <span class="input-addon__innerlabel "> http:// </span>
                     <input type="text" name="company-website" id="company-website" class="input input-addon" placeholder="www.example.com">
                 </div>
             </div>`
             } ,
             {
             id: 'input_11',
             title: 'Input with leading icon and trailing button',
             code: ` 
             <div class="form-control">
                 <label for="email" class="label">Search candidates</label>
                 <div class="mt-1 relative flex">
                     <div class="input-leading__trailing___iconcontainer">
                         <!-- Heroicon name: solid/users -->
                         <svg class="input-leading__trailing___icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                           <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                         </svg>
                     </div>
     
                     <input type="email" name="email" id="email" class="input-leading__trailing input" placeholder="Jane smith">
     
                     <button type="button" class="input-leading__trailing___button ">
                         <!-- Heroicon name: solid/sort-ascending -->
                         <svg class="input-leading__trailing___icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                           <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
                         </svg>
                         <span>Sort</span>
                     </button>
                 </div>
             </div>`
             } ,

             {
             id: 'input_12',
             title: 'Inputs with shared borders',
             code: `
             <div class="form-control">
                 <div class="mt-1">
                     <fieldset>
                         <legend class=" input-sharedborders__label ">Card Details</legend>
                         <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                           <div>
                             <label for="card-number" class="sr-only">Card number</label>
                             <input type="text" name="card-number" id="card-number" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300" placeholder="Card number">
                           </div>
                           <div class="flex -space-x-px">
                             <div class="w-1/2 flex-1 min-w-0">
                               <label for="card-expiration-date" class="sr-only">Expiration date</label>
                               <input type="text" name="card-expiration-date" id="card-expiration-date" class="!rounded-bl-md input-sharedborders" placeholder="MM / YY">
                             </div>
                             <div class="flex-1 min-w-0">
                               <label for="card-cvc" class="sr-only">CVC</label>
                               <input type="text" name="card-cvc" id="card-cvc" class="!rounded-br-md input-sharedborders" placeholder="CVC">
                             </div>
                           </div>
                         </div>
                     </fieldset>
                 </div>
             </div>`
             } ,

             {
             id: 'input_13',
             title: 'Input with inset label',
             code: `
             <div class="form-control">
                 <div class="mt-1">
                     <div class="input-inset__container">
                         <label for="name" class="input-inset__label">Name</label>
                         <input type="text" name="name" id="name" class="input-inset" placeholder="Jane Smith">
                       </div>
                 </div>
             </div> `
             } ,

            {
            id: 'input_14',
            title: 'Input with inset label shared border',
            code: `
            <div class="form-control">
                <div class="mt-1 ">
                    <div class="!rounded-b-none input-inset__container">
                        <label for="name" class="input-inset__label">Name</label>
                        <input type="text" name="name" id="name" class="input-inset" placeholder="Jane Smith">
                    </div>
    
                    <div class="!rounded-t-none input-inset__container">
                        <label for="name" class="input-inset__label">Email</label>
                        <input type="email" name="email" id="email" class="input-inset" placeholder="Jane@makemytrip.com">
                    </div>
                </div>
            </div>`
            } ,
            
            {
            id: 'input_15',
            title: 'Input with keyboard shortcut',
            code: `
            <div class="form-control">
                <div class="mt-1">
                        <label for="name" class="label">Quick search</label>
                        <div class="mt-1 relative ">
                            <input type="text" name="name" id="name" class="input">
                            <div class=" absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                <kbd class="input-shortcut__kbd"> ???K </kbd>
                            </div>
                        </div>
                </div>
            </div>`
            } ,

            {
            id: 'input_16',
            title: 'Input with overlapping label',
            code: `
            <div class="bg-white py-16 px-8">
                <div class="form-control">
                    <div class="mt-1">
                            <div class="mt-1 relative ">
                                <label for="name" class="input-overlap__label ">Name</label>
                                <input type="text" name="name" id="name" class="input" placeholder="Devesh">              
                            </div>
                    </div>
                </div> 
            </div> `
            } ,

            {
            id: 'input_17',
            title: 'Input with pill shape',
            code: `
            <div class="form-control">
                <label for="name" class="label">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name" class="input !rounded-full" placeholder="Jane smith">
                </div>
            </div> `
            } ,

            {
            id: 'input_18',
            title: 'Input with gray background and bottom border',
            code: `
            <div class="form-control">
                <label for="name" class="label">Name</label>
                <div class="mt-1 border-b border-gray-300 ">
                    <input type="text" name="name" id="name" class="input-graybg__btmborder" placeholder="Jane smith">
                </div>
            </div>`
            } ,
    ]

}