import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class ToggleService {

    toggleDatas = [
        {
            id: "toggle_1",
            title: "Simple toggle",
            code: 
                `
                <div class="w-full max-w-xl">
                  <div class="flex gap-3 toggle" appToggle>
                    <div class="isActive">
                      <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true" class="toggle-shape"></span>
                        <span aria-hidden="true" class="toggle-btn-default enabled"></span>
                        <span aria-hidden="true" class="toggle-switch enabled"></span>
                      </button>
                    </div>
                    <div class="inActive">
                      <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true" class="toggle-shape"></span>
                        <span aria-hidden="true" class="toggle-btn-default not-enabled"></span>
                        <span aria-hidden="true" class="toggle-switch not-enabled"></span>
                      </button>
                    </div>
                  </div>
                </div>
                `
        },
    
      
        {
            id: "toggle_2",
            title: "Default",
            code: 
                `
                <div class="form-control">

                <div class="toggle-group">
          
                  <div class="toggle-item">
                    <div>
                      <span class="!font-medium">Annual billing</span>
                    </div>
                    <div class="toggle" appToggle>
                      <div class="isActive">
                        <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                          <span class="sr-only">Use setting</span>
                          <span aria-hidden="true" class="toggle-shape"></span>
                          <span aria-hidden="true" class="toggle-btn-default enabled"></span>
                          <span aria-hidden="true" class="toggle-switch enabled"></span>
                        </button>
                      </div>
                      <div class="inActive">
                        <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                          <span class="sr-only">Use setting</span>
                          <span aria-hidden="true" class="toggle-shape"></span>
                          <span aria-hidden="true" class="toggle-btn-default not-enabled"></span>
                          <span aria-hidden="true" class="toggle-switch not-enabled"></span>
                        </button>
                      </div>
                    </div>
                  </div>
          
                  <!-- item -->
          
                </div>
          
              </div>
                `
        },
        {
            id: "toggle_3",
            title: "List",
            code: 
                `
                <div class="form-control">

                <div class="toggle-group">
          
                  <div class="toggle-item">
                    <div>
                      <span>Annual billing</span>
                      <span>(Save 10%)</span>
                    </div>
                    <div class="toggle" appToggle>
                      <div class="isActive">
                        <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                          <span class="sr-only">Use setting</span>
                          <span aria-hidden="true" class="toggle-shape"></span>
                          <span aria-hidden="true" class="toggle-btn-default enabled"></span>
                          <span aria-hidden="true" class="toggle-switch enabled"></span>
                        </button>
                      </div>
                      <div class="inActive">
                        <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                          <span class="sr-only">Use setting</span>
                          <span aria-hidden="true" class="toggle-shape"></span>
                          <span aria-hidden="true" class="toggle-btn-default not-enabled"></span>
                          <span aria-hidden="true" class="toggle-switch not-enabled"></span>
                        </button>
                      </div>
                    </div>
                  </div>
          
                  <div class="toggle-item">
                    <div>
                      <span>Monthly billing</span>
                      <span>(Save 5%)</span>
                    </div>
                    <div class="toggle" appToggle>
                      <div class="isActive">
                        <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                          <span class="sr-only">Use setting</span>
                          <span aria-hidden="true" class="toggle-shape"></span>
                          <span aria-hidden="true" class="toggle-btn-default enabled"></span>
                          <span aria-hidden="true" class="toggle-switch enabled"></span>
                        </button>
                      </div>
                      <div class="inActive">
                        <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                          <span class="sr-only">Use setting</span>
                          <span aria-hidden="true" class="toggle-shape"></span>
                          <span aria-hidden="true" class="toggle-btn-default not-enabled"></span>
                          <span aria-hidden="true" class="toggle-switch not-enabled"></span>
                        </button>
                      </div>
                    </div>
                  </div>
          
                  <!-- item -->
          
                </div>
          
              </div>
                `
        },
        {
          id: "toggle_4",
          title: "With label inline",
          code: 
              `
              <div class="form-control">

              <div class="toggle-group inline">
        
                <div class="toggle-item">
                  <div>
                    <span>Annual billing</span>
                    <span>(Save 10%)</span>
                  </div>
                  <div class="toggle" appToggle>
                    <div class="isActive">
                      <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true" class="toggle-shape"></span>
                        <span aria-hidden="true" class="toggle-btn-default enabled"></span>
                        <span aria-hidden="true" class="toggle-switch enabled"></span>
                      </button>
                    </div>
                    <div class="inActive">
                      <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true" class="toggle-shape"></span>
                        <span aria-hidden="true" class="toggle-btn-default not-enabled"></span>
                        <span aria-hidden="true" class="toggle-switch not-enabled"></span>
                      </button>
                    </div>
                  </div>
                </div>
        
                <div class="toggle-item">
                  <div>
                    <span>Monthly billing</span>
                    <span>(Save 5%)</span>
                  </div>
                  <div class="toggle" appToggle>
                    <div class="isActive">
                      <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true" class="toggle-shape"></span>
                        <span aria-hidden="true" class="toggle-btn-default enabled"></span>
                        <span aria-hidden="true" class="toggle-switch enabled"></span>
                      </button>
                    </div>
                    <div class="inActive">
                      <button type="button" class="toggle-btn" role="switch" aria-checked="false">
                        <span class="sr-only">Use setting</span>
                        <span aria-hidden="true" class="toggle-shape"></span>
                        <span aria-hidden="true" class="toggle-btn-default not-enabled"></span>
                        <span aria-hidden="true" class="toggle-switch not-enabled"></span>
                      </button>
                    </div>
                  </div>
                </div>
        
              </div>
        
            </div>
              `
      },
    ];

}