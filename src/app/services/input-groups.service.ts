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

              id: "input_9",
              title: "Input with trailing icon",
              code: ` 
              <div class="form-control">
                <label for="account-number" class="label">Account number</label>
                <div class="mt-1 relative">
                    <input type="text" name="account-number" id="account-number" class="input" placeholder="00-00-00">
                    <div class="input-icon-trailing ">
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
                     <span class="input-addon-label"> http:// </span>
                     <input type="text" name="company-website" id="company-website" class="input input-addon" placeholder="www.example.com">
                 </div>
             </div>`
             } ,
            
    ]

}