import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class TabService {

    tabDatas = [
        {
            id: "tab_1",
            title: "Tabs with underline ",
            code: 
                `
                <!-- Tabs with underline -->
                <div>
                  <div class="form-control sm:hidden">
                    <label for="tabs" class="label">Select a tab</label>
                    <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                    <select id="tabs" name="tabs" class="select">
                      <option>My Account</option>
                
                      <option>Company</option>
                
                      <option selected>Team Members</option>
                
                      <option>Billing</option>
                    </select>
                  </div>
                  <div class="hidden sm:block">
                    <div class="border-b border-neutral-200">
                      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                        <!-- Current: "tab-link-active", Default: "border-transparent tab-link-inactive" -->
                        <a href="#" class="tab-link tab-link-inactive "> My Account </a>
                
                        <a href="#" class="tab-link tab-link-inactive"> Company </a>
                
                        <a href="#" class="tab-link tab-link-active" aria-current="page"> Team Members </a>
                
                        <a href="#" class="tab-link tab-link-inactive"> Billing </a>
                      </nav>
                    </div>
                  </div>
                </div>
                `
        },
      
        {
            id: "tab_2",
            title: "Tabs with pills",
            code: 
                `
                <!-- Tabs with pills -->
                <div>
                  <div class="sm:hidden form-control">
                    <label for="tabs" class="sr-only">Select a tab</label>
                    <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                    <select id="tabs" name="tabs" class="select">
                      <option>My Account</option>
                
                      <option>Company</option>
                
                      <option selected>Team Members</option>
                
                      <option>Billing</option>
                    </select>
                  </div>
                  <div class="hidden sm:block">
                    <nav class="flex space-x-4" aria-label="Tabs">
                      <!-- Current: "bg-gray-100 text-gray-700", Default: "tab-link-inactive" -->
                      <a href="#" class="tab-link-inactive tab-pill"> My Account </a>
                
                      <a href="#" class="tab-link-inactive tab-pill"> Company </a>
                
                      <a href="#" class="tab-pill tab-pill-active" aria-current="page"> Team Members </a>
                
                      <a href="#" class="tab-link-inactive tab-pill"> Billing </a>
                    </nav>
                  </div>
                </div>
                `
        },
      
        {
            id: "tab_3",
            title: "Tabs with underline and badges",
            code: 
                `
                <!-- Tabs with underline and badges -->
             <div>
               <div class="sm:hidden form-control">
                 <label for="tabs" class="sr-only">Select a tab</label>
                 <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                 <select id="tabs" name="tabs" class="select">
                   <option>Applied</option>

                   <option>Phone Screening</option>

                   <option selected>Interview</option>

                   <option>Offer</option>

                   <option>Disqualified</option>
                 </select>
               </div>
               <div class="hidden sm:block">
                 <div class="border-b border-gray-200">
                   <nav class="-mb-px flex space-x-8 " aria-label="Tabs">
                     <!-- Current: "tab-link-active", Default: "border-transparent tab-link-inactive" -->
                     <a href="#" class="border-transparent tab-link-inactive tab-link group">
                       Applied

                       <span class="badge-neutral badge-small ml-2">52</span>
                     </a>

                     <a href="#" class="border-transparent tab-link-inactive tab-link group">
                       Phone Screening

                       <span class="badge-neutral badge-small ml-2">6</span>
                     </a>

                     <a href="#" class="tab-link-active tab-link" aria-current="page">
                       Interview

                       <span class="badge-info badge-small ml-2">4</span>
                     </a>

                     <a href="#" class="border-transparent tab-link-inactive tab-link"> Offer </a>

                     <a href="#" class="border-transparent tab-link-inactive tab-link"> Disqualified </a>
                   </nav>
                 </div>
               </div>
             </div>
                `
        },
    ];

}