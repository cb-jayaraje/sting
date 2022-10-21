import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RadioGroupService {
  radioGropuDatas = [
    {
      id: 'radio_1',
      title: 'Simple list',
      code: `      
      <div class="form-control">
                
      <label class="label">Notifications</label>
      <p class="cb-text-copy-small">How do you prefer to receive notifications?</p>

      <fieldset class="mt-4">
        <legend class="sr-only">Notification method</legend>
        <div class="space-y-4">
          <div class="flex items-center">
            <input id="email"  name="notification-method" type="radio" checked class="radio">
            <label for="email" class="radio-label"> Email </label>
          </div>
    
          <div class="flex items-center">
            <input id="sms" name="notification-method" type="radio" class="radio">
            <label for="sms" class="radio-label"> Phone (SMS) </label>
          </div>
    
          <div class="flex items-center">
            <input id="push" name="notification-method" type="radio" class="radio">
            <label for="push" class="radio-label"> Push notification </label>
          </div>
        </div>
      </fieldset>

  </div>
        `,
    },
    {
      id: 'radio_2',
      title: 'Simple inline list',
      code: `      
      <div class="form-control">
            
      <label class="label">Notifications</label>
      <p class="cb-text-copy-small">How do you prefer to receive notifications?</p>
      <fieldset class="mt-4">
        <legend class="sr-only">Notification method</legend>
        <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          <div class="flex items-center">
            <input id="email2" name="notification-method" type="radio" checked class="radio">
            <label for="email2" class="radio-label"> Email </label>
          </div>
    
          <div class="flex items-center">
            <input id="sms2" name="notification-method" type="radio" class="radio">
            <label for="sms2" class="radio-label"> Phone (SMS) </label>
          </div>
    
          <div class="flex items-center">
            <input id="push2" name="notification-method" type="radio" class="radio">
            <label for="push2" class="radio-label"> Push notification </label>
          </div>
        </div>
      </fieldset>

  </div>
        `,
    },
    {
      id: 'radio_3',
      title: 'List with description',
      code: `      
      <div class="form-control">
            
      <fieldset>
          <legend class="sr-only">Plan</legend>
          <div class="space-y-5">

            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input id="small" aria-describedby="small-description" name="plan" type="radio" checked class="radio">
              </div>
              <div class="ml-3 text-sm">
                <label for="small" class="ml-0 radio-label">Small</label>
                <p id="small-description" class="cb-text-copy-small">4 GB RAM / 2 CPUS / 80 GB SSD Storage</p>
              </div>
            </div>
        
            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input id="medium" aria-describedby="medium-description" name="plan" type="radio" class="radio">
              </div>
              <div class="ml-3 text-sm">
                <label for="medium" class="ml-0 radio-label">Medium</label>
                <p id="medium-description" class="cb-text-copy-small">8 GB RAM / 4 CPUS / 160 GB SSD Storage</p>
              </div>
            </div>
        
            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input id="large" aria-describedby="large-description" name="plan" type="radio" class="radio">
              </div>
              <div class="ml-3 text-sm">
                <label for="large" class="ml-0 radio-label">Large</label>
                <p id="large-description" class="cb-text-copy-small">16 GB RAM / 8 CPUS / 320 GB SSD Storage</p>
              </div>
            </div>

          </div>
        </fieldset>

  </div>
        `,
    },

    {
      id: 'radio_4',
      title: 'List with inline description',
      code: `      
      <div class="form-control">
            
      <fieldset>
          <legend class="sr-only">Plan</legend>
          <div class="space-y-5">
            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input id="small2" aria-describedby="small-description" name="plan" type="radio" checked class="radio">
              </div>
              <div class="ml-3 ">
                <label for="small2" class="radio-inline-label">Small</label>
                <span id="small-description" class="cb-text-copy-small">4 GB RAM / 2 CPUS / 80 GB SSD Storage</span>
              </div>
            </div>
        
            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input id="medium2" aria-describedby="medium-description" name="plan" type="radio" class="radio">
              </div>
              <div class="ml-3">
                <label for="medium2" class=" radio-inline-label">Medium</label>
                <span id="medium-description" class="cb-text-copy-small">8 GB RAM / 4 CPUS / 160 GB SSD Storage</span>
              </div>
            </div>
        
            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input id="large2" aria-describedby="large-description" name="plan" type="radio" class="radio">
              </div>
              <div class="ml-3">
                <label for="large2" class="radio-inline-label">Large</label>
                <span id="large-description" class="cb-text-copy-small">16 GB RAM / 8 CPUS / 320 GB SSD Storage</span>
              </div>
            </div>
          </div>
        </fieldset>

  </div>
        `,
    },

  //   {
  //     id: 'radio_5',
  //     title: 'List with radio on right',
  //     code: `      
  //     <!-- List with radio on right -->

  //     <div class="form-control">
          
  //         <h2 class="text-lg leading-6 font-medium text-gray-900">Transfer funds</h2>
  //         <p class="mt-1 text-sm text-gray-500">Transfer your balance to your bank account.</p>
  //         <fieldset class="mt-2">
  //           <legend class="sr-only">Bank account</legend>
  //           <div class=" divide-y divide-gray-200">
                
  //             <div class="relative flex items-start py-4">
  //               <div class="min-w-0 flex-1 text-sm">
  //                 <label for="account-checking" class="ml-0 radio-label">Checking</label>
  //                 <p id="account-checking-description" class="text-gray-500">CIBC ••••6610</p>
  //               </div>
  //               <div class="ml-3 flex items-center h-5">
  //                 <input id="account-checking" aria-describedby="account-checking-description" name="account" type="radio" checked class="radio">
  //               </div>
  //             </div>
        
  //             <div class="relative flex items-start py-4">
  //               <div class="min-w-0 flex-1 text-sm">
  //                 <label for="account-savings" class="ml-0 radio-label">Savings</label>
  //                 <p id="account-savings-description" class="text-gray-500">Bank of America ••••0149</p>
  //               </div>
  //               <div class="ml-3 flex items-center h-5">
  //                 <input id="account-savings" aria-describedby="account-savings-description" name="account" type="radio" class="radio">
  //               </div>
  //             </div>
        
  //             <div class="relative flex items-start py-4">
  //               <div class="min-w-0 flex-1 text-sm">
  //                 <label for="account-mastercard" class="ml-0 radio-label">Mastercard</label>
  //                 <p id="account-mastercard-description" class="text-gray-500">Capital One ••••7877</p>
  //               </div>
  //               <div class="ml-3 flex items-center h-5">
  //                 <input id="account-mastercard" aria-describedby="account-mastercard-description" name="account" type="radio" class="radio">
  //               </div>
  //             </div>
  //           </div>
  //         </fieldset>

  //     </div>
  //       `,
  //   },

  //   {
  //     id: 'radio_6',
  //     title: 'Simple list with radio on right',
  //     code: `      
  //     <!-- Simple list with radio on right -->

  //     <div class="form-control">
          
  //         <fieldset>
  //             <legend class="text-lg font-medium text-gray-900">Side</legend>
  //             <div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
  //               <div class="relative flex items-start py-4">
  //                 <div class="min-w-0 flex-1 text-sm">
  //                   <label for="side-null" class="ml-0 radio-label">None</label>
  //                 </div>
  //                 <div class="ml-3 flex items-center h-5">
  //                   <input id="side-null" name="plan" type="radio" checked class="radio">
  //                 </div>
  //               </div>
            
  //               <div class="relative flex items-start py-4">
  //                 <div class="min-w-0 flex-1 text-sm">
  //                   <label for="side-1" class="ml-0 radio-label">Baked beans</label>
  //                 </div>
  //                 <div class="ml-3 flex items-center h-5">
  //                   <input id="side-1" name="plan" type="radio" class="radio">
  //                 </div>
  //               </div>
            
  //               <div class="relative flex items-start py-4">
  //                 <div class="min-w-0 flex-1 text-sm">
  //                   <label for="side-2" class="ml-0 radio-label">Coleslaw</label>
  //                 </div>
  //                 <div class="ml-3 flex items-center h-5">
  //                   <input id="side-2" name="plan" type="radio" class="radio">
  //                 </div>
  //               </div>
            
  //               <div class="relative flex items-start py-4">
  //                 <div class="min-w-0 flex-1 text-sm">
  //                   <label for="side-3" class="ml-0 radio-label">French fries</label>
  //                 </div>
  //                 <div class="ml-3 flex items-center h-5">
  //                   <input id="side-3" name="plan" type="radio" class="radio">
  //                 </div>
  //               </div>
            
  //               <div class="relative flex items-start py-4">
  //                 <div class="min-w-0 flex-1 text-sm">
  //                   <label for="side-4" class="ml-0 radio-label">Garden salad</label>
  //                 </div>
  //                 <div class="ml-3 flex items-center h-5">
  //                   <input id="side-4" name="plan" type="radio" class="radio">y
  //                 </div>
  //               </div>
            
  //               <div class="relative flex items-start py-4">
  //                 <div class="min-w-0 flex-1 text-sm">
  //                   <label for="side-5" class="ml-0 radio-label">Mashed potatoes</label>
  //                 </div>
  //                 <div class="ml-3 flex items-center h-5">
  //                   <input id="side-5" name="plan" type="radio" class="radio">
  //                 </div>
  //               </div>
  //             </div>
  //           </fieldset>

  //     </div>
  //       `,
  //   },

  //   {
  //     id: 'radio_7',
  //     title: 'Color picker',
  //     code: `      
  //     <div class="form-control">
            
  //     <fieldset>
  //         <legend class="block text-sm font-medium text-gray-700">Choose a label color</legend>
  //         <div class="mt-4 flex items-center space-x-3">
  //           <!--
  //             Active and Checked: "ring ring-offset-1"
  //             Not Active and Checked: "ring-2"
  //           -->
  //           <label class="radio-colorpicker ring-pink-500 ring ring-offset-1">
  //             <input type="radio" name="color-choice" value="Pink" class="sr-only" aria-labelledby="color-choice-0-label">
  //             <span id="color-choice-0-label" class="sr-only">Pink</span>
  //             <span aria-hidden="true" class="bg-pink-500 radio-colorpicker__fill"></span>
  //           </label>
        
  //           <!--
  //             Active and Checked: "ring ring-offset-1"
  //             Not Active and Checked: "ring-2"
  //           -->
  //           <label class="radio-colorpicker ring-purple-500">
  //             <input type="radio" name="color-choice" value="Purple" class="sr-only" aria-labelledby="color-choice-1-label">
  //             <span id="color-choice-1-label" class="sr-only">Purple</span>
  //             <span aria-hidden="true" class="bg-purple-500 radio-colorpicker__fill"></span>
  //           </label>
        
  //           <!--
  //             Active and Checked: "ring ring-offset-1"
  //             Not Active and Checked: "ring-2"
  //           -->
  //           <label class="radio-colorpicker ring-blue-500">
  //             <input type="radio" name="color-choice" value="Blue" class="sr-only" aria-labelledby="color-choice-2-label">
  //             <span id="color-choice-2-label" class="sr-only">Blue</span>
  //             <span aria-hidden="true" class="bg-blue-500 radio-colorpicker__fill"></span>
  //           </label>
        
  //           <!--
  //             Active and Checked: "ring ring-offset-1"
  //             Not Active and Checked: "ring-2"
  //           -->
  //           <label class="radio-colorpicker ring-green-500">
  //             <input type="radio" name="color-choice" value="Green" class="sr-only" aria-labelledby="color-choice-3-label">
  //             <span id="color-choice-3-label" class="sr-only">Green</span>
  //             <span aria-hidden="true" class="bg-green-500 radio-colorpicker__fill"></span>
  //           </label>
        
  //           <!--
  //             Active and Checked: "ring ring-offset-1"
  //             Not Active and Checked: "ring-2"
  //           -->
  //           <label class="radio-colorpicker ring-yellow-500">
  //             <input type="radio" name="color-choice" value="Yellow" class="sr-only" aria-labelledby="color-choice-4-label">
  //             <span id="color-choice-4-label" class="sr-only">Yellow</span>
  //             <span aria-hidden="true" class="bg-yellow-500 radio-colorpicker__fill"></span>
  //           </label>
  //         </div>
  //       </fieldset>

  // </div>
  //       `,
  //   },

  //   {
  //     id: 'radio_8',
  //     title: 'Radio Cards',
  //     code: `      
  //     <div class="form-control">
            
  //     <fieldset>
  //         <legend class="text-base font-medium text-gray-900">Select a mailing list</legend>
        
  //         <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
  //           <!--
  //             Checked: "border-transparent", Not Checked: "border-gray-300"
  //             Active: "border-primary-500 ring-2 ring-primary-500"
  //           -->
  //           <label class="radio-card radio-card__checked">
  //                 <input type="radio" name="project-type" value="Newsletter" class="sr-only" aria-labelledby="project-type-0-label" aria-describedby="project-type-0-description-0 project-type-0-description-1">
  //                 <span class="flex-1 flex">
  //                 <span class="flex flex-col">
  //                     <span id="project-type-0-label" class="radio-card__header"> Newsletter </span>
  //                     <span id="project-type-0-description-0" class="radio-card__subheader"> Last message sent an hour ago </span>
  //                     <span id="project-type-0-description-1" class="radio-card__footer"> 621 users </span>
  //                 </span>
  //                 </span>
  //                 <!--
  //                 Not Checked: "invisible"
          
  //                 Heroicon name: solid/check-circle
  //                 -->
  //                 <svg class="invisible radio-card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  //                 <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
  //                 </svg>
  //                 <!--
  //                 Active: "border", Not Active: "border-2"
  //                 Checked: "border-primary-500", Not Checked: "border-transparent"
  //                 -->
  //                 <span class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></span>
  //           </label>
        
  //           <!--
  //             Checked: "border-transparent", Not Checked: "border-gray-300"
  //             Active: "border-primary-500 ring-2 ring-primary-500"
  //           -->
  //           <label class="radio-card">
  //             <input type="radio" name="project-type" value="Existing Customers" class="sr-only" aria-labelledby="project-type-1-label" aria-describedby="project-type-1-description-0 project-type-1-description-1">
  //             <span class="flex-1 flex">
  //               <span class="flex flex-col">
  //                 <span id="project-type-1-label" class="radio-card__header"> Existing Customers </span>
  //                 <span id="project-type-1-description-0" class="radio-card__subheader"> Last message sent 2 weeks ago </span>
  //                 <span id="project-type-1-description-1" class="radio-card__footer"> 1200 users </span>
  //               </span>
  //             </span>
  //             <!--
  //               Not Checked: "invisible"
        
  //               Heroicon name: solid/check-circle
  //             -->
  //             <svg class=" invisible radio-card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  //               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
  //             </svg>
  //             <!--
  //               Active: "border", Not Active: "border-2"
  //               Checked: "border-primary-500", Not Checked: "border-transparent"
  //             -->
  //             <span class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></span>
  //           </label>
        
  //           <!--
  //             Checked: "border-transparent", Not Checked: "border-gray-300"
  //             Active: "border-primary-500 ring-2 ring-primary-500"
  //           -->
  //           <label class="radio-card ">
  //             <input type="radio" name="project-type" value="Trial Users" class="sr-only" aria-labelledby="project-type-2-label" aria-describedby="project-type-2-description-0 project-type-2-description-1">
  //             <span class="flex-1 flex">
  //               <span class="flex flex-col">
  //                 <span id="project-type-2-label" class="radio-card__header"> Trial Users </span>
  //                 <span id="project-type-2-description-0" class="radio-card__subheader"> Last message sent 4 days ago </span>
  //                 <span id="project-type-2-description-1" class="radio-card__footer"> 2740 users </span>
  //               </span>
  //             </span>
  //             <!--
  //               Not Checked: "invisible"
        
  //               Heroicon name: solid/check-circle
  //             -->
  //             <svg class="invisible radio-card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  //               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
  //             </svg>
  //             <!--
  //               Active: "border", Not Active: "border-2"
  //               Checked: "border-primary-500", Not Checked: "border-transparent"
  //             -->
  //             <span class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></span>
  //           </label>
  //         </div>
  //       </fieldset>

  // </div>
  //       `,
  //   },

  //   {
  //     id: 'radio_9',
  //     title: 'Radio small cards',
  //     code: `      
  //     <!-- Radio small cards -->

  //     <div class="form-control">
          
  //         <div class="flex items-center justify-between">
  //             <h2 class="text-sm font-medium text-gray-900">RAM</h2>
  //             <a href="#" class="text-sm font-medium text-primary-600 hover:text-primary-500">See performance specs</a>
  //           </div>
          
  //           <fieldset class="mt-2">
  //             <legend class="sr-only">Choose a memory option</legend>
  //             <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
  //               <!--
  //                 In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
  //                 Active: "ring-2 ring-offset-2 ring-primary-500"
  //                 Checked: "bg-primary-600 border-transparent text-white hover:bg-primary-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
  //               -->
  //               <label class="radio-card__sm radio-card__sm--checked">
  //                 <input type="radio" name="memory-option" value="4 GB" class="sr-only" aria-labelledby="memory-option-0-label">
  //                 <span id="memory-option-0-label"> 4 GB </span>
  //               </label>
          
  //               <!--
  //                 In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
  //                 Active: "ring-2 ring-offset-2 ring-primary-500"
  //                 Checked: "bg-primary-600 border-transparent text-white hover:bg-primary-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
  //               -->
  //               <label class="radio-card__sm">
  //                 <input type="radio" name="memory-option" value="64 GB" class="sr-only" aria-labelledby="memory-option-4-label">
  //                 <span id="memory-option-4-label"> 16 GB </span>
  //               </label>

  //                                 <!--
  //                 In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
  //                 Active: "ring-2 ring-offset-2 ring-primary-500"
  //                 Checked: "bg-primary-600 border-transparent text-white hover:bg-primary-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
  //               -->
  //               <label class="radio-card__sm">
  //                 <input type="radio" name="memory-option" value="64 GB" class="sr-only" aria-labelledby="memory-option-4-label">
  //                 <span id="memory-option-4-label"> 32 GB </span>
  //               </label>

  //                                 <!--
  //                 In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
  //                 Active: "ring-2 ring-offset-2 ring-primary-500"
  //                 Checked: "bg-primary-600 border-transparent text-white hover:bg-primary-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
  //               -->
  //               <label class="radio-card__sm radio-card__sm">
  //                 <input type="radio" name="memory-option" value="64 GB" class="sr-only" aria-labelledby="memory-option-4-label">
  //                 <span id="memory-option-4-label"> 64 GB </span>
  //               </label>
          
  //               <!--
  //                 In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
  //                 Active: "ring-2 ring-offset-2 ring-primary-500"
  //                 Checked: "bg-primary-600 border-transparent text-white hover:bg-primary-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
  //               -->
  //               <label class="radio-card__sm radio-card__sm--inactive">
  //                 <input type="radio" name="memory-option" value="128 GB" disabled class="sr-only" aria-labelledby="memory-option-5-label">
  //                 <span id="memory-option-5-label"> 128 GB </span>
  //               </label>
  //             </div>
  //           </fieldset>
  //     </div>
  //       `,
  //   },

  //   {
  //     id: 'radio_10',
  //     title: 'Stacked radio cards',
  //     code: `      
  //     <!-- Stacked radio cards -->

  //     <div class="form-control">
          
  //         <fieldset>
  //             <legend class="sr-only">Server size</legend>
  //             <div class="space-y-4">
  //               <!--
  //                 Checked: "border-transparent", Not Checked: "border-gray-300"
  //                 Active: "border-primary-500 ring-2 ring-primary-500"
  //               -->
  //               <label class="radio-card__stacked radio-card__stacked--checked">
  //                 <input type="radio" name="server-size" value="Hobby" class="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1">
  //                 <span class="flex items-center">
  //                   <span class="text-sm flex flex-col">
  //                     <span id="server-size-0-label" class="font-medium text-gray-900"> Hobby </span>
  //                     <span id="server-size-0-description-0" class="text-gray-500">
  //                       <span class="block sm:inline">8GB / 4 CPUs</span>
  //                       <span class="hidden sm:inline sm:mx-1" aria-hidden="true">&middot;</span>
  //                       <span class="block sm:inline">160 GB SSD disk</span>
  //                     </span>
  //                   </span>
  //                 </span>
  //                 <span id="server-size-0-description-1" class="radio-card__stacked___labelwrapper">
  //                   <span class="font-medium text-gray-900">$40</span>
  //                   <span class="ml-1 text-gray-500 sm:ml-0">/mo</span>
  //                 </span>
  //                 <!--
  //                   Active: "border", Not Active: "border-2"
  //                   Checked: "border-primary-500", Not Checked: "border-transparent"
  //                 -->
  //                 <span class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></span>
  //               </label>
            
  //               <!--
  //                 Checked: "border-transparent", Not Checked: "border-gray-300"
  //                 Active: "border-primary-500 ring-2 ring-primary-500"
  //               -->
  //               <label class="radio-card__stacked">
  //                 <input type="radio" name="server-size" value="Startup" class="sr-only" aria-labelledby="server-size-1-label" aria-describedby="server-size-1-description-0 server-size-1-description-1">
  //                 <span class="flex items-center">
  //                   <span class="text-sm flex flex-col">
  //                     <span id="server-size-1-label" class="font-medium text-gray-900"> Startup </span>
  //                     <span id="server-size-1-description-0" class="text-gray-500">
  //                       <span class="block sm:inline">12GB / 6 CPUs</span>
  //                       <span class="hidden sm:inline sm:mx-1" aria-hidden="true">&middot;</span>
  //                       <span class="block sm:inline">256 GB SSD disk</span>
  //                     </span>
  //                   </span>
  //                 </span>
  //                 <span id="server-size-1-description-1" class="radio-card__stacked___labelwrapper">
  //                   <span class="font-medium text-gray-900">$80</span>
  //                   <span class="ml-1 text-gray-500 sm:ml-0">/mo</span>
  //                 </span>
  //                 <!--
  //                   Active: "border", Not Active: "border-2"
  //                   Checked: "border-primary-500", Not Checked: "border-transparent"
  //                 -->
  //                 <span class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></span>
  //               </label>
            
  //               <!--
  //                 Checked: "border-transparent", Not Checked: "border-gray-300"
  //                 Active: "border-primary-500 ring-2 ring-primary-500"
  //               -->
  //               <label class="radio-card__stacked">
  //                 <input type="radio" name="server-size" value="Business" class="sr-only" aria-labelledby="server-size-2-label" aria-describedby="server-size-2-description-0 server-size-2-description-1">
  //                 <span class="flex items-center">
  //                   <span class="text-sm flex flex-col">
  //                     <span id="server-size-2-label" class="font-medium text-gray-900"> Business </span>
  //                     <span id="server-size-2-description-0" class="text-gray-500">
  //                       <span class="block sm:inline">16GB / 8 CPUs</span>
  //                       <span class="hidden sm:inline sm:mx-1" aria-hidden="true">&middot;</span>
  //                       <span class="block sm:inline">512 GB SSD disk</span>
  //                     </span>
  //                   </span>
  //                 </span>
  //                 <span id="server-size-2-description-1" class="radio-card__stacked___labelwrapper">
  //                   <span class="font-medium text-gray-900">$160</span>
  //                   <span class="ml-1 text-gray-500 sm:ml-0">/mo</span>
  //                 </span>
  //                 <!--
  //                   Active: "border", Not Active: "border-2"
  //                   Checked: "border-primary-500", Not Checked: "border-transparent"
  //                 -->
  //                 <span class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></span>
  //               </label>
            
  //               <!--
  //                 Checked: "border-transparent", Not Checked: "border-gray-300"
  //                 Active: "border-primary-500 ring-2 ring-primary-500"
  //               -->
  //               <label class="radio-card__stacked">
  //                 <input type="radio" name="server-size" value="Enterprise" class="sr-only" aria-labelledby="server-size-3-label" aria-describedby="server-size-3-description-0 server-size-3-description-1">
  //                 <span class="flex items-center">
  //                   <span class="text-sm flex flex-col">
  //                     <span id="server-size-3-label" class="font-medium text-gray-900"> Enterprise </span>
  //                     <span id="server-size-3-description-0" class="text-gray-500">
  //                       <span class="block sm:inline">32GB / 12 CPUs</span>
  //                       <span class="hidden sm:inline sm:mx-1" aria-hidden="true">&middot;</span>
  //                       <span class="block sm:inline">1024 GB SSD disk</span>
  //                     </span>
  //                   </span>
  //                 </span>
  //                 <span id="server-size-3-description-1" class="radio-card__stacked___labelwrapper">
  //                   <span class="font-medium text-gray-900">$240</span>
  //                   <span class="ml-1 text-gray-500 sm:ml-0">/mo</span>
  //                 </span>
  //                 <!--
  //                   Active: "border", Not Active: "border-2"
  //                   Checked: "border-primary-500", Not Checked: "border-transparent"
  //                 -->
  //                 <span class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></span>
  //               </label>
  //             </div>
  //           </fieldset>

  //     </div>
  //       `,
  //   },

  //   {
  //     id: 'radio_11',
  //     title: 'List with descriptions in panel',
  //     code: `
  //     <!-- List with descriptions in panel -->

  //     <div class="form-control">

  //         <fieldset>
  //             <legend class="sr-only">Privacy setting</legend>
  //             <div class="bg-white rounded-md -space-y-px">
  //               <!-- Checked: "bg-primary-50 border-primary-200 z-10", Not Checked: "border-gray-200" -->
  //               <label class="rounded-tl-md rounded-tr-md radio-table__panel  radio-table--checked">
  //                 <input type="radio" name="privacy-setting" value="Public access" class="h-4 w-4 mt-0.5 cursor-pointer shrink-0 text-primary-600 border-gray-300 focus:ring-primary-500" aria-labelledby="privacy-setting-0-label" aria-describedby="privacy-setting-0-description">
  //                 <span class="ml-3 flex flex-col">
  //                   <!-- Checked: "text-primary-900", Not Checked: "text-gray-900" -->
  //                   <span id="privacy-setting-0-label" class="block text-sm font-medium radio-table__label--checked"> Public access </span>
  //                   <!-- Checked: "text-primary-700", Not Checked: "text-gray-500" -->
  //                   <span id="privacy-setting-0-description" class="block text-sm radio-table__label--checked"> This project would be available to anyone who has the link </span>
  //                 </span>
  //               </label>
            
  //               <!-- Checked: "bg-primary-50 border-primary-200 z-10", Not Checked: "border-gray-200" -->
  //               <label class="radio-table__panel">
  //                 <input type="radio" name="privacy-setting" value="Private to Project Members" class="h-4 w-4 mt-0.5 cursor-pointer shrink-0 text-primary-600 border-gray-300 focus:ring-primary-500" aria-labelledby="privacy-setting-1-label" aria-describedby="privacy-setting-1-description">
  //                 <span class="ml-3 flex flex-col">
  //                   <!-- Checked: "text-primary-900", Not Checked: "text-gray-900" -->
  //                   <span id="privacy-setting-1-label" class="block text-sm font-medium"> Private to Project Members </span>
  //                   <!-- Checked: "text-primary-700", Not Checked: "text-gray-500" -->
  //                   <span id="privacy-setting-1-description" class="block text-sm"> Only members of this project would be able to access </span>
  //                 </span>
  //               </label>
            
  //               <!-- Checked: "bg-primary-50 border-primary-200 z-10", Not Checked: "border-gray-200" -->
  //               <label class="rounded-bl-md rounded-br-md radio-table__panel">
  //                 <input type="radio" name="privacy-setting" value="Private to you" class="h-4 w-4 mt-0.5 cursor-pointer shrink-0 text-primary-600 border-gray-300 focus:ring-primary-500" aria-labelledby="privacy-setting-2-label" aria-describedby="privacy-setting-2-description">
  //                 <span class="ml-3 flex flex-col">
  //                   <!-- Checked: "text-primary-900", Not Checked: "text-gray-900" -->
  //                   <span id="privacy-setting-2-label" class="block text-sm font-medium"> Private to you </span>
  //                   <!-- Checked: "text-primary-700", Not Checked: "text-gray-500" -->
  //                   <span id="privacy-setting-2-description" class="block text-sm"> You are the only one able to access this project </span>
  //                 </span>
  //               </label>
  //             </div>
  //           </fieldset>

  //     </div>
  //     `,
  //   },

  //   {
  //     id: 'radio_11',
  //     title: 'Simple radio table',
  //     code: `
  //     <!-- Simple radio table -->

  //     <div class="form-control">

  //         <fieldset>
  //             <legend class="sr-only">Pricing plans</legend>
  //             <div class="relative bg-white rounded-md -space-y-px">
  //               <!-- Checked: "bg-primary-50 border-primary-200 z-10", Not Checked: "border-gray-200" -->
  //               <label class="rounded-tl-md rounded-tr-md radio-table radio-table--checked">
  //                 <span class="flex items-center text-sm">
  //                   <input type="radio" name="pricing-plan" value="Startup" class="radio-table__input" aria-labelledby="pricing-plans-0-label" aria-describedby="pricing-plans-0-description-0 pricing-plans-0-description-1">
  //                   <!-- Checked: "text-primary-900", Not Checked: "text-gray-900" -->
  //                   <span id="pricing-plans-0-label" class="radio-table__label radio-table__label--checked">Startup</span>
  //                 </span>
  //                 <span id="pricing-plans-0-description-0" class="radio-table__description md:text-center">
  //                   <!-- Checked: "text-primary-900", Not Checked: "text-gray-900" -->
  //                   <span class="font-medium radio-table__label--checked">$29 / mo</span>
  //                   <!-- Checked: "text-primary-700", Not Checked: "text-gray-500" -->
  //                   <span class="radio-table__label--checked">($290 / yr)</span>
  //                 </span>
  //                 <!-- Checked: "text-primary-700", Not Checked: "text-gray-500" -->
  //                 <span id="pricing-plans-0-description-1" class="radio-table__description radio-table__label--checked">Up to 5 active job postings</span>
  //               </label>
            
  //               <!-- Checked: "bg-primary-50 border-primary-200 z-10", Not Checked: "border-gray-200" -->
  //               <label class="radio-table">
  //                 <span class="flex items-center text-sm">
  //                   <input type="radio" name="pricing-plan" value="Business" class="radio-table__input" aria-labelledby="pricing-plans-1-label" aria-describedby="pricing-plans-1-description-0 pricing-plans-1-description-1">
  //                   <!-- Checked: "text-primary-900", Not Checked: "text-gray-900" -->
  //                   <span id="pricing-plans-1-label" class="radio-table__label">Business</span>
  //                 </span>
  //                 <span id="pricing-plans-1-description-0" class="radio-table__description md:text-center">
  //                   <!-- Checked: "text-primary-900", Not Checked: "text-gray-900" -->
  //                   <span class="font-medium">$99 / mo</span>
  //                   <!-- Checked: "text-primary-700", Not Checked: "text-gray-500" -->
  //                   <span>($990 / yr)</span>
  //                 </span>
  //                 <!-- Checked: "text-primary-700", Not Checked: "text-gray-500" -->
  //                 <span id="pricing-plans-1-description-1" class="radio-table__description">Up to 25 active job postings</span>
  //               </label>
            
  //               <!-- Checked: "bg-primary-50 border-primary-200 z-10", Not Checked: "border-gray-200" -->
  //               <label class="rounded-bl-md rounded-br-md radio-table">
  //                 <span class="flex items-center text-sm">
  //                   <input type="radio" name="pricing-plan" value="Enterprise" class="radio-table__input" aria-labelledby="pricing-plans-2-label" aria-describedby="pricing-plans-2-description-0 pricing-plans-2-description-1">
  //                   <!-- Checked: "text-primary-900", Not Checked: "text-gray-900" -->
  //                   <span id="pricing-plans-2-label" class="radio-table__label">Enterprise</span>
  //                 </span>
  //                 <span id="pricing-plans-2-description-0" class="radio-table__description md:text-center">
  //                   <!-- Checked: "text-primary-900", Not Checked: "text-gray-900" -->
  //                   <span class="font-medium">$249 / mo</span>
  //                   <!-- Checked: "text-primary-700", Not Checked: "text-gray-500" -->
  //                   <span>($2490 / yr)</span>
  //                 </span>
  //                 <!-- Checked: "text-primary-700", Not Checked: "text-gray-500" -->
  //                 <span id="pricing-plans-2-description-1" class="radio-table__description">Unlimited active job postings</span>
  //               </label>
  //             </div>
  //           </fieldset>

  //     </div>
  //     `,
  //   },

    

  ];
}
