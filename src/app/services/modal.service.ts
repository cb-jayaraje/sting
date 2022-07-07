import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ModalService {
    modalsdata = [
        {
            "id": "modal_1",
            "title": "Centered with single action",
            "code": `
            <div class="fixed -z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
              <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
                <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <div>
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-5">
                      <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Payment successful</h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 sm:mt-6">
                    <button  class="btn btn-primary">Go back to dashboard</button>
                  </div>
                </div>
              </div>
            </div>`
        }
    ]
}