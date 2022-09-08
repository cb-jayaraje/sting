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
                        <!-- Current: "tab-link_active", Default: "border-transparent tab-link_inactive" -->
                        <a href="#" class="tab-link tab-link_inactive"> My Account </a>
                
                        <a href="#" class="tab-link tab-link_inactive"> Company </a>
                
                        <a href="#" class="tab-link tab-link_active" aria-current="page"> Team Members </a>
                
                        <a href="#" class="tab-link tab-link_inactive"> Billing </a>
                      </nav>
                    </div>
                  </div>
                </div>
                `
        },
      
        {
            id: "tab_3",
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
                      <!-- Current: "bg-gray-100 text-gray-700", Default: "tab-link_inactive" -->
                      <a href="#" class="tab-link_inactive tab-pill"> My Account </a>
                
                      <a href="#" class="tab-link_inactive tab-pill"> Company </a>
                
                      <a href="#" class="tab-pill tab-pill_active" aria-current="page"> Team Members </a>
                
                      <a href="#" class="tab-link_inactive tab-pill"> Billing </a>
                    </nav>
                  </div>
                </div>
                `
        },
      
        {
            id: "tab_5",
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
                     <!-- Current: "tab-link_active", Default: "border-transparent tab-link_inactive" -->
                     <a href="#" class="border-transparent tab-link_inactive tab-link group">
                       Applied

                       <!-- Current: "bg-indigo-100 tab-link_active", Default: "bg-gray-100 text-gray-900" -->
                       <span class="bg-gray-100 text-gray-900 tab-link_badges group-hover:bg-primary-500 group-hover:text-white">52</span>
                     </a>

                     <a href="#" class="border-transparent tab-link_inactive tab-link group">
                       Phone Screening

                       <span class="bg-gray-100 text-gray-900 tab-link_badges group-hover:bg-primary-500 group-hover:text-white">6</span>
                     </a>

                     <a href="#" class="tab-link_active tab-link" aria-current="page">
                       Interview

                       <span class="bg-primary-500 text-white tab-link_active tab-link_badges">4</span>
                     </a>

                     <a href="#" class="border-transparent tab-link_inactive tab-link"> Offer </a>

                     <a href="#" class="border-transparent tab-link_inactive tab-link"> Disqualified </a>
                   </nav>
                 </div>
               </div>
             </div>
                `
        },
    ];

}