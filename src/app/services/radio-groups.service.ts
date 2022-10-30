import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RadioGroupService {
  radioGropuDatas = [
    {
      id: 'radio_1',
      title: 'Simple list',
      code: `      
      <div class="form-control radio-group">
                
        <h3 class="cb-text-h6">Notifications</h3>
        <p>How do you prefer to receive notifications?</p>

        <fieldset class="pt-4">
          <legend class="sr-only">Notification method</legend>
          <div class="radio-list">
            <div>
              <input id="email"  name="notification-method" type="radio" checked class="radio-input">
              <label for="email" class="radio-label"> Email </label>
            </div>
            <div>
              <input id="sms" name="notification-method" type="radio" class="radio-input">
              <label for="sms" class="radio-label"> Phone (SMS) </label>
            </div>
            <div>
              <input id="push" name="notification-method" type="radio" class="radio-input">
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
      <div class="form-control radio-group">
            
      <h3 class="cb-text-h6">Notifications</h3>
      <p>How do you prefer to receive notifications?</p>

      <fieldset class="pt-4">
        <legend class="sr-only">Notification method</legend>
        <div class="radio-list-inline">
          <div>
            <input id="email2" name="notification-method" type="radio" checked class="radio-input">
            <label for="email2" class="radio-label"> Email </label>
          </div>
          <div>
            <input id="sms2" name="notification-method" type="radio" class="radio-input">
            <label for="sms2" class="radio-label"> Phone (SMS) </label>
          </div>
          <div>
            <input id="push2" name="notification-method" type="radio" class="radio-input">
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
      <div class="form-control radio-group">
            
      <fieldset>
          <legend class="sr-only">Plan</legend>
          <div class="radio-list">

            <div>
                <input id="small" name="plan" type="radio" checked class="radio-input">
                <div>
                  <label for="small" class="radio-label with-info">
                    <span>Small</span> 
                    <span>4 GB RAM / 2 CPUS / 80 GB SSD Storage</span>
                  </label>
                </div>
            </div>
        
            <div>
                <input id="medium" name="plan" type="radio" class="radio-input">
                <div>
                  <label for="medium" class="radio-label with-info">
                    <span>Medium</span> 
                    <span>8 GB RAM / 4 CPUS / 160 GB SSD Storage</span>
                  </label>
                </div>
            </div>
        
            <div>
                <input id="large" name="plan" type="radio" class="radio-input">
                <div>
                  <label for="large" class="radio-label with-info">
                    <span>Large</span> 
                    <span>16 GB RAM / 8 CPUS / 320 GB SSD Storage</span>
                  </label>
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
      <div class="form-control radio-group">
            
      <fieldset>
          <legend class="sr-only">Plan</legend>
          <div class="radio-list">

            <div>
                <input id="small02" name="plan02" type="radio" checked class="radio-input">
                <div>
                  <label for="small02" class="radio-label with-info-inline">
                    <span>Small</span> 
                    <span>4 GB RAM / 2 CPUS / 80 GB SSD Storage</span>
                  </label>
                </div>
            </div>
        
            <div>
                <input id="medium02" name="plan02" type="radio" class="radio-input">
                <div>
                  <label for="medium02" class="radio-label with-info-inline">
                    <span>Medium</span> 
                    <span>8 GB RAM / 4 CPUS / 160 GB SSD Storage</span>
                  </label>
                </div>
            </div>
        
            <div>
                <input id="large02" name="plan02" type="radio" class="radio-input">
                <div>
                  <label for="large02" class="radio-label with-info-inline">
                    <span>Large</span> 
                    <span>16 GB RAM / 8 CPUS / 320 GB SSD Storage</span>
                  </label>
                </div>
            </div>

          </div>
        </fieldset>

  </div>
        `,
    },
    {
      id: 'radio_5',
      title: 'Radio Cards',
      code: `      
      <div class="form-control !max-w-none">

      <h2 class="cb-text-h6">Select a mailing list</h2>
            
        <fieldset>
          <legend class="sr-only">Select a mailing list</legend>

          <div class="radio-cards mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          
            <label class="selected">
              <input type="radio" name="project-type" value="Newsletter" class="sr-only">
              <span class="flex flex-1">
                <span class="flex flex-col">
                  <h3>Newsletter</h3>
                  <span class="mt-1 flex items-center cb-text-copy-regular">Last message sent an hour ago</span>
                  <span class="mt-6 cb-text-copy-regular strong">621 users</span>
                </span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
              <span class="pointer-events-none absolute -inset-px" aria-hidden="true"></span>
            </label>

            <label>
              <input type="radio" name="project-type" value="Existing Customers" class="sr-only"" aria-describedby="project-type-1-description-0 project-type-1-description-1">
              <span class="flex flex-1">
                <span class="flex flex-col">
                  <h3>Existing Customers</h3>
                  <span class="mt-1 flex items-center cb-text-copy-regular">Last message sent 2 weeks ago</span>
                  <span class="mt-6 cb-text-copy-regular strong">1200 users</span>
                </span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
              <span class="pointer-events-none absolute -inset-px" aria-hidden="true"></span>
            </label>

            <label>
              <input type="radio" name="project-type" value="Trial Users" class="sr-only"" aria-describedby="project-type-2-description-0 project-type-2-description-1">
              <span class="flex flex-1">
                <span class="flex flex-col">
                  <h3>Trial Users</h3>
                  <span class="mt-1 flex items-center cb-text-copy-regular">Last message sent 4 days ago</span>
                  <span class="mt-6 cb-text-copy-regular strong">2740 users</span>
                </span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
              <span class="pointer-events-none absolute -inset-px" aria-hidden="true"></span>
            </label>
          </div>
        </fieldset>

      </div>
        `,
    },
    {
      id: 'radio_6',
      title: 'Radio small cards',
      code: `      
      <!-- Radio small cards -->

      <div class="form-control w-full max-w-none">
          
          <div class="flex items-center justify-between">
              <h2 class="cb-text-h6">Timeframe</h2>
              <a href="#" class="cb-text-copy-regular btn-link">Link placeholder</a>
            </div>
          
            <fieldset>
              <legend class="sr-only">Choose a timeframe</legend>
              <div class="radio-cards simple grid grid-cols-3 gap-4 sm:grid-cols-5 mt-4">

                <label class="selected">
                  <input type="radio" name="timeframe-option" value="daily" class="sr-only">
                  <h3> Daily </h3>
                </label>
                
                <label>
                  <input type="radio" name="timeframe-option" value="1M" class="sr-only">
                  <h3> 1 months </h3>
                </label>
                
                <label>
                  <input type="radio" name="timeframe-option" value="3M" class="sr-only">
                  <h3> 3 months </h3>
                </label>
                
                <label>
                  <input type="radio" name="timeframe-option" value="6M" class="sr-only">
                  <h3> 6 months </h3>
                </label>
                
                <label>
                  <input type="radio" name="timeframe-option" value="12M" disabled class="sr-only">
                  <h3> 12 months </h3>
                </label>

              </div>
            </fieldset>
      </div>
        `,
    },

    {
      id: 'radio_7',
      title: 'Radio compact selectors',
      code: `      
      <!-- Radio small cards -->

      <div class="form-control">
          
            <fieldset>
              <legend class="sr-only">Choose a timeframe</legend>
              <div class="radio-compact grid grid-cols-5">

                <label class="selected">
                  <input type="radio" name="timeframe-option" value="daily" class="sr-only">
                  <h3> Daily </h3>
                </label>
                
                <label>
                  <input type="radio" name="timeframe-option" value="1M" class="sr-only">
                  <h3> 1M </h3>
                </label>
                
                <label>
                  <input type="radio" name="timeframe-option" value="3M" class="sr-only">
                  <h3> 3M </h3>
                </label>
                
                <label>
                  <input type="radio" name="timeframe-option" value="6M" class="sr-only">
                  <h3> 6M </h3>
                </label>
                
                <label>
                  <input type="radio" name="timeframe-option" value="12M" disabled class="sr-only">
                  <h3> 12M </h3>
                </label>

              </div>
            </fieldset>
      </div>
        `,
    },

    {
      id: 'radio_8',
      title: 'Stacked radio cards',
      code: `      
      <!-- Stacked radio cards -->

      <div class="form-control">
          
        <fieldset>
        <legend class="sr-only">Server size</legend>
        <div class="radio-cards stacked">

          <label class="selected">
            <input type="radio" name="server-size" value="Hobby" class="sr-only">
            <span class="flex items-center">
              <span class="flex flex-col text-sm">
                <h3>Hobby</h3>
                <span>
                  <span class="block sm:inline">8GB / 4 CPUs</span>
                  <span class="hidden sm:mx-1 sm:inline" aria-hidden="true">&middot;</span>
                  <span class="block sm:inline">160 GB SSD disk</span>
                </span>
              </span>
            </span>
            <span class="right-info">
              <span class="!font-semibold">$40</span>
              <span class="!text-neutral-600">/mo</span>
            </span>
            <span class="pointer-events-none absolute -inset-px" aria-hidden="true"></span>
          </label>
      
          <label>
            <input type="radio" name="server-size" value="Startup" class="sr-only">
            <span class="flex items-center">
              <span class="flex flex-col text-sm">
                <h3>Startup</h3>
                <span>
                  <span class="block sm:inline">12GB / 6 CPUs</span>
                  <span class="hidden sm:mx-1 sm:inline" aria-hidden="true">&middot;</span>
                  <span class="block sm:inline">256 GB SSD disk</span>
                </span>
              </span>
            </span>
            <span class="right-info">
              <span class="!font-semibold">$80</span>
              <span class="!text-neutral-600">/mo</span>
            </span>
            <span class="pointer-events-none absolute -inset-px" aria-hidden="true"></span>
          </label>
      
          <label>
            <input type="radio" name="server-size" value="Business" class="sr-only">
            <span class="flex items-center">
              <span class="flex flex-col text-sm">
                <h3>Business</h3>
                <span>
                  <span class="block sm:inline">16GB / 8 CPUs</span>
                  <span class="hidden sm:mx-1 sm:inline" aria-hidden="true">&middot;</span>
                  <span class="block sm:inline">512 GB SSD disk</span>
                </span>
              </span>
            </span>
            <span class="right-info">
              <span class="!font-semibold">$160</span>
              <span class="!text-neutral-600">/mo</span>
            </span>
            <span class="pointer-events-none absolute -inset-px" aria-hidden="true"></span>
          </label>
      
          <label>
            <input type="radio" name="server-size" value="Enterprise" class="sr-only">
            <span class="flex items-center">
              <span class="flex flex-col text-sm">
                <h3>Enterprise</h3>
                <span>
                  <span class="block sm:inline">32GB / 12 CPUs</span>
                  <span class="hidden sm:mx-1 sm:inline" aria-hidden="true">&middot;</span>
                  <span class="block sm:inline">1024 GB SSD disk</span>
                </span>
              </span>
            </span>
            <span class="right-info">
              <span class="!font-semibold">$240</span>
              <span class="!text-neutral-600">/mo</span>
            </span>
            <span class="pointer-events-none absolute -inset-px" aria-hidden="true"></span>
          </label>
        </div>
      </fieldset>

      </div>
        `,
    },
    {
      id: 'radio_9',
      title: 'Simple radio tabular',
      code: `
      <!-- Radios tabular -->

      <div class="form-control">

        <fieldset>
        <legend class="sr-only">Pricing plans</legend>

          <div class="radio-cards tabular">
          
            <label class="selected">
              <span>
                <input type="radio" name="pricing-plan" value="Startup" class="radio-input" checked>
                <h3>Startup</h3>
              </span>
              <span>
                <span class="!font-semibold">$29 / mo</span>
                <span class="!text-neutral-600">($290 / yr)</span>
              </span>
              <span>Up to 5 active job postings</span>
            </label>
        
            <label>
              <span>
                <input type="radio" name="pricing-plan" value="Business" class="radio-input">
                <h3>Business</h3>
              </span>
              <span>
                <span class="!font-semibold">$99 / mo</span>
                <span class="!text-neutral-600">($99 / yr)</span>
              </span>
              <span>Up to 25 active job postings</span>
            </label>
        
            <label>
              <span>
                <input type="radio" name="pricing-plan" value="Enterprise" class="radio-input">
                <h3>Enterprise</h3>
              </span>
              <span>
                <span class="!font-semibold">$249 / mo</span>
                <span class="!text-neutral-600">($2490 / yr)</span>
              </span>
              <span>Unlimited active job postings</span>
            </label>
            
          </div>
        </fieldset>

      </div>
      `,
    },

    {
      id: 'radio_10',
      title: 'List with descriptions in panel',
      code: `
      <!-- List with descriptions in panel -->

      <div class="form-control">

        <fieldset>
        <legend class="sr-only">Privacy setting</legend>
        <div class="radio-cards panels">
        
          <label class="selected">
            <input type="radio" name="privacy-setting" value="Public access" class="radio-input" checked>
            <span>
              <h3>Public access</h3>
              <span>This project would be available to anyone who has the link</span>
            </span>
          </label>
      
          <label>
            <input type="radio" name="privacy-setting" value="Private to Project Members" class="radio-input">
            <span>
              <h3>Private to Project Members</h3>
              <span>Only members of this project would be able to access</span>
            </span>
          </label>
      
          <label>
            <input type="radio" name="privacy-setting" value="Private to you" class="radio-input">
            <span>
              <h3>Private to you</h3>
              <span>You are the only one able to access this project</span>
            </span>
          </label>

        </div>
      </fieldset>

      </div>
      `,
    },

    

  ];
}
