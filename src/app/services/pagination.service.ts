import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})


export class PaginationService {

    paginationData: any = [
        {
        id: 'pagination_1',
            title: 'Simple card pagination',
            code: ` 
            <div
            class="flex items-center justify-between rounded-b-lg border-t border-neutral-300 bg-white px-4 py-3 sm:px-6">
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p class="cb-text-copy-regular">Showing 1 to 10 of 97 results</p>
                </div>
                <div>
                    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a
                            class="relative inline-flex items-center rounded-l-md border border-neutral-400 bg-white px-2 py-2 text-neutral-700 hover:bg-neutral-50 focus:z-20">
                            <span class="sr-only">Previous</span>
                            <!-- Heroicon name: mini/chevron-left -->
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a aria-current="page"
                            class="relative z-10 inline-flex items-center border border-info-200 bg-info-50 px-4 py-2 cb-text-copy-regular focus:z-20">1</a>
                        <a
                            class="relative inline-flex items-center border border-neutral-400 bg-white px-4 py-2 cb-text-copy-regular hover:bg-neutral-50 focus:z-20">2</a>
                        <a
                            class="relative hidden items-center border border-neutral-400 bg-white px-4 py-2 cb-text-copy-regular hover:bg-neutral-50 focus:z-20 md:inline-flex">3</a>
                        <span
                            class="relative inline-flex items-center border border-neutral-400 bg-white px-4 py-2 cb-text-copy-regular">...</span>
                        <a
                            class="relative hidden items-center border border-neutral-400 bg-white px-4 py-2 cb-text-copy-regular hover:bg-neutral-50 focus:z-20 md:inline-flex">8</a>
                        <a
                            class="relative inline-flex items-center border border-neutral-400 bg-white px-4 py-2 cb-text-copy-regular hover:bg-neutral-50 focus:z-20">9</a>
                        <a
                            class="relative inline-flex items-center border border-neutral-400 bg-white px-4 py-2 cb-text-copy-regular hover:bg-neutral-50 focus:z-20">10</a>
                        <a
                            class="relative inline-flex items-center rounded-r-md border border-neutral-400 bg-white px-2 py-2 text-neutral-700 hover:bg-neutral-50 focus:z-20">
                            <span class="sr-only">Next</span>
                            <!-- Heroicon name: mini/chevron-right -->
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
            `
    },
   
  
    
]

}