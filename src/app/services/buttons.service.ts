import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ButtonService { 

    buttonDatas = [
        {
            id: 'button_1',
            title: 'Outline',
            code: `
            <div class="flex gap-x-3">
          <!--outline button-->
            <div>  
              <button class=" btn btn-outline ">Outline</button>
            </div>
            <!--outline button with icon-->
            <div>
              <butto class="btn btn-outline btn-icon">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Leading Icon
              </button>
            </div>
            <!--outline button with trailing icon-->
            <div>
              <butto class="btn btn-outline btn-icon">
                Trailing Icon
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>
            <!--outline button rounded-->
            <div>
            <button  class=" btn btn-outline rounded-full">Rounded</button>
          </div>
          <!--outline icon circular-->
          <div>
          <button class="btn btn-outline rounded-full p-2">
    
          <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
      
         
        </button>
        </div>
            <!--outline button full width-->
            <div class="w-1/3">
            <button  class=" btn btn-outline w-full">Full width</button>
          </div>
         
      </div>



      <div class="flex gap-x-3 pt-5">
      <!--outline button small-->
        <div>  
          <button class=" btn btn-small btn-outline ">Primary</button>
        </div>
        <!--outline button small with icon-->
        <div>
          <button class="btn btn-small  btn-outline btn-icon">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Leading Icon
          </button>
        </div>
        <!--outline button small with trailing icon-->
        <div>
          <button class="btn btn-small btn-outline btn-icon">
            Trailing Icon
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </button>
        </div>
        <!--outline button rounded-->
        <div>
        <button  class=" btn btn-small btn-outline rounded-full">Rounded</button>
      </div>
     
        <!--outline button small full width-->
        <div class="w-1/3">
          <button  class=" btn btn-small btn-outline w-full">Full width</button>
        </div>
  </div>
            `
        },
        {
          id: 'button_primary',
          title: 'Primary',
          code: `
          <div class="flex gap-x-3">
          <!--primary button-->
            <div>  
              <button  class=" btn btn-primary ">Primary</button>
            </div>
            <!--primary button with icon-->
            <div>
              <button  class="btn btn-primary btn-icon">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Leading Icon
              </button>
            </div>
            <!--primary button with trailing icon-->
            <div>
              <button  class="btn btn-primary btn-icon">
                Trailing Icon
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>
            <!--primary button full width-->
            <div class="w-1/3">
              <button  class=" btn btn-primary l w-full">Full width</button>
            </div>
      </div>



      <div class="flex gap-x-3 pt-5">
      <!--primary button small-->
        <div>  
          <button  class=" btn btn-small btn-primary ">Primary</button>
        </div>
        <!--primary button small with icon-->
        <div>
          <button  class="btn btn-small  btn-primary btn-icon">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Leading Icon
          </button>
        </div>
        <!--primary button small with trailing icon-->
        <div>
          <button class="btn btn-small btn-primary btn-icon">
            Trailing Icon
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </button>
        </div>
        <!--primary button small full width-->
        <div class="w-1/3">
          <button class=" btn btn-small btn-primary l w-full">Full width</button>
        </div>
  </div>
          `
      },
      {
        id: 'button_neutral',
        title: 'Neutral',
        code: `
        <div class="flex gap-x-5">
        <!--primary button-->
          <div>  
            <button  class=" btn btn-neutral ">Neutral</button>
          </div
          <!--neutral button with icon-->
          <div>
            <button  class="btn btn-neutral btn-icon">
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Leading Icon
            </button>
          </div>
          <!--neutral button with trailing icon-->
          <div>
            <button  class="btn btn-neutral btn-icon">
              Trailing Icon
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>
          <!--neutral button full width-->
          <div class="w-1/3">
            <button class=" btn btn-neutral  w-full">Full width</button>
          </div>
    </div>



    <div class="flex gap-x-5 pt-5">
        <!--neutral  button small-->
          <div>  
            <button  class=" btn btn-small btn-neutral ">Neutral</button>
          </div>
          <!--neutral button small with icon-->
          <div>
            <button  class="btn btn-small btn-neutral btn-icon">
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Leading Icon
            </button>
          </div>
          <!--neutral button small with trailing icon-->
          <div>
            <button class="btn btn-small btn-neutral btn-icon">
              Trailing Icon
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>
          <!--neutral button small full width-->
          <div class="w-1/3">
            <button  class=" btn btn-small btn-neutral  w-full">Full width</button>
          </div>
    </div>
        `
    },
    {
      id: 'button_warning',
      title: 'Warning',
      code: `
      <div class="flex gap-x-3">
      <!--primary button-->
        <div>  
          <button  class=" btn btn-warning ">Warning</button>
        </div>
        <!--warning button with icon-->
        <div>
          <button  class="btn btn-warning btn-icon">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Leading Icon
          </button>
        </div>
        <!--warning button with trailing icon-->
        <div>
          <button class="btn btn-warning btn-icon">
            Trailing Icon
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </button>
        </div>
        <!--warning button full width-->
        <div class="w-1/3">
          <button  class=" btn btn-warning  w-full">Full width</button>
        </div>
  </div>





  <div class="flex gap-x-5 pt-5">
      <!--warning button small-->
        <div>  
          <button class=" btn btn-small btn-warning ">Warning</button>
        </div>
        <!--warning button small with icon-->
        <div>
          <button  class="btn btn-small btn-warning btn-icon">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Leading Icon
          </button>
        </div>
        <!--warning button small with trailing icon-->
        <div>
          <button  class="btn btn-small btn-warning btn-icon">
            Trailing Icon
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </button>
        </div>
        <!--warning button small full width-->
        <div class="w-1/3">
          <button class=" btn btn-small  btn-warning  w-full">Full width</button>
        </div>
  </div>
      `
  },
  {
    id: 'button_danger',
    title: 'Danger',
    code: `
    <div class="flex gap-x-3">
    <!--danger button-->
      <div>  
        <button class=" btn btn-danger ">danger</button>
      </div>
      <!--danger button with icon-->
      <div>
        <button  class="btn btn-danger btn-icon">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Leading Icon
        </button>
      </div>
      <!--danger button with trailing icon-->
      <div>
        <button  class="btn btn-danger btn-icon">
          Trailing Icon
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg
        </button>
      </div>
      <!--danger button full width-->
      <div class="w-1/3">
        <button  class=" btn btn-danger  w-full">Full width</button>
      </div>
</div>
<div class="flex gap-x-3 pt-5">
<!--danger button  small-->
  <div>  
    <button  class=" btn btn-small btn-danger ">danger</button>
  </div>
  <!--danger button small with icon-->
  <div>
    <button  class="btn btn-small btn-danger btn-icon">
      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
      Leading Icon
    </button>
  </div>
  <!--danger button small with trailing icon-->
  <div>
    <button class="btn btn-small btn-danger btn-icon">
      Trailing Icon
      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    </button>
  </div>
  <!--danger button small full width-->
  <div class="w-1/3">
    <button  class=" btn btn-small btn-danger  w-full">Full width</button>
  </div>
</div>

    `
},
  {
    id: 'button_success',
    title: 'Success',
    code: `
    <div class="flex gap-x-5">
    <!--success button-->
      <div>  
        <button  class=" btn btn-success ">success</button>
      </div>
      <!--success button with icon-->
      <div>
        <button  class="btn btn-success btn-icon">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Leading Icon
        </button>
      </div>
      <!--success button with trailing icon-->
      <div>
        <button  class="btn btn-success btn-icon">
          Trailing Icon
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </button>
      </div>
      <!--success button full width-->
      <div class="w-1/3">
        <button  class=" btn btn-success  w-full">Full width</button>
      </div>
</div>




<div class="flex gap-x-5 pt-5">
<!--success button small-->
  <div>  
    <button class=" btn btn-small btn-success ">success</button>
  </div>
  <!--success button small with icon-->
  <div>
    <button class="btn btn-small btn-success btn-icon">
      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
      Leading Icon
    </butt
  </div>
  <!--success button small with trailing icon-->
  <div>
    <button class="btn btn-small btn-success btn-icon">
      Trailing Icon
      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    </button>
  </div>
  <!--success button small full width-->
  <div class="w-1/3">
    <button tpe="button" class=" btn btn-small btn-success  w-full">Full width</button>
  </div>
</div>
    `
},
      
     
    ]
}