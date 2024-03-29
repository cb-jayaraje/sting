import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TableService {
  tableDatas = [
    {
      id: 'table_1',
      title: 'Basic table',
      code: `

            <!-- Tables starts -->
            <div class="table-container">
            <table class="table">
                <thead class="table-head">
                    <tr class="table-head-row">
                        <th scope="col" class="table-head-data">
                            <a  class="group inline-flex">
                                Name
                            </a>
                        </th>
                        <th scope="col" class="table-head-data">
                            <div class="group inline-flex justify-between items-center w-full">

                                <a  class="group inline-flex">
                                    Email
                                    <!-- Active: "bg-gray-200 text-gray-900 group-hover:bg-gray-300", Not Active: "invisible text-gray-400 group-hover:visible group-focus:visible" -->
                                </a>

                            </div>
                        </th>
                        <th scope="col" class="table-head-data">
                            <div class="group inline-flex justify-between items-center w-full">

                                <a  class="group inline-flex">
                                    Date & Time
                                </a>

                            </div>
                        </th>
                        <th scope="col" class="table-head-data">
                            <div class="group inline-flex justify-between items-center w-full">

                                <a  class="group inline-flex">
                                    Phone Number
                                </a>

                            </div>
                        </th>
                        <th scope="col" class="table-head-data">
                            <div class="group inline-flex flex-row justify-between items-center w-full">

                                <a  class="group inline-flex">
                                    Amount
                                </a>

                            </div>
                        </th>

                    </tr>
                </thead>
                <tbody class="table-body">

                    <!-- item selected = bg-info-50 , hover = bg-neutral-50 , hover-selected = bg-info-50 -->

                    <tr class="table-body-row">
                        <td class="table-body-data">
                            <p class="cb-text-h6">
                                Alfred Jones
                            </p>
                        </td>
                        <td class="table-body-data">
                            <p class="cb-text-copy-regular font-medium">
                                abc@example.com
                            </p>
                        </td>
                        <td class="table-body-data">
                            <p class="cb-text-copy-regular font-medium">
                                02 Jan 2022 05:45 PM
                            </p>
                        </td>
                        <td class="table-body-data">
                            <p class="cb-text-copy-regular font-medium flex justify-start">
                                +1(555)555-1234
                            </p>
                        </td>
                        <td class="table-body-data">
                            <p class="cb-text-copy-regular font-medium">
                                <span class="w-full flex justify-end  font-['roboto_mono']">
                                    $45.02482424 USD
                                </span>
                            </p>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
     <!-- Tables ends -->
            `,
    },
    {
      id: 'table_2',
      title: 'Multi-line content table',
      code: `

      <!-- Tables starts -->
      <div class="table-container">
          <table class="table">
              <thead class="table-head">
                  <tr class="table-head-row divide-x">
                      <th scope="col" class="table-head-data">

                          <a class="group inline-flex pointer">
                              Name
                          </a>
                      </th>
                      <th scope="col" class="table-head-data">
                          <div class="group inline-flex justify-between items-center w-full">

                              <a class="group inline-flex items-center">
                                  Email
                                  <svg class="ml-1 h-3 w-3 flex-none rounded text-gray-400 " viewBox="0 0 12 12"
                                      fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M8.82426 7.87642C9.05858 8.11073 9.05858 8.49063 8.82426 8.72495L6.42426 11.1249C6.18995 11.3593 5.81005 11.3593 5.57574 11.1249L3.17574 8.72495C2.94142 8.49063 2.94142 8.11073 3.17574 7.87642C3.41005 7.64211 3.78995 7.64211 4.02426 7.87642L5.4 9.25216L5.4 2.30068C5.4 1.96931 5.66863 1.70068 6 1.70068C6.33137 1.70068 6.6 1.96931 6.6 2.30068L6.6 9.25216L7.97574 7.87642C8.21005 7.64211 8.58995 7.64211 8.82426 7.87642Z"
                                          fill="#3F4E54" />
                                  </svg>
                              </a>

                          </div>
                      </th>
                      <th scope="col" class="table-head-data">
                          <div class="group inline-flex justify-between items-center w-full">

                              <a class="group inline-flex">
                                  Date & Time
                              </a>

                          </div>
                      </th>
                      <th scope="col" class="table-head-data">
                          <div class="group inline-flex justify-between items-center w-full">

                              <a class="group inline-flex">
                                  Phone Number
                              </a>

                          </div>
                      </th>
                      <th scope="col" class="table-head-data">
                          <div class="group inline-flex flex-row justify-between items-center w-full">

                              <a class="group inline-flex">
                                  Amount
                              </a>

                          </div>
                      </th>
                      <th scope="col" class="table-head-data-action">
                          <div class=" text-right w-full flex justify-center items-center">
                              <button class="btn-small btn-borderless">

                                  <svg class="w-4 h-4 opacity-60 hover:opacity-100 " viewBox="0 0 17 16"
                                      fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7.38309 2.87821C7.66735 1.70726 9.33265 1.70726 9.61692 2.87821C9.80055 3.63462 10.6672 3.99358 11.3319 3.58857C12.3609 2.96159 13.5384 4.13914 12.9114 5.16812C12.5064 5.83284 12.8654 6.69945 13.6218 6.88308C14.7927 7.16735 14.7927 8.83265 13.6218 9.11692C12.8654 9.30055 12.5064 10.1672 12.9114 10.8319C13.5384 11.8609 12.3609 13.0384 11.3319 12.4114C10.6672 12.0064 9.80055 12.3654 9.61692 13.1218C9.33265 14.2927 7.66735 14.2927 7.38309 13.1218C7.19945 12.3654 6.33284 12.0064 5.66812 12.4114C4.63914 13.0384 3.46159 11.8609 4.08857 10.8319C4.49358 10.1672 4.13462 9.30055 3.37821 9.11692C2.20726 8.83265 2.20726 7.16735 3.37821 6.88308C4.13462 6.69945 4.49358 5.83284 4.08857 5.16812C3.46159 4.13914 4.63914 2.96159 5.66812 3.58857C6.33284 3.99358 7.19945 3.63462 7.38309 2.87821Z"
                                          stroke="currentColor" stroke-width="1.33333" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                      <path
                                          d="M10.5 8C10.5 9.10457 9.60457 10 8.5 10C7.39543 10 6.5 9.10457 6.5 8C6.5 6.89543 7.39543 6 8.5 6C9.60457 6 10.5 6.89543 10.5 8Z"
                                          stroke="currentColor" stroke-width="1.33333" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                  </svg>

                              </button>
                          </div>

                      </th>
                  </tr>
              </thead>
              <tbody class="table-body">

                  <!-- item selected = bg-info-50 bg-opacity-60 !border-neutral-300 border-b , hover = bg-neutral-50 , hover-selected = bg-info-50 -->

                  <tr class="table-body-row">
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular font-semibold">
                              Alfred Jones
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              abc@example.com
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              02 Jan 2022 05:45 PM
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              +1(555)555-1234
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              <span class="w-full flex justify-end font-['roboto_mono']">
                                  $45.02482424 USD
                              </span>
                          </p>
                      </td>
                      <td class="table-body-data-action">
                          <div class="w-full flex justify-center">

                              <button type="button" class="btn-small btn-borderless">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                      stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                      <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
                                      </path>
                                  </svg>
                              </button>

                              <div class="hidden dropdown right-16 mt-6 !w-56 dropdown-divider" role="menu">
                                  <div role="none">
                                      <a role="menuitem" tabindex="-1" id="menu-item-0">View details</a>
                                      <a role="menuitem" tabindex="-1" id="menu-item-1">Edit</a>
                                      <a class=" !text-red-700 " role="menuitem" tabindex="-1"
                                          id="menu-item-1">Delete</a>
                                  </div>

                                  <div role="none">
                                      <a class=" opacity-60 pointer-events-none " role="menuitem" tabindex="-1"
                                          id="menu-item-0">Go to</a>
                                      <a role="menuitem" tabindex="-1" id="menu-item-1">Customer</a>
                                      <a role="menuitem" tabindex="-1" id="menu-item-1">Subscriptions</a>
                                  </div>

                              </div>
                          </div>

                      </td>
                  </tr>

              </tbody>
          </table>
      </div>
          `,
    },
    {
      id: 'table_2',
      title: 'Basic Table with Actions',
      code: ` 

        <!-- Tables starts -->
        <div class="w-full">

            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="relative overflow-hidden ring-1 ring-neutral-100 md:rounded-lg">
                            <table class="min-w-full table-fixed divide-y divide-neutral-200">
                                <thead class="bg-neutral-100">
                                    <tr>

                                        <th scope="col" class="min-w-[12rem] table-th border pl-4">
                                            Consectetur</th>
                                        <th scope="col" class="table-th">
                                            Consectetur</th>
                                        <th scope="col" class="table-th">
                                            Consectetur</th>
                                        <th scope="col" class="table-th">
                                            Consectetur</th>

                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-neutral-200 bg-white">
                                    <!-- Selected: "bg-neutral-100" -->
                                    <tr>

                                        <!-- Selected: "text-indigo-600", Not Selected: "text-neutral-900" -->
                                        <td
                                            class="whitespace-nowrap pl-4 py-4 cb-text-copy-regular font-semibold cursor-pointer">
                                            Tristique Senectus</td>
                                        <td
                                            class="whitespace-nowrap pr-4 py-4 cb-text-copy-regular text-neutral-700">
                                            Turpis Egestas</td>
                                        <td
                                            class="whitespace-nowrap pr-4 py-4 cb-text-copy-regular text-neutral-700">
                                            tristique@example.com</td>
                                        <td
                                            class="whitespace-nowrap pr-4 py-4 cb-text-copy-regular text-neutral-700">
                                            Netus</td>

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

        `,
    },
    {
      id: 'table_3',
      title: 'Table with multi select',
      code: ` 

      <!-- Tables starts -->
      <div class="table-container">


          <!-- Table selections / action controls. hidden if nothing is selected -->
          <div class="controls-container-varaint-1">

              <div class="controls-container flex items-center gap-4">

                  <fieldset>
                      <div class="checkbox-list">
                          <div>
                              <input id="ckb01" name="comments" checked indeterminate="true" type="checkbox"
                                  class="checkbox">
                          </div>
                      </div>
                  </fieldset>

                  <p class=" cb-text-copy-regular text-neutral-900 ">4 customers selected</p>

              </div>

              <div class="actions-container flex gap-4">
                  <div>
                      <button class=" btn-small btn-borderless ">Secondary Action</button>
                  </div>

                  <div>
                      <button class=" btn-small btn-neutral ">Secondary Action</button>
                  </div>

                  <div>
                      <button class=" btn-small btn-primary ">Primary Action</button>
                  </div>
              </div>

          </div>

          <table class="table ">

              <!-- Table header controls. hidden if items are selected -->

              <thead class="table-head !h-0 overflow-hidden">
                  <tr class="table-head-row overflow-hidden !h-0 !p-0">
                      <th scope="col" class="table-head-data-checkbox overflow-hidden !h-0 !p-0">
                          <fieldset>
                              <div class="checkbox-list mx-auto flex justify-center hidden">
                                  <div>
                                      <input id="ckb01" name="comments" type="checkbox" class="checkbox">
                                  </div>
                              </div>
                          </fieldset>
                      </th>
                      <th scope="col" class="table-head-data overflow-hidden !h-0 !p-0">
                          <div class="hidden">
                              Name
                          </div>
                      </th>
                      <th scope="col" class="table-head-data overflow-hidden !h-0 !p-0">
                          <div class="hidden">
                              Email
                          </div>
                      </th>
                      <th scope="col" class="table-head-data overflow-hidden !h-0 !p-0">
                          <div class="hidden">
                              Phone Number
                          </div>
                      </th>
                      <th scope="col" class="table-head-data overflow-hidden !h-0 !p-0">
                          <div class="hidden">
                              Phone Number
                          </div>
                      </th>
                      <th scope="col" class="table-head-data overflow-hidden !h-0 !p-0">
                          <div class="hidden">
                              Amount
                          </div>
                      </th>
                      <th scope="col" class="table-head-data-action overflow-hidden !h-0 !p-0">
                          <div class=" text-right w-full flex justify-center hidden">
                              <button class="btn-small btn-borderless">
                                  <svg class="w-4 h-4 opacity-60 hover:opacity-100 " viewBox="0 0 17 16"
                                      fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7.38309 2.87821C7.66735 1.70726 9.33265 1.70726 9.61692 2.87821C9.80055 3.63462 10.6672 3.99358 11.3319 3.58857C12.3609 2.96159 13.5384 4.13914 12.9114 5.16812C12.5064 5.83284 12.8654 6.69945 13.6218 6.88308C14.7927 7.16735 14.7927 8.83265 13.6218 9.11692C12.8654 9.30055 12.5064 10.1672 12.9114 10.8319C13.5384 11.8609 12.3609 13.0384 11.3319 12.4114C10.6672 12.0064 9.80055 12.3654 9.61692 13.1218C9.33265 14.2927 7.66735 14.2927 7.38309 13.1218C7.19945 12.3654 6.33284 12.0064 5.66812 12.4114C4.63914 13.0384 3.46159 11.8609 4.08857 10.8319C4.49358 10.1672 4.13462 9.30055 3.37821 9.11692C2.20726 8.83265 2.20726 7.16735 3.37821 6.88308C4.13462 6.69945 4.49358 5.83284 4.08857 5.16812C3.46159 4.13914 4.63914 2.96159 5.66812 3.58857C6.33284 3.99358 7.19945 3.63462 7.38309 2.87821Z"
                                          stroke="currentColor" stroke-width="1.33333" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                      <path
                                          d="M10.5 8C10.5 9.10457 9.60457 10 8.5 10C7.39543 10 6.5 9.10457 6.5 8C6.5 6.89543 7.39543 6 8.5 6C9.60457 6 10.5 6.89543 10.5 8Z"
                                          stroke="currentColor" stroke-width="1.33333" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                  </svg>
                              </button>
                          </div>

                      </th>
                  </tr>
              </thead>
              <tbody class="table-body">

                  <!-- item selected = bg-info-50 bg-opacity-60 !border-neutral-300 border-b , hover = bg-neutral-50 , hover-selected = bg-info-50 -->
                  <tr class="table-body-row table-row-selected">

                      <!-- Row item-level checkbox input -->
                      <td class="table-body-data-checkbox">

                          <div class="form-control checkbox-group">

                              <fieldset>
                                  <div class="checkbox-list">
                                      <div>
                                          <input id="ckb01" name="comments" checked type="checkbox"
                                              class="checkbox">
                                      </div>
                                  </div>
                              </fieldset>

                          </div>

                      </td>

                      <td class="table-body-data">
                          <p class="cb-text-copy-regular font-semibold">
                              Alfred Jones
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              abc@example.com
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              02 Jan 2022 05:45 PM
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              +1(555)555-1234
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              <span class="w-full flex justify-end font-['roboto_mono'] ">
                                  $45.02482424 USD
                              </span>
                          </p>
                      </td>

                      <td class="table-body-data-action">
                          <div class="w-full flex justify-center p-2">

                              <button type="button" class="btn-small btn-borderless">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                      stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                      <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
                                      </path>
                                  </svg>
                              </button>

                              <div class="hidden dropdown right-16 mt-6 !w-56 dropdown-divider" role="menu">
                                  <div role="none">
                                      <a  role="menuitem" tabindex="-1" id="menu-item-0">View details</a>
                                      <a  role="menuitem" tabindex="-1" id="menu-item-1">Edit</a>
                                      <a  class=" !text-red-700 " role="menuitem" tabindex="-1"
                                          id="menu-item-1">Delete</a>
                                  </div>

                                  <div role="none">
                                      <a  class=" opacity-60 pointer-events-none " role="menuitem"
                                          tabindex="-1" id="menu-item-0">Go to</a>
                                      <a  role="menuitem" tabindex="-1" id="menu-item-1">Customer</a>
                                      <a  role="menuitem" tabindex="-1" id="menu-item-1">Subscriptions</a>
                                  </div>

                              </div>
                          </div>

                      </td>
                  </tr>

              </tbody>
          </table>

      </div>

        `,
    },
    {
      id: 'table_4',
      title: 'Table with multi select varient 2',
      code: ` 

      <!-- Tables starts -->
      <div class="table-container">

          <div class="controls-container-varaint-2">

              <div class="controls-container flex items-center gap-4">

                  <p class=" cb-text-copy-regular text-neutral-900 ">4 customers selected</p>

              </div>

              <div class="actions-container flex gap-4">
                  <div>
                      <button class=" btn-small btn-borderless ">Secondary Action</button>
                  </div>

                  <div>
                      <button class=" btn-small btn-neutral ">Secondary Action</button>
                  </div>

                  <div>
                      <button class=" btn-small btn-primary ">Primary Action</button>
                  </div>
              </div>

          </div>

          <table class="table">

              <thead class="table-head">
                  <tr class="table-head-row">
                      <th scope="col" class="table-head-data-checkbox">
                          <fieldset>
                              <div class="checkbox-list mx-auto flex justify-center">
                                  <div>
                                      <input id="ckb01" name="comments" type="checkbox" class="checkbox">
                                  </div>
                              </div>
                          </fieldset>
                      </th>
                      <th scope="col" class="table-head-data">
                          <a  class="group inline-flex">
                              Name
                              <!-- Active: "bg-gray-200 text-gray-900 group-hover:bg-gray-300", Not Active: "invisible text-gray-400 group-hover:visible group-focus:visible" -->

                          </a>
                      </th>
                      <th scope="col" class="table-head-data">
                          <div class="group inline-flex justify-between items-center w-full">

                              <a  class="group inline-flex items-center">
                                  Email
                                  <svg class="ml-1 h-3 w-3 flex-none rounded text-gray-400 " viewBox="0 0 12 12"
                                      fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M8.82426 7.87642C9.05858 8.11073 9.05858 8.49063 8.82426 8.72495L6.42426 11.1249C6.18995 11.3593 5.81005 11.3593 5.57574 11.1249L3.17574 8.72495C2.94142 8.49063 2.94142 8.11073 3.17574 7.87642C3.41005 7.64211 3.78995 7.64211 4.02426 7.87642L5.4 9.25216L5.4 2.30068C5.4 1.96931 5.66863 1.70068 6 1.70068C6.33137 1.70068 6.6 1.96931 6.6 2.30068L6.6 9.25216L7.97574 7.87642C8.21005 7.64211 8.58995 7.64211 8.82426 7.87642Z"
                                          fill="#3F4E54" />
                                  </svg>
                              </a>

                          </div>
                      </th>
                      <th scope="col" class="table-head-data">
                          <div class="group inline-flex justify-between items-center w-full">

                              <a  class="group inline-flex">
                                  Date & Time
                              </a>

                          </div>
                      </th>
                      <th scope="col" class="table-head-data">
                          <div class="group inline-flex justify-between items-center w-full">

                              <a  class="group inline-flex">
                                  Phone Number
                              </a>




                          </div>
                      </th>
                      <th scope="col" class="table-head-data">
                          <div class="group inline-flex flex-row justify-between items-center w-full">

                              <a  class="group inline-flex">
                                  Amount
                              </a>

                          </div>
                      </th>
                      <th scope="col" class="table-head-data-action">
                          <div class=" text-right w-full flex justify-center">

                              <button class="btn-small btn-borderless">
                                  <svg class="w-4 h-4 opacity-60 hover:opacity-100 " viewBox="0 0 17 16"
                                      fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M7.38309 2.87821C7.66735 1.70726 9.33265 1.70726 9.61692 2.87821C9.80055 3.63462 10.6672 3.99358 11.3319 3.58857C12.3609 2.96159 13.5384 4.13914 12.9114 5.16812C12.5064 5.83284 12.8654 6.69945 13.6218 6.88308C14.7927 7.16735 14.7927 8.83265 13.6218 9.11692C12.8654 9.30055 12.5064 10.1672 12.9114 10.8319C13.5384 11.8609 12.3609 13.0384 11.3319 12.4114C10.6672 12.0064 9.80055 12.3654 9.61692 13.1218C9.33265 14.2927 7.66735 14.2927 7.38309 13.1218C7.19945 12.3654 6.33284 12.0064 5.66812 12.4114C4.63914 13.0384 3.46159 11.8609 4.08857 10.8319C4.49358 10.1672 4.13462 9.30055 3.37821 9.11692C2.20726 8.83265 2.20726 7.16735 3.37821 6.88308C4.13462 6.69945 4.49358 5.83284 4.08857 5.16812C3.46159 4.13914 4.63914 2.96159 5.66812 3.58857C6.33284 3.99358 7.19945 3.63462 7.38309 2.87821Z"
                                          stroke="currentColor" stroke-width="1.33333" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                      <path
                                          d="M10.5 8C10.5 9.10457 9.60457 10 8.5 10C7.39543 10 6.5 9.10457 6.5 8C6.5 6.89543 7.39543 6 8.5 6C9.60457 6 10.5 6.89543 10.5 8Z"
                                          stroke="currentColor" stroke-width="1.33333" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                  </svg>
                              </button>

                          </div>

                      </th>
                  </tr>
              </thead>
              <tbody class="table-body">

                  <!-- item selected = bg-info-50 bg-opacity-60 !border-neutral-300 border-b , hover = bg-neutral-50 , hover-selected = bg-info-50 -->
                  <tr class="table-body-row table-row-selected">

                      <!-- Row item-level checkbox input -->
                      <td class="table-body-data-checkbox">

                          <div class="form-control checkbox-group">

                              <fieldset>
                                  <div class="checkbox-list mx-auto flex justify-center">
                                      <div>
                                          <input id="ckb01" name="comments" checked type="checkbox"
                                              class="checkbox">
                                      </div>
                                  </div>
                              </fieldset>

                          </div>

                      </td>

                      <td class="table-body-data">
                          <p class="cb-text-copy-regular font-semibold">
                              Alfred Jones
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              abc@example.com
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              02 Jan 2022 05:45 PM
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              +1(555)555-1234
                          </p>
                      </td>
                      <td class="table-body-data">
                          <p class="cb-text-copy-regular">
                              <span class="w-full flex justify-end font-['roboto_mono']">
                                  $45.02482424 USD
                              </span>
                          </p>
                      </td>

                      <td class="table-body-data-action whitespace-nowrap ">
                          <div class="w-full flex justify-center">

                              <button type="button" class=" btn-small btn-borderless">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                      stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                      <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
                                      </path>
                                  </svg>
                              </button>


                              <div class="hidden dropdown right-16 mt-6 !w-56 dropdown-divider" role="menu">
                                  <div role="none">
                                      <a  role="menuitem" tabindex="-1" id="menu-item-0">View details</a>
                                      <a  role="menuitem" tabindex="-1" id="menu-item-1">Edit</a>
                                      <a  class=" !text-red-700 " role="menuitem" tabindex="-1"
                                          id="menu-item-1">Delete</a>
                                  </div>

                                  <div role="none">
                                      <a  class=" opacity-60 pointer-events-none " role="menuitem"
                                          tabindex="-1" id="menu-item-0">Go to</a>
                                      <a  role="menuitem" tabindex="-1" id="menu-item-1">Customer</a>
                                      <a  role="menuitem" tabindex="-1" id="menu-item-1">Subscriptions</a>
                                  </div>

                              </div>
                          </div>

                      </td>
                  </tr>

              </tbody>
          </table>

      </div>

        `,
    },
  ];
}
