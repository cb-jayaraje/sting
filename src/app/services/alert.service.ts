import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class AlertService {

    alertDatas = [

        {
            "id": "alert_1",
            "title": "With description",
            "code": `
            <div class="alert alert-warning">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="title">Attention needed</h3>
                  <div class="description ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
                  </div>
                </div>
                </div>
              </div>
              `
        },
    
        {
           "id": "alert_2",
            "title": "With list",
            "code": `
            <div class="alert alert-danger ">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="title ">There were 2 errors with your submission</h3>
                  <div class="description ">
                    <ul role="list" class="list-disc pl-5 space-y-1">
                      <li>Your password must be at least 8 characters</li>
                      <li>Your password must include at least one pro wrestling finishing move</li>
                    </ul>
                  </div>
                </div>
                </div>
              </div>
              `
         },

        {
            "id": "alert_3",
             "title": "With actions",
             "code": `
             <div class="alert alert-success">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="title">Order completed</h3>
                  <div class="description ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                  </div>
                  <div class="mt-4">
                    <div class="-mx-2 -my-1.5 flex gap-x-3">
                      <button type="button" class="alert-btn alert-btn-success">View status</button>
                      <button type="button" class="alert-btn  alert-btn-success">Dismiss</button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              `
         },
         {
            "id": "alert_4",
             "title": "With link on right",
             "code": `
             <div class="alert bg-info-50">
              <div class="flex">
                <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-info-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                </div>
                <div class="ml-3 flex-1 md:flex md:justify-between">
                <p class="description-only text-neutral-700">A new software update is available. See what’s new in version 2.0.4.</p>
                <p class="mt-3 description-only md:mt-0 md:ml-6">
                  <a href="#" class="alert-a text-info-900 hover:text-primary-900">Details <span aria-hidden="true">&rarr;</span></a>
                </p>
                </div>
                </div>
              </div>
           `
         },
         {
            "id": "alert_5",
             "title": "With accent border",
             "code": `
             <div class="alert accent-border alert-warning border-orange-500 ">
<div class="flex">
  <div class="flex-shrink-0">
    <!-- Heroicon name: solid/exclamation -->
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
  </div>
  <div class="ml-3">
    <p class="description-only text-orange-900">
      You have no credits left.
      <a href="#" class="font-medium underline text-orange-900 hover:text-orange-900"> Upgrade your account to add more credits. </a>
    </p>
  </div>
</div>
</div>
          `
         },
         {
            "id": "alert_6",
             "title": "With dismiss button",
             "code": `
             <div class="alert alert-success">
 <div class="flex">
   <div class="flex-shrink-0">
     <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
       <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
     </svg>
   </div>
   <div class="ml-3 description-only">
    <h3 class="title">Order completed</h3>
   </div>
   <div class="ml-auto pl-3">
     <div class="-mx-1.5 -my-1.5">
       <button type="button" class="alert-btn ">
         <span class="sr-only">Dismiss</span>
         <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
           <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
         </svg>
       </button>
     </div>
   </div>
 </div>
</div>
           `
         }

    ];
}