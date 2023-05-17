import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  modalsdata = [
    {
      id: 'modal_1',
      title: 'Simple Modal',
      code: `      
      <!-- Simple modal -->
      <div
        class="modal-small"
      >
        <div class="sm:flex sm:items-start">
          <div class="mt-0 sm:mt-0 sm:ml-0 sm:text-left">
            <div class="w-full flex items-center justify-between">
              <h5 class="modal-title" id="modal-title">
                Delete Coupon
              </h5>
              <button class="btn-rounded-small btn btn-borderless">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
            </div>
            <div class="mt-2 mr-6">
              <p class="cb-text-copy-regular">
                This coupon will be permanently deleted. You will not be able to
                link this coupon to any subscription.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-6 sm:flex sm:flex-row-reverse gap-4">
          <button class="btn btn-danger">Delete</button>
          <button class="btn btn-neutral">Cancel</button>
        </div>
      </div>

        `,
    },
    {
      id: 'modal_2',
      title: 'Simple with input modal',
      code: `      
      <!-- Simple with input modal -->
      <div
        class="modal-small"
      >
        <div class="sm:flex sm:items-start">
          <div class="w-full mt-0 sm:mt-0 sm:ml-0 sm:text-left">
            <div class="w-full flex items-center justify-between">
              <h5 class="modal-title" id="modal-title">
                Update PO number
              </h5>
              <button class="btn-rounded-small btn btn-borderless">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div class="mt-6 space-y-4">
              <div class="form-control">
                <!-- <label for="email" class="label">PO number for invoice AJSK1264</label> -->
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="input"
                  placeholder="PO number"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 sm:flex sm:flex-row-reverse gap-4">
          <button class="btn btn-primary">Proceed</button>
          <button class="btn btn-neutral">Cancel</button>
        </div>
      </div>
      `,
    },
    {
      id: 'modal_3',
      title: 'Upload modal',
      code: `      
      <!-- Upload modal -->
      <div
        class="modal-small"
      >
        <div class="sm:flex sm:items-start">
          <div class="mt-0 w-full sm:mt-0 sm:ml-0 sm:text-left">
            <div class="w-full flex items-center justify-between">
              <h5 class="modal-title"  id="modal-title">
                Upload your image
              </h5>
              <button class="btn-rounded-small btn btn-borderless">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div class="mt-6">
              <div
                class="flex max-w-lg justify-center rounded-md border-2 border-dashed border-neutral-400 px-6 pt-5 pb-6"
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-neutral-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex cb-text-copy-regular text-neutral-700">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer btn-link"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="cb-text-copy-small text-neutral-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    `,
    },
    {
      id: 'modal_4',
      title: 'Simple modal with alert',
      code: `      
      <!-- Simple modal with alert-->
      <div class="modal-regular">
        <div class="sm:flex sm:items-start">
          <div class="mt-0 sm:mt-0 sm:ml-0 sm:text-left">
            <div class="w-full flex items-center justify-between">
              <h5 class="modal-title" id="modal-title">
                Delete Subscription
              </h5>
              <button class="btn-rounded-small btn btn-borderless">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div class="mt-2 mr-6">
              <p class="cb-text-copy-regular">
                Invoices, Transactions and Reports related to the subscription
                will also be deleted along with the subscription.
              </p>
            </div>

            <div class="alert-container alert-danger my-4 flex">
              <div class="alert-icon">
                <information-circle class="h-5 w-5"></information-circle>
              </div>

              <div class="details-wrapper flex flex-col gap-4">

                <div class="alert-details flex flex-col gap-2">
                  <h6 class="alert-header cb-text-h6">This action cannot be undone.</h6>
                </div>

              </div>

            </div>

          </div>
        </div>
        <div class="mt-6 sm:flex sm:flex-row-reverse gap-4">
          <button class="btn btn-danger">Delete</button>
          <button class="btn btn-neutral">Cancel</button>
        </div>
      </div>
  `,
    },
    {
      id: 'modal_5',
      title: 'With select modal',
      code: `
      <!-- With select modal -->
      <div
        class="modal-regular"
      >
        <div class="sm:flex sm:items-start">
          <div class="w-full mt-0 sm:mt-0 sm:ml-0 sm:text-left">
            <div class="w-full flex items-start justify-between">
              <h5 class="modal-title mr-4"  id="modal-title">
                Add multiple coupons
              </h5>
              <button class="btn-rounded-small btn btn-borderless">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div class="mt-4 space-y-4">
              <div class="form-control radio-group">
                <h6 class="cb-text-h6 font-medium text-neutral-700 hidden">
                  Choose a method
                </h6>

                <fieldset class="pt-1.5">
                  <legend class="sr-only">Notification method</legend>
                  <div class="radio-list-inline">
                    <div>
                      <input
                        id="email2"
                        name="notification-method"
                        type="radio"
                        checked
                        class="radio-input"
                      />
                      <label for="email2" class="radio-label"> Coupon </label>
                    </div>
                    <div>
                      <input
                        id="sms2"
                        name="notification-method"
                        type="radio"
                        class="radio-input"
                      />
                      <label for="sms2" class="radio-label">
                        Coupon Code
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="form-control">
                <label class="label">Select coupon</label>
                <div class="relative">
                  <button class="select-button">
                    <span> Select </span>
                    <span class="pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 sm:flex sm:flex-row-reverse gap-4">
          <button class="btn btn-primary">Save</button>
          <button class="btn btn-neutral-borderless">Cancel</button>
        </div>
      </div>
`,
    },
    {
      id: 'modal_6',
      title: 'With input modal',
      code: `
      <!-- With input modal -->
      <div
        class="modal-regular sm:p-0 "
      >
        <div class="sm:p-6">
        <div class="sm:flex sm:items-start">
          <div class="w-full mt-0 sm:mt-0 sm:ml-0 sm:text-left">
            <div class="w-full flex items-center justify-between">
              <h5 class="modal-title"  id="modal-title">
                Connect to Checkout.com
              </h5>
              <button class="btn-rounded-small btn btn-borderless">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div class="mt-4 space-y-4">
              <div class="form-control">
                <label for="email" class="label">API Secret Key</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="input"
                  placeholder="you@example.com"
                />
              </div>
              <div class="form-control">
                <label for="email" class="label">API Public Key</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="input"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 sm:flex sm:flex-row-reverse gap-4">
          <button class="btn btn-primary">Connect</button>
          <button class="btn btn-neutral-borderless">Cancel</button>
        </div>
        </div>
        <div
          class=" p-4 bottom-0 inset-x-0 bg-neutral-50 border-t border-neutral-100 text-center"
        >
          <p class="cb-text-copy-regular">
            Not so sure about connecting?
            <span class="btn-link cursor-pointer">Use our docs</span> to read
            more about Checkout.com integration.
          </p>
        </div>
      </div>
`,
    },
  ];
}
