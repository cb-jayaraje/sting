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
                    <div class="border-b border-gray-200">
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
            id: "tab_2",
            title: "Tabs with underline and icons",
            code: 
                `
                <!-- Tabs with underline and icons -->
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
                    <div class="border-b border-gray-200">
                      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                        <!-- Current: "tab-link_active", Default: "border-transparent tab-link_inactive" -->
                        <a href="#" class="border-transparent tab-link_inactive tab-link inline-flex">
                          <!--
                            Heroicon name: solid/user
                
                            Current: "tab-link_active", Default: "tab-link_inactive"
                          -->
                          <svg class="tab-link_inactive -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                          </svg>
                          <span>My Account</span>
                        </a>
                
                        <a href="#" class="border-transparent tab-link_inactive tab-link inline-flex">
                          <!-- Heroicon name: solid/office-building -->
                          <svg class="tab-link_inactive -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                          </svg>
                          <span>Company</span>
                        </a>
                
                        <a href="#" class="tab-link_active tab-link inline-flex" aria-current="page">
                          <!-- Heroicon name: solid/users -->
                          <svg class="tab-link_active -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          <span>Team Members</span>
                        </a>
                
                        <a href="#" class="border-transparent tab-link_inactive tab-link inline-flex">
                          <!-- Heroicon name: solid/credit-card -->
                          <svg class="tab-link_inactive -ml-0.5 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                          </svg>
                          <span>Billing</span>
                        </a>
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
                      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                        <!-- Current: "tab-link_active", Default: "border-transparent tab-link_inactive" -->
                        <a href="#" class="border-transparent tab-link_inactive tab-link">
                          Applied
                
                          <!-- Current: "bg-indigo-100 tab-link_active", Default: "bg-gray-100 text-gray-900" -->
                          <span class="bg-gray-100 text-gray-900 tab-link_badges">52</span>
                        </a>
                
                        <a href="#" class="border-transparent tab-link_inactive tab-link">
                          Phone Screening
                
                          <span class="bg-gray-100 text-gray-900 tab-link_badges">6</span>
                        </a>
                
                        <a href="#" class="tab-link_active tab-link" aria-current="page">
                          Interview
                
                          <span class="bg-indigo-100 tab-link_active tab-link_badges">4</span>
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