import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContainerService {
  checkoutDatas: any = [
    {
      id: 'contianer_1',
      title: 'Full width container with left navigation',
      code: ` 
            <div class="flex bg-gray-50">
    <!-- Sidenav starts -->
    <div
        class="w-64 2xl:w-72  hidden lg:flex lg:flex-shrink-0 lg:flex-col overflow-y-auto border-r border-neutral-300 bg-white pt-4">

        <!--left navigation content-->
        <div class="flex h-full items-center">
            <p class="text-gray-400 text-center justify-center w-full">Left Nav</p>
        </div>
        <!--left navigation content ends-->

    </div>
    <!-- Sidenav ends -->
    <!-- Body starts -->
    <div class="flex min-w-0 flex-1 flex-col overflow-hidden h-full">
        <!-- Nav for mobile starts -->
        <div class="lg:hidden">
            <div class="flex items-center justify-between bg-white border-b border-neutral-300 px-6 2xl:px-8 py-1.5">
                <div>
                    <img class="h-6 w-auto" src="../Images/cb-new-logo.svg" />
                </div>
                <div>
                    <button type="button"
                        class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900">
                        <span class="sr-only">Open sidebar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 text-neutral-700">
                            <path fill-rule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Nav for mobile ends -->
        <!-- Main section starts -->
        <main class="flex-1 bg-neutral-50 ">
            <div class="mx-auto max-w-screen-2xl mt-6 2xl:mt-8 px-6 2xl:px-8 ">
                <div>
                    <!-- //// REPLACE YOUR CONTENT FROM HERE //// -->
                    <div class=" rounded-lg border-2 border-dashed border-neutral-400 ">
                        <div class="cb-text-copy-regular text-neutral-700 flex pt-32 justify-center">
                            Full width
                        </div>
                    </div>
                    <!-- //// REPLACE YOUR CONTENT TILL HERE //// -->
                </div>
            </div>
        </main>
        <!-- Main section ends -->
    </div>
    <!-- Body ends -->
</div>
            `,
    },
    {
      id: 'contianer_2',
      title: 'Two column container with left navigation',
      code: ` 
            <div class="flex bg-gray-50">
    <!-- Sidenav starts -->
    <div
        class="w-64 2xl:w-72  hidden lg:flex lg:flex-shrink-0 lg:flex-col overflow-y-auto border-r border-neutral-300 bg-white pt-4">

        <!--left navigation content-->
        <div class="flex h-full items-center">
            <p class="text-gray-400 text-center justify-center w-full">Left Nav</p>
        </div>
        <!--left navigation content ends-->

    </div>
    <!-- Sidenav ends -->
    <!-- Body starts -->
    <div class="flex min-w-0 flex-1 flex-col overflow-hidden h-full">
        <!-- Nav for mobile starts -->
        <div class="lg:hidden">
            <div class="flex items-center justify-between bg-white border-b border-neutral-300 px-6 2xl:px-8 py-1.5">
                <div>
                    <img class="h-6 w-auto" src="../Images/cb-new-logo.svg" />
                </div>
                <div>
                    <button type="button"
                        class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900">
                        <span class="sr-only">Open sidebar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 text-neutral-700">
                            <path fill-rule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Nav for mobile ends -->
        <!-- Main section starts -->
        <div class="relative z-0 flex flex-1 overflow-hidden">
            <main class="w-3/4 relative z-0 flex-1 overflow-y-auto focus:outline-none h-[70vh]">
                <!-- Main area starts -->
                <div class="absolute inset-0 p-6 2xl:p-8">
                    <!-- //// REPLACE YOUR MAIN CONTENT FROM HERE //// -->
                    <div class="h-full rounded-lg border-2 border-dashed border-neutral-400">
                        <div class="cb-text-copy-regular text-neutral-700 h-full flex pt-32 justify-center">
                            Primary Content
                        </div>
                    </div>
                    <!-- //// REPLACE YOUR MAIN CONTENT TILL HERE //// -->
                </div>
                <!-- Main area ends -->
            </main>
            <aside class="relative hidden w-1/4 flex-shrink-0 overflow-y-auto xl:flex xl:flex-col">
                <!-- Secondary column starts -->
                <div class="absolute inset-0 py-6 pr-6 2xl:py-8 2xl:pr-8">
                    <!-- //// REPLACE YOUR SIDE CONTENT FROM HERE //// -->
                    <div class="h-full rounded-lg border-2 border-dashed border-neutral-400">
                        <div class="cb-text-copy-regular text-neutral-700 h-full flex pt-32 justify-center">
                            Secondary/Nav Content
                        </div>
                    </div>
                    <!-- //// REPLACE YOUR SIDE CONTENT TILL HERE //// -->
                </div>
                <!-- Secondary column ends -->
            </aside>
        </div>
        <!-- Main section ends -->
    </div>
    <!-- Body ends -->
</div>
            `,
    },
    {
      id: 'contianer_3',
      title: 'Center align container with header section',
      code: ` 
          
      <div class="relative bg-white">
                <!-- Header starts -->
                <header class="py-6 z-10 sticky top-0 right-0 left-0 bg-white border-b border-neutral-400">
                    <div
                        class="mx-auto max-w-screen-2xl px-8 sm:px-12 md:px-12 lg:px-12 xl:px-8 md:flex md:items-center md:justify-between">
                        <div class="min-w-0 flex-1">
                            <h2 class="cb-text-h2 hidden md:block">Page title</h2>
                            <p class="cb-text-h4 md:hidden">Page title</p>
                        </div>
                        <div class="mt-4 flex md:mt-0 space-x-4">
                            <div>
                                <button class="btn btn-borderless hidden md:block">
                                    Secondary
                                </button>
                                <button class="btn-small btn-borderless md:hidden">
                                    Secondary
                                </button>
                            </div>
                            <div>
                                <button class="btn btn-primary hidden md:block">Primary</button>
                                <button class="btn-small btn-primary md:hidden">Primary</button>
                            </div>
                        </div>
                    </div>
                </header>
                <!-- Header ends -->
                <!-- Body starts -->
                <div class="relative flex flex-col">
                    <div class="mx-auto w-full max-w-4xl py-6 px-6 sm:px-8 flex-grow lg:flex">
                        <!-- Left sidebar & main wrapper -->
                        <div class="min-w-0 flex-1 bg-white xl:flex">
                            <div class="bg-white lg:min-w-0 lg:flex-1">
                                <div class="h-full py-4 pl-2 pr-2 sm:pr-4 lg:pr-4 sm:pl-4 lg:pl-4 xl:pl-0">
                                    <!-- Start main area-->
                                    <div class="relative h-full" style="min-height: 36rem">
                                        <div class="absolute inset-0 rounded-lg border-2 border-dashed border-neutral-400">
                                            <div
                                                class="cb-text-copy-regular text-neutral-700 h-full flex items-center justify-center">
                                                Primary Content
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End main area -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Body ends -->
            </div>
    
            `,
    },
    {
      id: 'contianer_4',
      title: 'Center align two column container with header section',
      code: ` 
           


            <div class="relative bg-white">
            <!-- Header starts -->
            <header
              class="py-6 z-10 sticky top-0 right-0 left-0 bg-white border-b border-neutral-400"
            >
              <div
                class="mx-auto max-w-screen-2xl px-8 sm:px-12 md:px-12 lg:px-12 xl:px-8 md:flex md:items-center md:justify-between"
              >
                <div class="min-w-0 flex-1">
                  <h2 class="cb-text-h2 hidden md:block">Page title</h2>
                  <p class="cb-text-h4 md:hidden">Page title</p>
                </div>
                <div class="mt-4 flex md:mt-0 space-x-4">
                  <div>
                    <button class="btn btn-borderless hidden md:block">
                      Secondary
                    </button>
                    <button class="btn-small btn-borderless md:hidden">
                      Secondary
                    </button>
                  </div>
                  <div>
                    <button class="btn btn-primary hidden md:block">Primary</button>
                    <button class="btn-small btn-primary md:hidden">Primary</button>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header ends -->
            <!-- Body starts -->
            <div class="relative flex flex-col">
              <div
                class="mx-auto w-full max-w-screen-xl py-6 px-6 sm:px-8 flex-grow lg:flex"
              >
                <!-- Left sidebar & main wrapper -->
                <div class="min-w-0 flex-1 bg-white xl:flex">
                  <div class="bg-white lg:min-w-0 lg:flex-1">
                    <div class="h-full py-4 pl-2 pr-2 sm:pr-4 lg:pr-4 sm:pl-4 lg:pl-4 xl:pl-0">
                      <!-- Start main area-->
                      <div class="relative h-full" style="min-height: 36rem">
                        <div
                          class="absolute inset-0 rounded-lg border-2 border-dashed border-neutral-400"
                        >
                          <div
                            class="cb-text-copy-regular text-neutral-700 h-full flex items-center justify-center"
                          >
                            Primary Content
                          </div>
                        </div>
                      </div>
                      <!-- End main area -->
                    </div>
                  </div>
                </div>
      
                <div class="pr-2 sm:pr-4 lg:flex-shrink-0 lg:pr-4 xl:pr-0">
                  <div
                    class="h-full pt-4 pb-4 sm:pt-2 lg:pt-4 pl-2 sm:pl-4 lg:pl-4 lg:w-80"
                  >
                    <!-- Start right column area -->
                    <div class="relative h-full" style="min-height: 16rem">
                      <div
                        class="absolute inset-0 rounded-lg border-2 border-dashed border-neutral-400"
                      >
                        <div
                          class="cb-text-copy-regular text-neutral-700 h-full flex items-center justify-center"
                        >
                          Secondary Content
                        </div>
                      </div>
                    </div>
                    <!-- End right column area -->
                  </div>
                </div>
              </div>
            </div>
            <!-- Body ends -->
          </div>
    
       
            `,
    },
    {
      id: 'contianer_5',
      title: 'Center align three column container with header section',
      code: ` 
           


            <div class="relative bg-white">
            <!-- Header starts -->
            <header
              class="py-6 z-10 sticky top-0 right-0 left-0 bg-white border-b border-neutral-400"
            >
              <div
                class="mx-auto max-w-screen-2xl px-8 sm:px-12 md:px-12 lg:px-12 xl:px-8 md:flex md:items-center md:justify-between"
              >
                <div class="min-w-0 flex-1">
                  <h2 class="cb-text-h2 hidden md:block">Page title</h2>
                  <p class="cb-text-h4 md:hidden">Page title</p>
                </div>
                <div class="mt-4 flex md:mt-0 space-x-4">
                  <div>
                    <button class="btn btn-borderless hidden md:block">
                      Secondary
                    </button>
                    <button class="btn-small btn-borderless md:hidden">
                      Secondary
                    </button>
                  </div>
                  <div>
                    <button class="btn btn-primary hidden md:block">Primary</button>
                    <button class="btn-small btn-primary md:hidden">Primary</button>
                  </div>
                </div>
              </div>
            </header>
            <!-- Header ends -->
            <!-- Body starts -->
            <div class="relative flex flex-col">
              <div
                class="mx-auto w-full max-w-screen-2xl py-6 px-6 sm:px-8 flex-grow lg:flex"
              >
                <!-- Left sidebar & main wrapper -->
                <div class="min-w-0 flex-1 bg-white xl:flex">
                  <div class="bg-white xl:w-64 xl:flex-shrink-0">
                    <div
                      class="h-full pt-4 pb-4 sm:pb-2 lg:pb-4 pl-2 pr-2 sm:pr-4 lg:pr-4 sm:pl-4 lg:pl-4 xl:pl-0"
                    >
                      <!-- Start left column area -->
                      <div class="relative h-full" style="min-height: 4rem">
                        <div
                          class="absolute inset-0 rounded-lg border-2 border-dashed border-neutral-400"
                        >
                          <div
                            class="cb-text-copy-regular text-neutral-700 h-full flex items-center justify-center"
                          >
                            Navigation Content
                          </div>
                        </div>
                      </div>
                      <!-- End left column area -->
                    </div>
                  </div>
                  <div class="bg-white lg:min-w-0 lg:flex-1">
                    <div class="h-full py-4 px-2 sm:px-4 lg:px-4">
                      <!-- Start main area-->
                      <div class="relative h-full" style="min-height: 36rem">
                        <div
                          class="absolute inset-0 rounded-lg border-2 border-dashed border-neutral-400"
                        >
                          <div
                            class="cb-text-copy-regular text-neutral-700 h-full flex items-center justify-center"
                          >
                            Primary Content
                          </div>
                        </div>
                      </div>
                      <!-- End main area -->
                    </div>
                  </div>
                </div>
      
                <div class="pr-2 sm:pr-4 lg:flex-shrink-0 lg:pr-4 xl:pr-0">
                  <div
                    class="h-full pt-4 pb-4 sm:pt-2 lg:pt-4 pl-2 sm:pl-4 lg:pl-4 lg:w-80"
                  >
                    <!-- Start right column area -->
                    <div class="relative h-full" style="min-height: 16rem">
                      <div
                        class="absolute inset-0 rounded-lg border-2 border-dashed border-neutral-400"
                      >
                        <div
                          class="cb-text-copy-regular text-neutral-700 h-full flex items-center justify-center"
                        >
                          Secondary Content
                        </div>
                      </div>
                    </div>
                    <!-- End right column area -->
                  </div>
                </div>
              </div>
            </div>
            <!-- Body ends -->
          </div>
       
            `,
    },
  ];
}
