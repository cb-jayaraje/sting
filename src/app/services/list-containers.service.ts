
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ListContainerService {

    listContainerDatas = [
        {
            "id": "listContainer_1",
            "title": "Choose an account list with api error state",
            "code": `
            <div>
              
    <div class="min-h-full  flex flex-col justify-center py-3 sm:px-6 lg:px-8 ">
    <div class="sm:mx-auto sm:w-full sm:max-w-md md:w-full md:max-w-xl llg:w-full lg:max-w-xl ">
      
      <h2 class="mt-6 text-center text-2xl font-medium text-gray-900">
        Choose an account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        You have signed-in using acmes@chargebee.com.
        <a class="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500">
          Change
        </a>
      </p>
      
    </div>
    
    
    <!--api error endpoint-->
   
                
    <div class="mt-8  lg:w-full lg:max-w-xl md:w-full md:max-w-lg xl:w-full xl:max-w-xl  sm:mx-auto sm:w-full sm:max-w-md w-full  m-auto space-y-4">

      <div class="alert alert-danger ">
        <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">Something went wrong!</h3>
          <div class="mt-2 text-sm text-red-700">
            <ul role="list" class="list-disc pl-5 space-y-1">
              <li>Description explaining what really happened and maybe some possible fixes that they can try or just the error message.</li>
            </ul>
          </div>
        </div>
        </div>
        </div>

    
    </div>
    <!--api error endpoint-->
    
    
    <div class=" relative mt-8  lg:w-full lg:max-w-xl md:w-full md:max-w-lg xl:w-full xl:max-w-xl  sm:mx-auto sm:w-full sm:max-w-md w-full  m-auto space-y-4 ">
    
    
   
  
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" class="list-group ">
            <li >
       
              <a  class="block hover:bg-gray-50">
                <div class="list-group--card">
                  <div class="list-group--body">
                    <div class="truncate">
                      <div class="flex text-sm">
                        <p class="list-group__title" >
                          acme USA.chargebee.com</p>
                      
                      </div>
                      <div class="mt-2 flex">
                        <div class="list-group__subtext">
                      
                          <p >
                            okta-idp
                            
                          </p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div class="list-group--icon">
                    <!-- Heroicon name: solid/chevron-right -->
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </a>
        
    </li>
    <li >
       
      <a  class="block hover:bg-gray-50">
        <div class="list-group--card">
          <div class="list-group--body">
            <div class="truncate">
              <div class="flex text-sm">
                <p class="list-group__title" >
                  acme USA.chargebee.com</p>
              
              </div>
              <div class="mt-2 flex">
                <div class="list-group__subtext">
              
                  <p >
                    okta-idp
                    
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          <div class="list-group--icon">
            <!-- Heroicon name: solid/chevron-right -->
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </a>

</li>
<li >
       
  <a  class="block hover:bg-gray-50">
    <div class="list-group--card">
      <div class="list-group--body">
        <div class="truncate">
          <div class="flex text-sm">
            <p class="list-group__title" >
              acme USA.chargebee.com</p>
          
          </div>
          <div class="mt-2 flex">
            <div class="list-group__subtext">
          
              <p >
                okta-idp
                
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div class="list-group--icon">
        <!-- Heroicon name: solid/chevron-right -->
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </a>

</li>
      </ul>
    </div>
    </div>
    
            `
        }
    ]

}