import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  notificationDatas = [
    {
      id: 'notification_1',
      title: 'Toast with secondary action',
      code: ` <div
      class="pointer-events-auto max-w-xs overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-neutral-200">
      <div class="px-4 py-2.5">
          <div class="flex items-center">
              <div class="flex w-0 flex-1 items-center justify-between">
                  <p class="w-0 flex-1 cb-text-h6">Plan deleted</p>
                  <div>
                      <button class="ml-3 btn-small btn-borderless">Undo</button>
                  </div>
              </div>
              <div class="ml-2 flex flex-shrink-0">
                  <button class="btn-rounded-small btn btn-borderless">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                          class="w-4 h-4">
                          <path fill-rule="evenodd"
                              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                              clip-rule="evenodd" />
                      </svg>
                  </button>
              </div>
          </div>
      </div>
  </div>`,
    },
    {
      id: 'notification_2',
      title: 'Toast with description',
      code: `   <div
      class="pointer-events-auto w-full max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-neutral-200"
    >
      <div class="p-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-green-500"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1">
            <p class="cb-text-h6">Customer created!</p>
            <p class="mt-0.5 cb-text-copy-regular">
              You can now add subscriptions to this customer.
            </p>
          </div>
          <div class="ml-4 flex flex-shrink-0">
            <button class="btn-rounded-small btn btn-borderless">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>`,
    },
  ];
}
