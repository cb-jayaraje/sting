import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  modalsdata = [
    {
      id: 'modal_1',
      title: 'Centered with single action',
      code: `      
          <div class="relative z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div class="absolute inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
              <div class="modal">
                <div>
                  <div class="mx-auto flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
                    <!-- Heroicon name: outline/check -->
                    <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <h3 class="cb-text-h5" id="modal-title">Payment successful</h3>
                    <div class="mt-2">
                      <p class="cb-text-copy-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
                    </div>
                  </div>
                </div>
                <div class="mt-6 sm:mt-8">
                  <button class="btn btn-primary w-full">Go back to dashboard</button>
                </div>
              </div>
            </div>
          </div>
        `,
    },
    {
      id: 'modal_2',
      title: 'Centered with wide buttons',
      code: `      
        <div class="relative z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="absolute inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div class="modal sm:max-w-lg">
        <div>
          <div class="mx-auto flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
            <!-- Heroicon name: outline/check -->
            <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
          <h3 class="cb-text-h5" id="modal-title">Payment successful</h3>
            <div class="mt-2">
              <p class="cb-text-copy-regular">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.</p>
            </div>
          </div>
        </div>
        <div class="mt-6 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button  class="btn btn-neutral w-full">Cancel</button>
          <button  class="btn btn-primary w-full">Deactivate</button>
        </div>
      </div>
      </div>
      </div>
      `,
    },
    {
      id: 'modal_3',
      title: 'Simple alert',
      code: `      
      <div class="relative z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="absolute inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div class="modal sm:max-w-lg">
      <div class="sm:flex sm:items-start">
        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <!-- Heroicon name: outline/exclamation -->
          <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="cb-text-h5" id="modal-title">Deactivate account</h3>
          <div class="mt-2">
            <p class="cb-text-copy-regular">Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.</p>
          </div>
        </div>
      </div>
      <div class="mt-6 sm:mt-8 sm:flex sm:flex-row-reverse">
        <button  class="btn btn-danger sm:ml-3 ">Deactivate</button>
        <button class="btn btn-neutral">Cancel</button>
      </div>
    </div>
    </div>
    </div>
    `,
    },
    {
      id: 'modal_4',
      title: 'Simple with dismiss button',
      code: `      
    <div class="relative z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="absolute inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div class="modal sm:max-w-lg">
    <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
      <button type="button" class="btn btn-neutral p-0 border-none">
        <span class="sr-only">Close</span>
        <!-- Heroicon name: outline/x -->
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="sm:flex sm:items-start">
      <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        <!-- Heroicon name: outline/exclamation -->
        <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 class="cb-text-h5" id="modal-title">Deactivate account</h3>
        <div class="mt-2">
          <p class="cb-text-copy-regular">Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.</p>
        </div>
      </div>
    </div>
    <div class="mt-6 sm:mt-8 sm:flex sm:flex-row-reverse">
      <button  class="btn btn-danger sm:ml-3 ">Deactivate</button>
      <button class="btn btn-neutral">Cancel</button>
    </div>
  </div>
  </div>
  </div>
  `,
    },
    {
      id: 'modal_5',
      title: 'Simple with neutral footer',
      code: `
      <div class="relative z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="absolute inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  <div class="modal sm:max-w-lg sm:p-0">
  <div class="bg-white pb-4 sm:p-0">
    <div class="sm:flex sm:items-start sm:p-6">
      <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        <!-- Heroicon name: outline/exclamation -->
        <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 class="cb-text-h5" id="modal-title">Deactivate account</h3>
        <div class="mt-2">
          <p class="cb-text-copy-regular">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-neutral-100 pt-3 sm:flex sm:flex-row-reverse sm:p-4">
              <button  class="btn btn-danger sm:ml-3 ">Deactivate</button>
    <button class="btn btn-neutral">Cancel</button>
  </div>
</div>
</div>
</div>
`,
    },
    {
      id: 'modal_6',
      title: 'Simple alert with left-aligned buttons',
      code: `
  <div class="relative z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="absolute inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div class="modal sm:max-w-lg">
  <div class="bg-white pb-4 sm:pb-4">
    <div class="sm:flex sm:items-start">
      <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        <!-- Heroicon name: outline/exclamation -->
        <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 class="cb-text-h5" id="modal-title">Deactivate account</h3>
        <div class="mt-2">
          <p class="cb-text-copy-regular">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5 sm:mt-6 sm:ml-10 sm:pl-4 sm:flex">
              <button  class="btn btn-danger sm:mr-3 ">Deactivate</button>
    <button class="btn btn-neutral">Cancel</button>
  </div>
</div>
</div>
</div>
`,
    },
  ];
}
