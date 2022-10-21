import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })

export class TableService {
    tableDatas = [ 
        {
            id: 'table_1',
            title: 'Basic table',
            code: `

            <!-- Tables starts -->
            <div class="w-full">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="cb-text-h4">Title</h1>
                    <p class="cb-text-copy-small"> Tristique senectus et netus et malesuada
                        fames ac turpis egestas integer eget aliquet nibh praesent tristique.
                    </p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 flex space-x-3">
                    <button type="button" class="btn btn-secondary">Secondary action</button>
                    <button type="button" class="btn btn-primary btn-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 -ml-0.5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>Primary action </button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="relative overflow-hidden ring-1 ring-neutral-100 md:rounded-lg">
                            <table class="min-w-full table-fixed divide-y divide-neutral-200">
                                <thead class="bg-neutral-100">
                                    <tr>
                                        <th scope="col" class="relative w-12 px-6 sm:w-16 sm:px-0 form-control">
                                            <input id="comments" aria-describedby="comments-description"
                                                name="comments" type="checkbox"

                                                class="checkbox rounded absolute left-4 top-1/2 -mt-2 sm:left-6">

                                        </th>
                                        <th scope="col"
                                            class="min-w-[12rem] py-3.5 pr-3 text-left cb-text-copy-regular">
                                            Consectetur</th>
                                        <th scope="col" class="px-3 py-3.5 text-left cb-text-copy-regular">
                                            Consectetur</th>
                                        <th scope="col" class="px-3 py-3.5 text-left cb-text-copy-regular">
                                            Consectetur</th>
                                        <th scope="col" class="px-3 py-3.5 text-left cb-text-copy-regular">
                                            Consectetur</th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-neutral-200 bg-white">
                                    <!-- Selected: "bg-neutral-100" -->
                                    <tr>
                                        <td class="relative w-12 px-6 sm:w-16 sm:px-0 form-control">
                                            <!-- Selected row marker, only show when row is selected. -->
                                            <div class="hidden absolute inset-y-0 left-0 w-0.5 bg-primary-500">
                                            </div>
                                            <input id="comments" aria-describedby="comments-description"
                                                name="comments" type="checkbox"

                                                class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                                        </td>
                                        <!-- Selected: "text-indigo-600", Not Selected: "text-neutral-900" -->
                                        <td
                                            class="whitespace-nowrap py-4 pr-3 cb-text-copy-regular font-semibold cursor-pointer">
                                            Tristique Senectus</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            Turpis Egestas</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            tristique@example.com</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            Netus</td>
                                        <td class="whitespace-nowrap pl-3 pr-4 sm:pr-6 py-2 flex justify-end">
                                            <button type="button"
                                                class="btn btn-neutral !border-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                    class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                                            <!-- Selected row marker, only show when row is selected. -->
                                            <div class="hidden absolute inset-y-0 left-0 w-0.5 bg-primary-500">
                                            </div>
                                            <input id="comments" aria-describedby="comments-description"
                                                name="comments" type="checkbox"
                                                class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                                        </td>
                                        <!-- Selected: "text-indigo-600", Not Selected: "text-neutral-900" -->
                                        <td
                                            class="whitespace-nowrap py-4 pr-3 cb-text-copy-regular font-semibold cursor-pointer">
                                            Tristique Senectus</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            Turpis Egestas</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            tristique@example.com</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            Netus</td>
                                        <td class="whitespace-nowrap pl-3 pr-4 sm:pr-6 py-2 flex justify-end">
                                            <button type="button"
                                                class="btn btn-neutral !border-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                    class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                                            <!-- Selected row marker, only show when row is selected. -->
                                            <div class="hidden absolute inset-y-0 left-0 w-0.5 bg-primary-500">
                                            </div>
                                            <input id="comments" aria-describedby="comments-description"
                                                name="comments" type="checkbox"
                                                class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                                        </td>
                                        <!-- Selected: "text-indigo-600", Not Selected: "text-neutral-900" -->
                                        <td
                                            class="whitespace-nowrap py-4 pr-3 cb-text-copy-regular font-semibold cursor-pointer">
                                            Tristique Senectus</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            Turpis Egestas</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            tristique@example.com</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            Netus</td>
                                        <td class="whitespace-nowrap pl-3 pr-4 sm:pr-6 py-2 flex justify-end">
                                            <button type="button"
                                                class="btn btn-neutral !border-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                    class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                                            <!-- Selected row marker, only show when row is selected. -->
                                            <div class="hidden absolute inset-y-0 left-0 w-0.5 bg-primary-500">
                                            </div>
                                            <input id="comments" aria-describedby="comments-description"
                                                name="comments" type="checkbox"
                                                class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                                        </td>
                                        <!-- Selected: "text-indigo-600", Not Selected: "text-neutral-900" -->
                                        <td
                                            class="whitespace-nowrap py-4 pr-3 cb-text-copy-regular font-semibold cursor-pointer">
                                            Tristique Senectus</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            Turpis Egestas</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            tristique@example.com</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            Netus</td>
                                        <td class="whitespace-nowrap pl-3 pr-4 sm:pr-6 py-2 flex justify-end">
                                            <button type="button"
                                                class="btn btn-neutral !border-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                    class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                                            <!-- Selected row marker, only show when row is selected. -->
                                            <div class="hidden absolute inset-y-0 left-0 w-0.5 bg-primary-500">
                                            </div>
                                            <input id="comments" aria-describedby="comments-description"
                                                name="comments" type="checkbox"
                                                class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                                        </td>
                                        <!-- Selected: "text-indigo-600", Not Selected: "text-neutral-900" -->
                                        <td
                                            class="whitespace-nowrap py-4 pr-3 cb-text-copy-regular font-semibold cursor-pointer">
                                            Tristique Senectus</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            Turpis Egestas</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            tristique@example.com</td>
                                        <td
                                            class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700">
                                            Netus</td>
                                        <td class="whitespace-nowrap pl-3 pr-4 sm:pr-6 py-2 flex justify-end">
                                            <button type="button"
                                                class="btn btn-neutral !border-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                    class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <!-- More people... -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     <!-- Tables ends -->
            `
        },
        {
          id: 'table_2',
          title: 'Multi-line content table',
          code: `

          <!-- Tables starts -->
          <div class="w-full">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="cb-text-h4">Title</h1>
              <p class="cb-text-copy-small"> Tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique.</p>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-16 flex space-x-3">
              <button type="button" class="btn btn-secondary">Secondary action</button>
              <button type="button" class="btn btn-primary btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 -ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>Primary action </button>
            </div>
          </div>
          <div class="mt-8 flex flex-col">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="relative overflow-hidden ring-1 ring-neutral-100 md:rounded-lg">

                  <table class="min-w-full table-fixed divide-y divide-neutral-200">
                    <thead class="bg-neutral-100">
                      <tr>
                        <th scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8">
                          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                        </th>
                        <th scope="col" class="min-w-[12rem] py-3.5 pr-3 text-left cb-text-copy-regular"> Consectetur</th>
                        <th scope="col" class="px-3 py-3.5 text-left cb-text-copy-regular"> Consectetur</th>
                        <th scope="col" class="px-3 py-3.5 text-left cb-text-copy-regular"> Consectetur</th>
                        <th scope="col" class="px-3 py-3.5 text-left cb-text-copy-regular"> Consectetur</th>
                        <th scope="col" class="px-3 py-3.5 text-left cb-text-copy-regular"> Consectetur</th>
                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"></th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-neutral-200 bg-white">
                      <tr>
                        <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                          <!-- Selected row marker, only show when row is selected. -->
                          <div class="hidden absolute inset-y-0 left-0 w-0.5 bg-primary-500"></div>
                          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                        </td>
                        <td class="whitespace-nowrap py-4 pr-3 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>

                              <div class="font-bold cursor-pointer">Tristique Senectus</div>
                              <div class="font-normal text-neutral-700">tristique@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>
                              <div class="font-normal">Turpis Egestas</div>
                              <div class="font-normal text-neutral-700">Eget Aliquet</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-neutral-700">
                          <span class="badge-primary badge-small">Badge</span>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6 flex justify-end">
                          <button type="button" class="btn btn-neutral !border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                          <!-- Selected row marker, only show when row is selected. -->
                          <div class="hidden absolute inset-y-0 left-0 w-0.5 bg-primary-500"></div>
                          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                        </td>
                        <td class="whitespace-nowrap py-4 pr-3 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>
                              <div class="font-bold cursor-pointer">Tristique Senectus</div>
                              <div class="font-normal text-neutral-700">tristique@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>
                              <div class="font-normal">Turpis Egestas</div>
                              <div class="font-normal text-neutral-700">Eget Aliquet</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-neutral-700">
                          <span class="badge-neutral badge-small">Badge</span>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6 flex justify-end">
                          <button type="button" class="btn btn-neutral !border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                          <!-- Selected row marker, only show when row is selected. -->
                          <div class="hidden absolute inset-y-0 left-0 w-0.5 bg-primary-500"></div>
                          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                        </td>
                        <td class="whitespace-nowrap py-4 pr-3 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>
                              <div class="font-bold cursor-pointer">Tristique Senectus</div>
                              <div class="font-normal text-neutral-700">tristique@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>

                              <div class="font-normal">Turpis Egestas</div>
                              <div class="font-normal text-neutral-700">Eget Aliquet</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-neutral-700">
                          <span class="badge-minimal badge-small">Badge</span>
                        </td>

                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6 flex justify-end">
                          <button type="button" class="btn btn-neutral !border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                          <!-- Selected row marker, only show when row is selected. -->
                          <div class="hidden absolute inset-y-0 left-0 w-0.5 bg-primary-500"></div>
                          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                        </td>
                        <td class="whitespace-nowrap py-4 pr-3 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>
                              <div class="font-bold cursor-pointer">Tristique Senectus</div>
                              <div class="font-normal text-neutral-700">tristique@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>
                              <div class="font-normal">Turpis Egestas</div>
                              <div class="font-normal text-neutral-700">Eget Aliquet</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-neutral-700">
                          <span class="badge-green badge-small">Badge</span>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6 flex justify-end">
                          <button type="button" class="btn btn-neutral !border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                          <!-- Selected row marker, only show when row is selected. -->
                          <div class="hidden absolute inset-y-0 left-0 w-0.5 bg-primary-500"></div>
                          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                        </td>
                        <td class="whitespace-nowrap py-4 pr-3 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>
                              <div class="font-bold cursor-pointer">Tristique Senectus</div>
                              <div class="font-normal text-neutral-700">tristique@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>
                              <div class="font-normal">Turpis Egestas</div>
                              <div class="font-normal text-neutral-700">Eget Aliquet</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-neutral-700">
                          <span class="badge-orange badge-small">Badge</span>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6 flex justify-end">
                          <button type="button" class="btn btn-neutral !border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                      <tr>
>>>>>>> 8653bf2363bc52af5dac8c84a7a966d0517d75d5
                        <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                          <!-- Selected row marker, only show when row is selected. -->
                          <div class="hidden absolute inset-y-0 left-0 w-0.5 bg-primary-500"></div>
                          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox absolute left-4 top-1/2 -mt-2 sm:left-6">
                        </td>
                        <td class="whitespace-nowrap py-4 pr-3 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>
                              <div class="font-bold cursor-pointer">Tristique Senectus</div>
                              <div class="font-normal text-neutral-700">tristique@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular">
                          <div class="flex items-center">
                            <div>

                              <div class="font-normal">Turpis Egestas</div>
                              <div class="font-normal text-neutral-700">Eget Aliquet</div>
                            </div>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-neutral-700">
                          <span class="badge-red badge-small">Badge</span>
                        </td>


                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap px-3 py-4 cb-text-copy-regular text-neutral-700"> Netus</td>
                        <td class="whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6 flex justify-end">
                          <button type="button" class="btn btn-neutral !border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                      
                      <!-- More people... -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      </div>
          <!-- Tables ends -->
          `
      }
    ]
}