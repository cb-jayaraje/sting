import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})


export class PageHeadingService {

    pageHeadingDatas: any = [
        {
        id: 'pageHeading_1',
            title: 'With actions',
            code: ` 
            <div class="md:flex md:items-center md:justify-between">
        <div class="min-w-0 flex-1">
          <h2 class="cb-text-h2">Page Heading</h2>
        </div>
        <div class="mt-4 flex md:mt-0 space-x-4">
          <div>
            <button class="btn btn-neutral-borderless">Borderless</button>
          </div>
          <div>
            <button class="btn btn-neutral">Neutral</button>
          </div>
          <div>
            <button class="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>

            `
    },
   
    {
        id: 'pageHeading_2',
            title: 'With actions and breadcrumbs',
            code: ` 
            <div>
            <div>
              <nav class="sm:hidden" aria-label="Back">
                <a
                  href="#"
                  class="flex items-center cb-text-copy-small hover:text-neutral-800"
                >
                  <!-- Heroicon name: mini/chevron-left -->
                  <svg
                    class="-ml-1 mr-1 h-4 w-4 flex-shrink-0 text-neutral-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Back
                </a>
              </nav>
              <!-- Breadcrumb -->
              <nav class="hidden sm:flex" aria-label="Breadcrumb">
                <ol role="list" class="flex items-center space-x-3">
                  <li>
                    <div class="flex items-center">
                      <a href="#" class="cb-text-copy-small hover:text-neutral-800"
                        >Page</a
                      >
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"
                        ></path>
                      </svg>
                      <a
                        href="#"
                        class="ml-3 cb-text-copy-small hover:text-neutral-800"
                        >Page</a
                      >
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"
                        ></path>
                      </svg>
                      <a
                        href="#"
                        class="ml-3 cb-text-copy-small hover:text-neutral-800"
                        aria-current="page"
                        >Page</a
                      >
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            <div class="mt-2 md:flex md:items-center md:justify-between">
              <div class="min-w-0 flex-1">
                <h2 class="cb-text-h2">Page Heading</h2>
              </div>
              <div class="mt-4 flex flex-shrink-0 md:mt-0 space-x-4">
                <div>
                  <button class="btn btn-neutral-borderless">Borderless</button>
                </div>
                <div>
                  <button class="btn btn-neutral">Neutral</button>
                </div>
                <div>
                  <button class="btn btn-primary">Primary</button>
                </div>
              </div>
            </div>
          </div>

            `
    },

    {
        id: 'pageHeading_3',
            title: 'With meta and actions',
            code: ` 
            <div class="lg:flex lg:items-center lg:justify-between">
            <div class="min-w-0 flex-1">
              <h2 class="cb-text-h2">Page Heading</h2>
              <div
                class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
              >
                <div class="mt-2 flex items-center cb-text-copy-regular">
                  <!-- Heroicon name: mini/briefcase -->
                  <svg
                    class="mr-2 h-4 w-4 flex-shrink-0 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                      clip-rule="evenodd"
                    />
                    <path
                      d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"
                    />
                  </svg>
                  Full-time
                </div>
                <div class="mt-2 flex items-center cb-text-copy-regular">
                  <!-- Heroicon name: mini/map-pin -->
                  <svg
                    class="mr-2 h-4 w-4 flex-shrink-0 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Remote
                </div>
                <div class="mt-2 flex items-center cb-text-copy-regular">
                  <!-- Heroicon name: mini/currency-dollar -->
                  <svg
                    class="mr-2 h-4 w-4 flex-shrink-0 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  $120k &ndash; $140k
                </div>
                <div class="mt-2 flex items-center cb-text-copy-regular">
                  <!-- Heroicon name: mini/calendar -->
                  <svg
                    class="mr-2 h-4 w-4 flex-shrink-0 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Closing on January 9, 2020
                </div>
              </div>
            </div>
            <div class="mt-6 flex flex-shrink-0 lg:mt-0 space-x-4">
              <div>
                <button class="btn btn-neutral-borderless">Borderless</button>
              </div>
              <div>
                <button class="btn btn-neutral">Neutral</button>
              </div>
              <div>
                <button class="btn btn-primary">Primary</button>
              </div>
            </div>
          </div>

            `
    },
   
  
    
]

}