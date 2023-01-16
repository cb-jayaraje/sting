import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class StepsService {
    stepDatas = [ 
        {
            id: 'step_1',
            title: 'Simple steps',
            code: ` 
            <!-- Simple steps -->
            <nav aria-label="Progress" class="w-full">
              <ol role="list" class="space-y-4 md:flex md:space-y-0 md:space-x-3">
                <li class="md:flex-1">
                  <!-- Completed Step -->
                  <a
                    href="#"
                    class="group pl-4 py-2 flex flex-col border-l-4 border-primary-500 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-2"
                  >
                    <span
                      class="cb-text-copy-small text-neutral-600 group-hover:text-primary-700"
                      >Step 1</span
                    >
                    <span
                      class="cb-text-copy-regular font-semibold text-neutral-600 group-hover:text-primary-700"
                      >Feature</span
                    >
                  </a>
                </li>
                <li class="md:flex-1">
                  <!-- Completed Step -->
                  <a
                    href="#"
                    class="group pl-4 py-2 flex flex-col border-l-4 border-primary-500 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-2"
                  >
                    <span
                      class="cb-text-copy-small text-neutral-600 group-hover:text-primary-700"
                      >Step 2</span
                    >
                    <span
                      class="cb-text-copy-regular font-semibold text-neutral-600 group-hover:text-primary-700"
                      >Feature</span
                    >
                  </a>
                </li>
                <li class="md:flex-1">
                  <!-- Current Step -->
                  <a
                    href="#"
                    class="cursor-default pl-4 py-2 flex flex-col border-l-4 border-primary-500 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-2"
                    aria-current="step"
                  >
                    <span class="cb-text-copy-small text-primary-600">Step 3</span>
                    <span class="cb-text-copy-regular font-semibold text-primary-600"
                      >Feature</span
                    >
                  </a>
                </li>
                <li class="md:flex-1">
                  <!-- Upcoming Step -->
                  <a
                    href="#"
                    class="group pl-4 py-2 flex flex-col border-l-4 border-neutral-200 hover:border-primary-500 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-2"
                  >
                    <span
                      class="cb-text-copy-small text-neutral-600 group-hover:text-primary-700"
                      >Step 4</span
                    >
                    <span
                      class="cb-text-copy-regular font-semibold text-neutral-600 group-hover:text-primary-700"
                      >Feature</span
                    >
                  </a>
                </li>
                <li class="md:flex-1">
                  <!-- Upcoming Step -->
                  <a
                    href="#"
                    class="group pl-4 py-2 flex flex-col border-l-4 border-neutral-200 hover:border-primary-500 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-2"
                  >
                    <span
                      class="cb-text-copy-small text-neutral-600 group-hover:text-primary-700"
                      >Step 5</span
                    >
                    <span
                      class="cb-text-copy-regular font-semibold text-neutral-600 group-hover:text-primary-700"
                      >Feature</span
                    >
                  </a>
                </li>
              </ol>
            </nav>
            `
        },

        {
            id: 'step_2',
            title: 'Bullets and text ',
            code: ` 
            <nav class="flex" aria-label="Progress">
            <ol role="list" class="space-y-6">
              <li>
                <!-- Complete Step -->
                <a href="#" class="group">
                  <span class="flex items-start">
                    <span
                      class="flex-shrink-0 relative h-5 w-5 flex items-center justify-center"
                    >
                      <svg
                        class="h-full w-full text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span
                      class="ml-3 cb-text-copy-regular font-semibold text-neutral-600 group-hover:text-primary-700"
                      >Feature</span
                    >
                  </span>
                </a>
              </li>
              <li>
                <!-- Current Step -->
                <a
                  href="#"
                  class="cursor-default flex items-start"
                  aria-current="step"
                >
                  <span
                    class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span
                      class="absolute h-4 w-4 rounded-full bg-neutral-200"
                    ></span>
                    <span
                      class="relative block w-2 h-2 bg-primary-500 rounded-full"
                    ></span>
                  </span>
                  <span
                    class="ml-3 cb-text-copy-regular text-primary-600 font-semibold"
                    >Feature</span
                  >
                </a>
              </li>
              <li>
                <!-- Upcoming Step -->
                <a href="#" class="group">
                  <div class="flex items-start">
                    <div
                      class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div
                        class="h-2 w-2 bg-neutral-200 rounded-full group-hover:bg-info-900"
                      ></div>
                    </div>
                    <p
                      class="ml-3 cb-text-copy-regular font-semibold text-neutral-600 group-hover:text-primary-700"
                    >
                      Feature
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <!-- Upcoming Step -->
                <a href="#" class="group">
                  <div class="flex items-start">
                    <div
                      class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div
                        class="h-2 w-2 bg-neutral-200 rounded-full group-hover:bg-info-900"
                      ></div>
                    </div>
                    <p
                      class="ml-3 cb-text-copy-regular font-semibold text-neutral-600 group-hover:text-primary-700"
                    >
                      Feature
                    </p>
                  </div>
                </a>
              </li>
            </ol>
          </nav>
            `
        },

        {
            id: 'step_3',
            title: 'Bullets',
            code: ` 
            <nav class="flex items-center" aria-label="Progress">
        <p class="cb-text-copy-small text-neutral-800">Step 2 of 4</p>
        <ol role="list" class="ml-6 flex items-center space-x-3">
          <li>
            <!-- Completed Step -->
            <span
            
              class="block h-3 w-5 rounded-full bg-primary-500"
            >
              <span class="sr-only">Step 1</span>
          </span>
          </li>

          <li>
            <!-- Current Step -->
            <span
            
              class="relative flex items-center justify-center mx-0.5"
              aria-current="step"
            >
              <span class="absolute flex h-6 w-12 p-px" aria-hidden="true">
                <span class="h-full w-full rounded-full bg-neutral-200"></span>
              </span>
              <span
                class="relative block h-3 w-9 rounded-full bg-primary-500"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 2</span>
            </span>
          </li>

          <li>
            <!-- Upcoming Step -->
            <span
             
              class="block h-3 w-5 rounded-full bg-neutral-200"
            >
              <span class="sr-only">Step 3</span>
            </span>
          </li>

          <li>
            <!-- Upcoming Step -->
            <span
              
              class="block h-3 w-5 rounded-full bg-neutral-200 "
            >
              <span class="sr-only">Step 4</span>
            </span>
          </li>
        </ol>
      </nav>
            `
        },

        {
            id: 'step_4',
            title: 'Simple progress bar',
            code: ` 
            <div class="w-full">
        <div>
          <h4 class="sr-only">Status</h4>
          <p class="cursor-default cb-text-copy-regular">Progressing...</p>
          <div class="mt-3" aria-hidden="true">
            <div class="bg-neutral-200 rounded-full overflow-hidden">
              <div
                class="h-1 bg-primary-500 rounded-full"
                style="width: 37.5%"
              ></div>
            </div>
          </div>
        </div>
      </div>
            `
        }
    ]
}