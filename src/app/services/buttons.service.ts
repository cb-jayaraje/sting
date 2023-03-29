import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ButtonService {
  buttonDatas = [
    {
      id: 'button_primary',
      title: 'Primary',
      code: `
          <div class="flex gap-x-4">

            <!--primary button-->
            <div>
              <button class="btn btn-primary">Button</button>
            </div>

            <!--primary button with icon-->
            <div>
              <button class="btn btn-primary btn-icon">
                <svg class="btn-icon-leading " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Button
              </button>
            </div>

            <!--primary button with trailing icon-->
            <div>
              <button class="btn btn-primary btn-icon">
              Button
                <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>

            <!--outline icon circular-->
            <div>
              <button class="btn-primary btn-icon-only">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <!--primary button full width-->
            <div class="w-1/3">
              <button class="btn btn-primary w-full">Full width Button</button>
            </div>

          </div>

          <div class="flex gap-x-4 pt-5">

            <!--primary button small-->
            <div>
              <button class="btn-small btn-primary">Button</button>
            </div>

            <!--primary button small with icon-->
            <div>
              <button class="btn-small btn-primary btn-icon">
                <svg class="btn-icon-leading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Button
              </button>
            </div>

            <!--primary button small with trailing icon-->
            <div>
              <button class="btn-small btn-primary btn-icon">
              Button
                <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>

            <!--outline small icon circular-->
            <div>
              <button class="btn-sm-icon-only btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <!--primary button small full width-->
            <div class="w-1/3">
              <button class="btn-small btn-primary w-full">Full width Button</button>
            </div>

          </div>

          `,
    },
    {
      id: 'button_secondary',
      title: 'Secondary',
      code: `
        <div class="flex gap-x-4">

          <!--outline button-->
          <div>
            <button class="btn btn-secondary" type="button">Button</button>
          </div>

          <!--outline button with icon-->
          <div>
            <button class="btn btn-secondary btn-icon">
              <svg class="btn-icon-leading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
              </button>
          </div>

          <!--outline button with trailing icon-->
          <div>
            <button class="btn btn-secondary btn-icon">
            Button
              <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              </button>
          </div>

          <!--outline icon circular-->
          <div>
            <button class="btn-icon-only btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!--outline button full width-->
          <div class="w-1/3">
            <button class=" btn btn-secondary w-full">Full width Button</button>
          </div>

        </div>

        <div class="flex gap-x-4 pt-5">

          <!--outline button small-->
          <div>
            <button class=" btn-small btn-secondary ">Button</button>
          </div>

          <!--outline button small with icon-->
          <div>
            <button class=" btn-small  btn-secondary btn-icon">
              <svg class="btn-icon-leading mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
            </button>
          </div>

          <!--outline button small with trailing icon-->
          <div>
            <button class=" btn-small btn-secondary btn-icon">
            Button
              <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>

          <!--outline button with rounded icon-->
          <div>
            <button class="btn-sm-icon-only btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
            </button>
          </div>

          <!--outline button small full width-->
          <div class="w-1/3">
            <button class="btn-small btn-secondary w-full">Full width Button</button>
          </div>

        </div>


        `,
    },
    {
      id: 'button_outline',
      title: 'Outline',
      code: `
        <div class="flex gap-x-4">

          <!--outline button-->
          <div>
            <button class="btn btn-outline" type="button">Button</button>
          </div>

          <!--outline button with icon-->
          <div>
            <button class="btn btn-outline btn-icon">
              <svg class="btn-icon-leading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
              </button>
          </div>

          <!--outline button with trailing icon-->
          <div>
            <button class="btn btn-outline btn-icon">
            Button
              <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              </button>
          </div>

          <!--outline icon circular-->
          <div>
            <button class="btn-icon-only btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!--outline button full width-->
          <div class="w-1/3">
            <button class="btn btn-outline w-full">Full width Button</button>
          </div>

        </div>

        <div class="flex gap-x-4 pt-5">

          <!--outline button small-->
          <div>
            <button class="btn-small btn-outline ">Button</button>
          </div>

          <!--outline button small with icon-->
          <div>
            <button class=" btn-small btn-outline btn-icon">
              <svg class="btn-icon-leading mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
            </button>
          </div>

          <!--outline button small with trailing icon-->
          <div>
            <button class="btn-small btn-outline btn-icon">
            Button
              <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>

          <!--outline button with rounded icon-->
          <div>
            <button class="btn-sm-icon-only btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
            </button>
          </div>

          <!--outline button small full width-->
          <div class="w-1/3">
            <button class="btn-small btn-outline w-full">Full width Button</button>
          </div>

        </div>


        `,
    },
    {
      id: 'button_borderless',
      title: 'Borderless',
      code: `
        <div class="flex gap-x-5">

          <!--borderless button-->
            <div>
            <button class=" btn btn-borderless ">Button</button>
            </div> 
          
            <!--borderless button with icon-->
          <div>
            <button class="btn btn-borderless btn-icon">
              <svg class="btn-icon-leading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
            </button>
          </div>

          <!--borderless button with trailing icon-->
          <div>
            <button class="btn btn-borderless btn-icon">
            Button
              <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>

          <!--borderless icon circular-->
          <div>
            <button class="btn-icon-only btn-borderless">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

        </div>

        <div class="flex gap-x-5 pt-5">

          <!--borderless button small-->
          <div>
            <button class=" btn-small btn-borderless ">Button</button>
          </div>

          <!--borderless button small with icon-->
          <div>
            <button class="btn-small btn-borderless btn-icon">
              <svg class="btn-icon-leading mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
            </button>
          </div>

          <!--borderless button small with trailing icon-->
          <div>
            <button class="btn-small btn-borderless btn-icon">
            Button
              <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>

          <!--borderless icon circular-->
          <div>
            <button class="btn-sm-icon-only btn-borderless">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          
        </div>
        `,
    },
    {
      id: 'button_neutral',
      title: 'Neutral',
      code: `
        <div class="flex gap-x-5">

          <!--primary button-->
          <div>
            <button class=" btn btn-neutral ">Button</button>
          </div>
          
          <!--neutral button with icon-->
          <div>
            <button class="btn btn-neutral btn-icon">
              <svg class="btn-icon-leading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
            </button>
          </div>
   
          <!--neutral button with trailing icon-->
          <div>
            <button class="btn btn-neutral btn-icon">
            Button
              <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>

          <!--outline icon circular-->
          <div>
            <button class="btn-icon-only btn btn-neutral">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!--neutral button full width-->
          <div class="w-1/3">
            <button class=" btn btn-neutral  w-full">Full width Button</button>
          </div>

        </div>

        <div class="flex gap-x-5 pt-5">

          <!--neutral button small-->
          <div>
            <button class=" btn-small btn-neutral ">Button</button>
          </div>

          <!--neutral button small with icon-->
          <div>
            <button class="btn-small btn-neutral btn-icon">
              <svg class="btn-icon-leading mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
            </button>
          </div>

          <!--neutral button small with trailing icon-->
          <div>
            <button class="btn-small btn-neutral btn-icon">
            Button
              <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>

          <!--neutral icon circular-->
          <div>
            <button class="btn-sm-icon-only btn btn-neutral">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!--neutral button small full width-->
          <div class="w-1/3">
            <button class="btn-small btn-neutral  w-full">Full width Button</button>
          </div>

        </div>


        `,
    },
    {
      id: 'button_borderless',
      title: 'Neutral Borderless',
      code: `
        <div class="flex gap-x-5">

          <!--borderless button-->
            <div>
            <button class=" btn btn-neutral-borderless ">Button</button>
            </div> 
          
            <!--borderless button with icon-->
          <div>
            <button class="btn btn-neutral-borderless btn-icon">
              <svg class="btn-icon-leading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
            </button>
          </div>

          <!--borderless button with trailing icon-->
          <div>
            <button class="btn btn-neutral-borderless btn-icon">
            Button
              <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>

          <!--borderless icon circular-->
          <div>
            <button class="btn-icon-only btn btn-neutral-borderless">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

        </div>

        <div class="flex gap-x-5 pt-5">

          <!--borderless button small-->
          <div>
            <button class=" btn-small btn-neutral-borderless ">Button</button>
          </div>

          <!--borderless button small with icon-->
          <div>
            <button class="btn-small btn-neutral-borderless btn-icon">
              <svg class="btn-icon-leading mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
            </button>
          </div>

          <!--borderless button small with trailing icon-->
          <div>
            <button class="btn-small btn-neutral-borderless btn-icon">
            Button
              <svg class="btn-icon-trailing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>

          <!--borderless icon circular-->
          <div>
            <button class="btn-sm-icon-only btn btn-neutral-borderless">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          
        </div>
        `,
    },
    {
      id: 'button_danger',
      title: 'Danger',
      code: `
      <div class="flex gap-x-4">

        <!--danger button-->
        <div>
          <button class=" btn btn-danger ">Button</button>
        </div>

        <!--danger button with icon-->
        <div>
          <button class="btn btn-danger btn-icon">
            <svg class="btn-icon-leading mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
          </svg>
            Delete
          </button>
        </div>
            
        <!--danger icon circular-->
        <div>
          <button class="btn-icon-only btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
          </svg>
          </button>
        </div>

        <!--danger button full width-->
          <div class="w-1/3">
            <button class=" btn btn-danger w-full">Delete</button>
          </div>

        </div>

        <div class="flex gap-x-4 pt-5">

          <!--danger button small-->
          <div>
            <button class=" btn-small btn-danger ">Delete</button>
          </div>

          <!--danger button small with icon-->
          <div>
            <button class="btn-small btn-danger btn-icon">
              <svg class="btn-icon-leading" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
            </svg>
              Delete
            </button>
          </div>

          <!--danger icon circular-->
          <div>
            <button class="btn-sm-icon-only btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
          </svg>
          
            </button>
          </div>
          
          <!--danger button small full width-->
          <div class="w-1/3">
            <button class=" btn btn-small btn-danger w-full">Delete</button>
          </div>

        </div>
  

      `,
    },
    {
      id: 'Button_link',
      title: 'Link',
      code: ` 
      <div class="flex gap-x-4">

        <!-- Link Button starts -->
        <p class="cb-text-copy-regular">Lorem ipsum <a href="#" class="btn-link">Link</a> consectetur adipiscing.</p>
        <!-- Link Button ends -->

      </div>

      <div class="flex gap-x-4 pt-5">

        <!-- Link Button starts -->
        <p class="cb-text-copy-regular">Lorem ipsum <a href="#" class="btn-link btn-icon">Link with icon <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="btn-icon-trailing">
        <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
        </svg></a> consectetur adipiscing.</p>
        <!-- Link Button ends -->

      </div>

    
      `,
    },
  ];
}
