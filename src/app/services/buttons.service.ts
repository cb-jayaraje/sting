import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ButtonService {
  buttonDatas = [
    {
      id: 'button_primary',
      title: 'Primary',
      code: `
          <div class="flex gap-x-10">
            <!--primary button-->
            <div>
              <button class=" btn btn-primary ">Button</button>
            </div>
            <!--primary button with icon-->
            <div>
              <button class="btn btn-primary btn-icon">
                <svg class="btn-leading-icon mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
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
                <svg class="btn-trailing-icon ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>

            <!--outline icon circular-->
            <div>
              <button class="btn btn-primary p-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <!--primary button full width-->
            <div class="w-1/3">
              <button class=" btn btn-primary l w-full">Full width Button</button>
            </div>
          </div>

          <div class="flex gap-x-10 pt-5">
            <!--primary button small-->
            <div>
              <button class=" btn btn-small btn-primary ">Button</button>
            </div>
            <!--primary button small with icon-->
            <div>
              <button class="btn btn-small  btn-primary btn-icon">
                <svg class="btn-leading-icon mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Button
              </button>
            </div>
            <!--primary button small with trailing icon-->
            <div>
              <button class="btn btn-small btn-primary btn-icon">
              Button
                <svg class="btn-trailing-icon ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>

            <!--outline small icon circular-->
            <div>
              <button class="btn btn-small btn-primary p-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5">
                  <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <!--primary button small full width-->
            <div class="w-1/3">
              <button class=" btn btn-small btn-primary l w-full">Full width Button</button>
            </div>
          </div>



          `,
    },
    {
      id: 'button_1',
      title: 'Secondary',
      code: `
        <div class="flex gap-x-10">
          <!--outline button-->
          <div>
            <button class=" btn btn-secondary " type="submit">Button</button>
          </div>
          <!--outline button with icon-->
          <div>
            <butto class="btn btn-secondary btn-icon">
              <svg class="btn-leading-icon mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
              </button>
          </div>
          <!--outline button with trailing icon-->
          <div>
            <butto class="btn btn-secondary btn-icon">
            Button
              <svg class="btn-trailing-icon ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              </button>
          </div>
          <!--outline button rounded-->

          <!--outline icon circular-->
          <div>
            <button class="btn btn-secondary p-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
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

        <div class="flex gap-x-10 pt-5">
          <!--outline button small-->
          <div>
            <button class=" btn btn-small btn-secondary ">Button</button>
          </div>
          <!--outline button small with icon-->
          <div>
            <button class="btn btn-small  btn-secondary btn-icon">
              <svg class="btn-leading-icon mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Button
            </button>
          </div>
          <!--outline button small with trailing icon-->
          <div>
            <button class="btn btn-small btn-secondary btn-icon">
            Button
              <svg class="btn-trailing-icon ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>
            <!--outline button with rounded icon-->
            <div>
              <button class="btn btn-small btn-secondary p-1.5 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5">
                  <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>

          <!--outline button small full width-->
          <div class="w-1/3">
            <button class=" btn btn-small btn-secondary w-full">Full width Button</button>
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
   </div <!--neutral button with icon-->
   <div>
     <button class="btn btn-neutral btn-icon">
       <svg class="btn-leading-icon mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
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
       <svg class="btn-trailing-icon ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
         aria-hidden="true">
         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
       </svg>
     </button>
   </div>

   <!--outline icon circular-->
   <div>
     <button class="btn btn-neutral p-2 ">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
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
   <!--neutral  button small-->
   <div>
     <button class=" btn btn-small btn-neutral ">Button</button>
   </div>
   <!--neutral button small with icon-->
   <div>
     <button class="btn btn-small btn-neutral btn-icon">
       <svg class="btn-leading-icon mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
         aria-hidden="true">
         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
       </svg>
       Button
     </button>
   </div>
   <!--neutral button small with trailing icon-->
   <div>
     <button class="btn btn-small btn-neutral btn-icon">
     Button
       <svg class="btn-trailing-icon ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
         aria-hidden="true">
         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
       </svg>
     </button>
   </div>

   <!--neutral icon circular-->
   <div>
     <button class="btn btn-small btn-neutral p-1.5 ">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5">
         <path fill-rule="evenodd"
           d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
           clip-rule="evenodd" />
       </svg>
     </button>
   </div>
   <!--neutral button small full width-->
   <div class="w-1/3">
     <button class=" btn btn-small btn-neutral  w-full">Full width Button</button>
   </div>
 </div>
        `,
    },
    {
      id: 'button_danger',
      title: 'Danger',
      code: `
      <div class="flex gap-x-10">
  <!--danger button-->
  <div>
    <button class=" btn btn-danger ">Button</button>
  </div>
  <!--danger button with icon-->
  <div>
    <button class="btn btn-danger btn-icon">
      <svg class="btn-leading-icon mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
    </svg>
      Button
    </button>
  </div>

  <!--danger button with trailing icon-->
  <div>
    <button class="btn btn-danger btn-icon">
    Button
      <svg class="btn-trailing-icon ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
    </svg> </button> </div> 
      
      
      <!--danger icon circular-->
      <div>
        <button class="btn btn-danger p-2 ">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
      </svg>
        </button>
      </div>

      <!--danger button full width-->
      <div class="w-1/3">
        <button class=" btn btn-danger  w-full">Full width Button</button>
      </div>
  </div>

  <div class="flex gap-x-10 pt-5">
    <!--danger button  small-->
    <div>
      <button class=" btn btn-small btn-danger ">Button</button>
    </div>
    <!--danger button small with icon-->
    <div>
      <button class="btn btn-small btn-danger btn-icon">
        <svg class="btn-leading-icon mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
      </svg>
        Button
      </button>
    </div>
    <!--danger button small with trailing icon-->
    <div>
      <button class="btn btn-small btn-danger btn-icon">
      Button
        <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
      </svg>
      </button>
    </div>

    <!--danger icon circular-->
    <div>
      <button class="btn btn-danger p-2 ">
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
    </svg>
      </button>
    </div>


      
    <!--danger button small full width-->
    <div class="w-1/3">
      <button class=" btn btn-small btn-danger  w-full">Full width Button</button>
    </div>
  </div>
  
      `,
    },
    {
      id: 'Button_link',
      title: 'Link Button',
      code: ` 
      <div class="flex gap-x-10 pt-5">

      <!-- Link Button starts -->
      <a href="#" class="btn-link btn-link--regular">Link</a>
      <!-- Link Button ends -->

      <!-- Link Button starts -->
      <a href="#" class="btn-link btn-link--regular btn-icon">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 -ml-0.5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>Link </a>
      <!-- Link Button ends -->

      <!-- Link Button starts -->
      <a href="#" class="btn-link btn-link--regular btn-icon">Link <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 -mr-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  </a>
      <!-- Link Button ends -->

    </div>

    <div class="flex gap-x-10 pt-5">

      <!-- Link Button starts -->
      <a  class="btn-link btn-link--small">Link</a>
      <!-- Link Button ends -->

      <!-- Link Button with leading icon starts -->
      <a  class="btn-link  btn-link--small btn-icon">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 -ml-0.5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>Link </a>
      <!-- Link Button ends -->

      <!-- Link Button with trailing icon starts -->
      <a href="#" class="btn-link  btn-link--small btn-icon">Link <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 ml-1 -mr-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  </a>
  <!-- Link Button ends -->

    

    </div>

    
      `
    }
    

  ];
}
