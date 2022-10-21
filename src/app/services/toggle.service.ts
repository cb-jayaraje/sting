import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class ToggleService {

    toggleDatas = [
        {
            id: "toggle_1",
            title: "Simple toggle",
            code: 
                `
                <!--Enabled-->
                <button type="button" class="toggle-btn" role="switch" aria-checked="false">
          <span class="sr-only">Use setting</span>
          <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
          <span aria-hidden="true" class="toggle-btn-default enabled"></span>
          <span aria-hidden="true" class="toggle-switch enabled"></span>
        </button>

        <!--Disabled-->
        <button type="button" class="toggle-btn" role="switch" aria-checked="false">
          <span class="sr-only">Use setting</span>
          <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
          <span aria-hidden="true" class="toggle-btn-default not-enabled"></span>
          <span aria-hidden="true" class="toggle-switch not-enabled"></span>
        </button>
                `
        },
    
      
        {
            id: "toggle_4",
            title: "With left label and description",
            code: 
                `
                <div class="flex items-center justify-between form-control">
                <span class="flex flex-grow flex-col">
                <span class="label" id="availability-label">Available to hire</span>
                <span class="cb-text-copy-small" id="availability-description">Nulla amet tempus sit
                  accumsan. Aliquet
                  turpis sed sit lacinia.</span>
              </span>
       

          <!--enabled-->
            <button type="button" class="toggle-btn " role="switch" aria-checked="false">
              <span class="sr-only">Use setting</span>
              <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
              <span aria-hidden="true" class="toggle-btn-default enabled"></span>
              <span aria-hidden="true" class="toggle-switch enabled"></span>
            </button>
         

            <!--Disabled-->

            <button type="button" class="toggle-btn" role="switch" aria-checked="false">
              <span class="sr-only">Use setting</span>
              <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
              <span aria-hidden="true" class="toggle-btn-default not-enabled"></span>
              <span aria-hidden="true" class="toggle-switch not-enabled"></span>
            </button>

         





        </div>
      </div>
                `
        },
        {
            id: "toggle_5",
            title: "With right label",
            code: 
                `
                <div class="flex items-center form-control">
            
                    <!--enabled-->
                    <button type="button" class="toggle-btn " role="switch" aria-checked="false">
                      <span class="sr-only">Use setting</span>
                      <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
                      <span aria-hidden="true" class="toggle-btn-default enabled"></span>
                      <span aria-hidden="true" class="toggle-switch enabled"></span>
                    </button>
                 
                    <!--disabled-->
                    <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                      <span class="sr-only">Use setting</span>
                      <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
                      <span aria-hidden="true" class="toggle-btn-default not-enabled"></span>
                      <span aria-hidden="true" class="toggle-switch not-enabled"></span>
                    </button>
        
                 
        
                    <span class="ml-3" id="annual-billing-label">
                    <span class="label">Annual billing</span>
                    <span class="cb-text-copy-small"> (Save 10%)</span>
                  </span>
              </div>
                `
        },
    ];

}