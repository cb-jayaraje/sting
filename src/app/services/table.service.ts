import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })

export class TableService {
    tableDatas = [ 
        {
            id: 'table_1',
            title: 'Basic table',
            code: `<div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
              <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900">Plans</h1>
                <p class="mt-2 text-sm text-gray-700">Your team is on the Startup plan. The next payment of $80 will be due on August 4, 2022.</p>
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button  class="btn btn-primary">Update credit card</button>
              </div>
            </div>
            <div class="mt-8 flex flex-col">
              <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                                <tr class="bg-neutral-200 border-b border-neutral">
                                    <th scope="col" class="py-2.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-700 sm:pl-6">Plan</th>
                                    <th scope="col" class="hidden px-3 py-2.5 text-left text-sm font-semibold text-neutral-700 lg:table-cell">Memory</th>
                                    <th scope="col" class="hidden px-3 py-2.5 text-left text-sm font-semibold text-neutral-700 lg:table-cell">CPU</th>
                                    <th scope="col" class="hidden px-3 py-2.5 text-left text-sm font-semibold text-neutral-700 lg:table-cell">Storage</th>
                                    <th scope="col" class="px-3 py-2.5 text-left text-sm font-semibold text-neutral-700">Price</th>
                                    <th scope="col" class="relative py-2.5 pl-3 pr-4 sm:pr-6">
                                    <span class="sr-only">Select</span>
                                    </th>
                                </tr>
                                </thead>
                      <tbody class="bg-white">
                       
                        <tr>
                            <td class="relative py-4 pl-4 sm:pl-6 pr-3 text-sm">
                            <div class="font-medium text-neutral-900">Hobby</div>
                            <div class="mt-1 flex flex-col text-neutral-500 sm:block lg:hidden">
                                <span>4 GB RAM / 4 CPUs</span>
                                <span class="hidden sm:inline"> · </span>
                                <span>128 GB SSD disk</span>
                            </div>
                            </td>
                            <td class="hidden px-3 py-2.5 text-sm text-neutral-600 lg:table-cell">4 GB RAM</td>
                            <td class="hidden px-3 py-2.5 text-sm text-neutral-600 lg:table-cell">4 CPUs</td>
                            <td class="hidden px-3 py-2.5 text-sm text-neutral-600 lg:table-cell">128 GB SSD disk</td>
                            <td class="px-3 py-2.5 text-sm text-neutral-600">
                            <div class="sm:hidden">$40/mo</div>
                            <div class="hidden sm:block">$40/month</div>
                            </td>
                            <td class="relative py-2.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium">
                            <button  class="btn btn-neutral">Select<span class="sr-only">, Hobby</span></button>
                            </td>
                        </tr>
          
                    
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>`
        }
    ]
}