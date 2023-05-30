import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ButtonService {
  buttonDatas = [
    {
      id: 'button_primary',
      title: 'Primary',
      code: `
          <div class="flex gap-x-4">

          <!--primary button Regular-->
          <div>
            <button class="btn btn-primary">Button</button>
          </div>

          <!--primary button Regular with icon-->
          <div>
          <button class="btn btn-primary btn-icon-leading">
              <envelope-icon class="btn-icon"> </envelope-icon>
              Button
            </button>
          </div>

          <!--primary button Regular with trailing icon-->
          <div>
            <button class="btn btn-primary btn-icon-trailing">
              <envelope-icon class="btn-icon"> </envelope-icon>
              Button
            </button>
          </div>

          <!--outline Regular icon circular-->
          <div>
            <button class="btn-icon-only btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!--primary button Regular full width-->
          <div class="w-1/3">
            <button class="btn btn-primary w-full">Full width Button</button>
          </div>

         
          </div>

          <div class="flex gap-x-4 pt-5">

          <!--primary large button-->
          <div>
            <button class="btn-lg btn-primary">Button</button>
          </div>

          <!--primary large button with icon-->
          <div>
            <button class="btn-lg btn-primary btn-icon-leading">
              <envelope-icon class="btn-icon"> </envelope-icon>
              Button
            </button>
          </div>

          <!--primary large button with trailing icon-->
          <div>
            <button class="btn-lg btn-primary btn-icon-trailing">
              <envelope-icon class="btn-icon"> </envelope-icon>Button
            </button>
          </div>

          <!--outline large icon circular-->
          <div>
            <button class="btn-primary btn-lg-icon-only">
              <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!--primary large button full width-->
          <div class="w-1/3">
            <button class="btn-lg btn-primary w-full">Full width Button</button>
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
         <div>
           <button class="btn btn-secondary btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
         </div>

       </div>

       <!--outline button with trailing icon-->
       <div>
          <button class="btn btn-secondary btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
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

          <!--outline button large-->
          <div>
            <button class=" btn-lg btn-secondary ">Button</button>
          </div>

          <!--outline button large with icon-->
          <div>
           <button class="btn-lg btn-secondary btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--outline button large with trailing icon-->
          <div>
           <button class="btn-lg btn-secondary btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--outline button with rounded icon-->
          <div>
            <button class="btn-lg-icon-only btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
            </button>
          </div>

          <!--outline button large full width-->
          <div class="w-1/3">
            <button class="btn-lg btn-secondary w-full">Full width Button</button>
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
           <button class="btn btn-outline btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--outline button with trailing icon-->
          <div>
           <button class="btn btn-outline btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
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

          <!--outline button lg-->
          <div>
            <button class="btn-lg btn-outline ">Button</button>
          </div>

          <!--outline button lg with icon-->
          <div>
           <button class="btn-lg btn-outline btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--outline button lg with trailing icon-->
          <div>
           <button class="btn-lg btn-outline btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--outline button with rounded icon-->
          <div>
            <button class="btn-lg-icon-only btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
            </button>
          </div>

          <!--outline button lg full width-->
          <div class="w-1/3">
            <button class="btn-lg btn-outline w-full">Full width Button</button>
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
           <button class="btn btn-borderless btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--borderless button with trailing icon-->
          <div>
           <button class="btn btn-borderless btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
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

          <!--borderless button lg-->
          <div>
            <button class=" btn-lg btn-borderless ">Button</button>
          </div>

          <!--borderless button lg with icon-->
          <div>
           <button class="btn-lg btn-borderless btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--borderless button lg with trailing icon-->
          <div>
           <button class="btn-lg btn-borderless btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--borderless icon circular-->
          <div>
            <button class="btn-lg-icon-only btn-borderless">
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
           <button class="btn btn-neutral btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>
   
          <!--neutral button with trailing icon-->
          <div>
           <button class="btn btn-neutral btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
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

          <!--neutral button lg-->
          <div>
            <button class=" btn-lg btn-neutral ">Button</button>
          </div>

          <!--neutral button lg with icon-->
          <div>
           <button class="btn-lg btn-neutral btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--neutral button lg with trailing icon-->
          <div>
           <button class="btn-lg btn-neutral btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--neutral icon circular-->
          <div>
            <button class="btn-lg-icon-only btn btn-neutral">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!--neutral button lg full width-->
          <div class="w-1/3">
            <button class="btn-lg btn-neutral  w-full">Full width Button</button>
          </div>

        </div>


        `,
    },


    {
      id: 'button_neutral_oultine',
      title: 'Neutral Outline',
      code: `
        <div class="flex gap-x-5">

          <!--primary button-->
          <div>
            <button class=" btn btn-neutral-outline ">Button</button>
          </div>
          
          <!--neutral button with icon-->
          <div>
           <button class="btn btn-neutral-outline btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>
   
          <!--neutral button with trailing icon-->
          <div>
           <button class="btn btn-neutral-outline btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--outline icon circular-->
          <div>
            <button class="btn-icon-only btn btn-neutral-outline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!--neutral button full width-->
          <div class="w-1/3">
            <button class=" btn btn-neutral-outline  w-full">Full width Button</button>
          </div>

        </div>

        <div class="flex gap-x-5 pt-5">

          <!--neutral button lg-->
          <div>
            <button class=" btn-lg btn-neutral-outline ">Button</button>
          </div>

          <!--neutral button lg with icon-->
          <div>
           <button class="btn-lg btn-neutral-outline btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--neutral button lg with trailing icon-->
          <div>
           <button class="btn-lg btn-neutral-outline btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--neutral icon circular-->
          <div>
            <button class="btn-lg-icon-only btn btn-neutral-outline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!--neutral button lg full width-->
          <div class="w-1/3">
            <button class="btn-lg btn-neutral-outline  w-full">Full width Button</button>
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
           <button class="btn btn-neutral-borderless btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--borderless button with trailing icon-->
          <div>
           <button class="btn btn-neutral-borderless btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
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

          <!--borderless button lg-->
          <div>
            <button class=" btn-lg btn-neutral-borderless ">Button</button>
          </div>

          <!--borderless button lg with icon-->
          <div>
           <button class="btn-lg btn-neutral-borderless btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--borderless button lg with trailing icon-->
          <div>
           <button class="btn-lg btn-neutral-borderless btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <!--borderless icon circular-->
          <div>
            <button class="btn-lg-icon-only btn btn-neutral-borderless">
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
           <button class="btn btn-danger btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
        </div>
            
        <!--danger icon circular-->
        <div>
           <button class="btn btn-danger btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
        </div>

        <!--danger button full width-->
          <div class="w-1/3">
            <button class=" btn btn-danger w-full">Delete</button>
          </div>

        </div>

        <div class="flex gap-x-4 pt-5">

          <!--danger button lg-->
          <div>
            <button class=" btn-lg btn-danger ">Delete</button>
          </div>

          <!--danger button lg with icon-->
          <div>
           <button class="btn-lg btn-danger btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <div>
          <button class="btn-lg btn-danger btn-icon-trailing">
            <envelope-icon class="btn-icon"> </envelope-icon>
            Button
          </button>
         </div>

          <!--danger icon circular-->
          <div>
            <button class="btn-lg-icon-only btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
          </svg>
          
            </button>
          </div>
          
          <!--danger button lg full width-->
          <div class="w-1/3">
            <button class=" btn btn-lg btn-danger w-full">Delete</button>
          </div>

        </div>
  

      `,
    },

    {
      id: 'button_danger_outline',
      title: 'Danger Outline',
      code: `
      <div class="flex gap-x-4">

        <!--danger button-->
        <div>
          <button class=" btn btn-danger-outline ">Button</button>
        </div>

        <!--danger button with icon-->
        <div>
           <button class="btn btn-danger-outline btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
        </div>
            
        <!--danger icon circular-->
        <div>
           <button class="btn btn-danger-outline btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
        </div>

        <!--danger button full width-->
          <div class="w-1/3">
            <button class=" btn btn-danger-outline w-full">Delete</button>
          </div>

        </div>

        <div class="flex gap-x-4 pt-5">

          <!--danger button lg-->
          <div>
            <button class=" btn-lg btn-danger-outline ">Delete</button>
          </div>

          <!--danger button lg with icon-->
          <div>
           <button class="btn-lg btn-danger-outline btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <div>
          <button class="btn-lg btn-danger-outline btn-icon-trailing">
            <envelope-icon class="btn-icon"> </envelope-icon>
            Button
          </button>
         </div>

          <!--danger icon circular-->
          <div>
            <button class="btn-lg-icon-only btn-danger-outline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
          </svg>
          
            </button>
          </div>
          
          <!--danger button lg full width-->
          <div class="w-1/3">
            <button class=" btn btn-lg btn-danger-outline w-full">Delete</button>
          </div>

        </div>
  

      `,
    },
    {
      id: 'button_danger_borderless',
      title: 'Danger Borderless',
      code: `
      <div class="flex gap-x-4">

        <!--danger button-->
        <div>
          <button class=" btn btn-danger-borderless">Button</button>
        </div>

        <!--danger button with icon-->
        <div>
           <button class="btn btn-danger-borderless btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
        </div>
            
        <!--danger icon circular-->
        <div>
           <button class="btn btn-danger-borderless btn-icon-trailing">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
        </div>

        <!--danger button full width-->
          <div class="w-1/3">
            <button class=" btn btn-danger-borderless w-full">Delete</button>
          </div>

        </div>

        <div class="flex gap-x-4 pt-5">

          <!--danger button lg-->
          <div>
            <button class=" btn-lg btn-danger-borderless ">Delete</button>
          </div>

          <!--danger button lg with icon-->
          <div>
           <button class="btn-lg btn-danger-borderless btn-icon-leading">
             <envelope-icon class="btn-icon"> </envelope-icon>
             Button
           </button>
          </div>

          <div>
          <button class="btn-lg btn-danger-borderless btn-icon-trailing">
            <envelope-icon class="btn-icon"> </envelope-icon>
            Button
          </button>
         </div>

          <!--danger icon circular-->
          <div>
            <button class="btn-lg-icon-only btn-danger-borderless">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
          </svg>
          
            </button>
          </div>
          
          <!--danger button lg full width-->
          <div class="w-1/3">
            <button class=" btn btn-lg btn-danger-borderless w-full">Delete</button>
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
        <p class="cb-text-copy-regular">Lorem ipsum <a href="#" class="btn-link btn-icon-leading">Link with icon <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="btn-icon">
        <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
        </svg></a> consectetur adipiscing.</p>
        <!-- Link Button ends -->

      </div>

    
      `,
    },

    {
      id: 'Button_disabled',
      title: 'Disabled',
      code: ` 
      <div class="flex gap-x-4">

      <!-- button Regular-->
      <div>
        <button class="btn" disabled>Button</button>
      </div>

      <!-- button Regular with icon-->
      <div>
      <button class="btn btn-icon-leading" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>
          Button
        </button>
      </div>

      <!-- button Regular with trailing icon-->
      <div>
        <button class="btn btn-icon-trailing" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>
          Button
        </button>
      </div>

      <!--outline Regular icon circular-->
      <div>
        <button class="btn-icon-only" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- button Regular full width-->
      <div class="w-1/3">
        <button class="btn w-full" disabled>Full width Button</button>
      </div>

     
      </div>

      <div class="flex gap-x-4 pt-5">

      <!-- large button-->
      <div>
        <button class="btn-lg" disabled>Button</button>
      </div>

      <!-- large button with icon-->
      <div>
        <button class="btn-lg btn-icon-leading" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>
          Button
        </button>
      </div>

      <!-- large button with trailing icon-->
      <div>
        <button class="btn-lg btn-icon-trailing" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>Button
        </button>
      </div>

      <!--outline large icon circular-->
      <div>
        <button class="btn-lg-icon-only" disabled>
          <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- large button full width-->
      <div class="w-1/3">
        <button class="btn-lg w-full" disabled>Full width Button</button>
      </div>




       

      </div>


    
      `,
    },
    {
      id: 'Button_disabled_outline',
      title: 'Disabled Outline',
      code: ` 
      <div class="flex gap-x-4">

      <!-- button Regular-->
      <div>
        <button class="btn btn-outline" disabled>Button</button>
      </div>

      <!-- button Regular with icon-->
      <div>
      <button class="btn btn-outline btn-icon-leading" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>
          Button
        </button>
      </div>

      <!-- button Regular with trailing icon-->
      <div>
        <button class="btn btn-outline btn-icon-trailing" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>
          Button
        </button>
      </div>

      <!--outline Regular icon circular-->
      <div>
        <button class=" btn-outline btn-icon-only" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- button Regular full width-->
      <div class="w-1/3">
        <button class="btn btn-outline w-full" disabled>Full width Button</button>
      </div>

     
      </div>

      <div class="flex gap-x-4 pt-5">

      <!-- large button-->
      <div>
        <button class="btn-lg btn-outline" disabled>Button</button>
      </div>

      <!-- large button with icon-->
      <div>
        <button class="btn-lg btn-outline btn-icon-leading" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>
          Button
        </button>
      </div>

      <!-- large button with trailing icon-->
      <div>
        <button class="btn-lg btn-outline btn-icon-trailing" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>Button
        </button>
      </div>

      <!--outline large icon circular-->
      <div>
        <button class="btn-outline btn-lg-icon-only" disabled>
          <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- large button full width-->
      <div class="w-1/3">
        <button class="btn-outline btn-lg w-full" disabled>Full width Button</button>
      </div>




       

      </div>


    
      `,
    },
    {
      id: 'Button_disabled_borderless',
      title: 'Disabled Borderless',
      code: ` 
      <div class="flex gap-x-4">

      <!-- button Regular-->
      <div>
        <button class="btn btn-borderless" disabled>Button</button>
      </div>

      <!-- button Regular with icon-->
      <div>
      <button class="btn btn-borderless btn-icon-leading" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>
          Button
        </button>
      </div>

      <!-- button Regular with trailing icon-->
      <div>
        <button class="btn btn-borderless btn-icon-trailing" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>
          Button
        </button>
      </div>

      <!--outline Regular icon circular-->
      <div>
        <button class=" btn-borderless btn-icon-only" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- button Regular full width-->
      <div class="w-1/3">
        <button class="btn btn-borderless w-full" disabled>Full width Button</button>
      </div>

     
      </div>

      <div class="flex gap-x-4 pt-5">

      <!-- large button-->
      <div>
        <button class="btn-lg btn-borderless" disabled>Button</button>
      </div>

      <!-- large button with icon-->
      <div>
        <button class="btn-lg btn-borderless btn-icon-leading" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>
          Button
        </button>
      </div>

      <!-- large button with trailing icon-->
      <div>
        <button class="btn-lg btn-borderless btn-icon-trailing" disabled>
          <envelope-icon class="btn-icon"> </envelope-icon>Button
        </button>
      </div>

      <!--outline large icon circular-->
      <div>
        <button class="btn-borderless btn-lg-icon-only" disabled>
          <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- large button full width-->
      <div class="w-1/3">
        <button class="btn-borderless btn-lg w-full" disabled>Full width Button</button>
      </div>




       

      </div>


    
      `,
    },

    

    

  ];
}
