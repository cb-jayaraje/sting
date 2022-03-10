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
            }
    ]

}