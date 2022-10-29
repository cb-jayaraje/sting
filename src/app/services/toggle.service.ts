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
            title: "With left label and description",
            code: 
                `
              <div class="form-control toggle-group">
                <div>
                  <div>
                    <span>Available to hire</span>
                    <span>Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</span>
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
              `
        },
        {
            id: "toggle_3",
            title: "With right label and description",
            code: 
                `
                <div class="form-control toggle-group reverse">
                <div>
                  <div>
                    <span>Available to hire</span>
                    <span>Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</span>
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
                `
        },
        {
          id: "toggle_4",
          title: "With right label",
          code: 
              `
              <div class="form-control toggle-group inline reverse">
                <div>
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
              </div>
              `
      },


    ];

}