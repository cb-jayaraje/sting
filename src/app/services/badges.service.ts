import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class BadgesService {

    badgeDatas= [
        {
            id: 'badge_1',
            title: 'Secondary badges',
            code: `
            <div class="flex items-start flex-wrap gap-4">

         

            <!-- ------------badge-small------------ -->
  
            <span class="badge-neutral badge-small ">
              Small
            </span>

            <!-- ------------badge-small with button------------ -->
            <span class="badge-neutral badge-small__icon"> Small 
            <button type="button" >
            <span class="sr-only">Remove small option</span>
            <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
              <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
            </svg>
          </button>
        </span>

            <!-- ------------badge-base------------ -->
  
            <span class="badge badge-base bg-neutral-200 text-neutral-800">
            Regular
            </span>

            <!-- ------------badge-base with button------------ -->
            <span class="badge-neutral badge-base__icon"> Regular
            <button type="button" >
            <span class="sr-only">Remove large option</span>
            <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
              <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
            </svg>
          </button>
        </span>
          
  
          </div>
            `
        },
        {
          id: 'badge_2',
          title: 'Primary badges',
          code: `
          <div class="flex items-start flex-wrap gap-4">

         

        <!-- ------------badge-small------------ -->

        <span class="badge-primary badge-small">
          Small
        </span>

        <!-- ------------badge-small with button------------ -->
        <span class="badge-primary badge-small__icon"> Small 
        <button type="button" >
        <span class="sr-only">Remove small option</span>
        <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
          <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>

        <!-- ------------badge-base------------ -->

        <span class="badge-primary badge-base ">
        Regular
        </span>

        <!-- ------------badge-Regular with button------------ -->
        <span class="badge-primary badge-base__icon"> Regular
        <button type="button" >
        <span class="sr-only">Remove small option</span>
        <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
          <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>

        

        </div>

       
          `
      },
      {
        id: 'badge_3',
        title: 'Minimal badges',
        code: `
        <div class="flex items-center flex-wrap gap-4">


      <!-- ------------badge-small------------ -->

      <span class="badge-minimal  badge-small">
        Small
      </span>

      <!-- ------------badge-small with button------------ -->
      <span class="badge-minimal badge-small__icon"> Small 
      <button type="button" >
      <span class="sr-only">Remove small option</span>
      <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
        <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
      </svg>
    </button>
  </span>

      <!-- ------------badge-large------------ -->

      <span class="badge-minimal badge-base">
        Base
      </span>

      <!-- ------------badge-Regular with button------------ -->
      <span class="badge-minimal badge-base__icon"> Regular
      <button type="button" >
      <span class="sr-only">Remove small option</span>
      <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
        <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
      </svg>
    </button>
  </span>


     

      </div>
        `
    },
    {
      id: 'badge_4',
      title: 'Danger badges',
      code: `
      <div class="flex items-start flex-wrap gap-4">

   

      <!-- ------------badge-small------------ -->

          <span class="badge-red badge-small">
            Small
          </span>

          <!-- ------------badge-small with button------------ -->
          <span class="badge-red badge-small__icon"> Small 
          <button type="button" >
          <span class="sr-only">Remove small option</span>
          <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      </span>

      <!-- ------------badge-base------------ -->

          <span class="badge-red badge-base">
            Base
          </span>

          <!-- ------------badge-Regular with button------------ -->
          <span class="badge-red badge-base__icon"> Regular
          <button type="button" >
          <span class="sr-only">Remove small option</span>
          <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      </span>

    
    </div>
      `
  },
  {
    id: 'badge_5',
    title: 'Orange badges',
    code: `
    <div class="flex items-start flex-wrap gap-4">
    
   

    <!-- ------------badge-small------------ -->

    <span class="badge-orange badge-small">
      Small
    </span>
    
    <!-- ------------badge-small with button------------ -->
    <span class="badge-orange badge-small__icon"> Small 
    <button type="button" class="h-4 w-4" >
    <span class="sr-only">Remove small option</span>
    <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
      <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
    </svg>
    </button>
    </span>
    
    <!-- ------------badge-base------------ -->
    
    <span class="badge-orange badge-base">
      Base
    </span>
    
    <!-- ------------badge-Regular with button------------ -->
    <span class="badge-orange badge-base__icon"> Regular
    <button type="button" >
    <span class="sr-only">Remove small option</span>
    <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
      <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
    </svg>
    </button>
    </span>
    
   

  </div>
    `
},
{
  id: 'badge_6',
  title: 'Green badges',
  code: `
  <div class="flex items-start flex-wrap gap-4">

<!-- ------------badge-small------------ -->

<span class="badge-green badge-small">
  Small
</span>

<!-- ------------badge-small with button------------ -->
<span class="badge-green badge-small__icon"> Small 
<button type="button" >
<span class="sr-only">Remove small option</span>
<svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
  <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
</svg>
</button>
</span>

<!-- ------------badge-base------------ -->

<span class="badge-green badge-base">
  Base
</span>

<!-- ------------badge-Regular with button------------ -->
<span class="badge-green badge-base__icon"> Regular
<button type="button" >
<span class="sr-only">Remove small option</span>
<svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
  <path stroke-linecap="round" stroke-width="1" d="M1 1l6 6m0-6L1 7" />
</svg>
</button>
</span>




</div>
  `
},

    ];

}