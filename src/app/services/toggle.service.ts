import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class ToggleService {

    toggleDatas = [
        {
            id: "toggle_1",
            title: "Simple toggle",
            code: 
                `
                <!-- Simple toggle : active -->
                <button class="toggle-btn bg-primary-500" role="switch" aria-checked="false">
                  <span class="sr-only">Use setting</span>
                  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                  <span aria-hidden="true" class="translate-x-5 toggle-switch"></span>
                </button>

                <!-- Simple toggle : inactive -->
          
                <button class="toggle-btn bg-gray-200" role="switch" aria-checked="false">
                  <span class="sr-only">Use setting</span>
                  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                  <span aria-hidden="true" class="translate-x-0 toggle-switch"></span>
                </button>
                `
        },
        {
            id: "toggle_2",
            title: "Short toggle",
            code: 
                `
                <!-- Short toggle : active -->

                <button type="button" class="toggle-btn items-center justify-center h-5 w-10" role="switch" aria-checked="false">
                  <span class="sr-only">Use setting</span>
                  <span aria-hidden="true" class="pointer-events-none absolute bg-white w-full h-full rounded-md"></span>
                  <!-- Enabled: "bg-primary-500", Not Enabled: "bg-gray-200" -->
                  <span aria-hidden="true" class="bg-primary-500 pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"></span>
                  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                  <span aria-hidden="true" class="translate-x-5 pointer-events-none absolute left-0 toggle-switch"></span>
                </button>

                <!-- Short toggle : inactive -->
          
                <button type="button" class="toggle-btn items-center justify-center h-5 w-10" role="switch" aria-checked="false">
                  <span class="sr-only">Use setting</span>
                  <span aria-hidden="true" class="pointer-events-none absolute bg-white w-full h-full rounded-md"></span>
                  <!-- Enabled: "bg-primary-500", Not Enabled: "bg-gray-200" -->
                  <span aria-hidden="true" class="bg-gray-200 pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"></span>
                  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                  <span aria-hidden="true" class="translate-x-0 pointer-events-none absolute left-0 toggle-switch"></span>
                </button>
                `
        },
        {
            id: "toggle_3",
            title: "Toggle with icon",
            code: 
                `
                <!-- Toggle with icon -->
                <button class="toggle-btn bg-primary-500" role="switch" aria-checked="false">
                  <span class="sr-only">Use setting</span>
                  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                  <span class="translate-x-5 toggle-switch">
                    <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                    <span class="opacity-0 ease-in duration-200 toggle-icn__container" aria-hidden="true">
                      <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                    <span class="opacity-100 ease-out duration-100 toggle-icn__container" aria-hidden="true">
                      <svg class="h-3 w-3 text-primary-500" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                      </svg>
                    </span>
                  </span>
                </button>
          
                <button class="toggle-btn bg-gray-200" role="switch" aria-checked="false">
                  <span class="sr-only">Use setting</span>
                  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                  <span class="translate-x-0 toggle-switch">
                    <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                    <span class="opacity-100 ease-in duration-200 toggle-icn__container" aria-hidden="true">
                      <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                    <span class="opacity-0 ease-out duration-100 toggle-icn__container" aria-hidden="true">
                      <svg class="h-3 w-3 text-primary-500" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                      </svg>
                    </span>
                  </span>
                </button>
                `
        },
        {
            id: "toggle_4",
            title: "With left label and description",
            code: 
                `
                <div class="flex items-center justify-between">
                <span class="flex-grow flex flex-col">
                  <span class="text-sm font-medium text-gray-900" id="availability-label">Available to hire</span>
                  <span class="text-sm text-gray-500" id="availability-description">Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</span>
                </span>
                <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                <button class="toggle-btn bg-primary-500" role="switch" aria-checked="false">
                  <span class="sr-only">Use setting</span>
                  <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                  <span aria-hidden="true" class="translate-x-5 toggle-switch"></span>
                </button>
              </div>
                `
        },
        {
            id: "toggle_5",
            title: "With right label",
            code: 
                `
                <!-- With right label -->
                <div class="flex items-center">
                  <button class="toggle-btn bg-primary-500" role="switch" aria-checked="false">
                    <span class="sr-only">Use setting</span>
                    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                    <span aria-hidden="true" class="translate-x-5 toggle-switch"></span>
                  </button>
                  <span class="ml-3" id="annual-billing-label">
                    <span class="text-sm font-medium text-gray-900">Annual billing </span>
                    <span class="text-sm text-gray-500">(Save 10%)</span>
                  </span>
                </div>
                `
        },
    ];

}