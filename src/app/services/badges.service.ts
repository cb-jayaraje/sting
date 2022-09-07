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
  
            <span class="badge badge-small bg-neutral-200 text-neutral-800">
              Small
            </span>

            <!-- ------------badge-base------------ -->
  
            <span class="badge badge-base bg-neutral-200 text-neutral-800">
              Base
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

        <span class="badge badge-small bg-primary-500 text-white">
          Small
        </span>

        <!-- ------------badge-base------------ -->

        <span class="badge badge-base bg-primary-500 text-white">
          Base
        </span>

        </div>
          `
      },
      {
        id: 'badge_3',
        title: 'Neutral badges',
        code: `
        <div class="flex items-center flex-wrap gap-4">


      <!-- ------------badge-small------------ -->

      <span class="badge badge-small border border-neutral-200 bg-white text-primary-500">
        Small
      </span>

      <!-- ------------badge-large------------ -->

      <span class="badge badge-base border border-neutral-200 bg-white text-primary-500">
        Base
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

          <span class="badge badge-small bg-red-100 text-red-800">
            Small
          </span>

      <!-- ------------badge-base------------ -->

          <span class="badge badge-base bg-red-100 text-red-800">
            Base
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

          <span class="badge badge-small bg-orange-200 text-orange-900">
            Small
          </span>

    <!-- ------------badge-base------------ -->

          <span class="badge badge-base bg-orange-200 text-orange-900">
            Base
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

<span class="badge badge-small bg-green-100 text-green-800">
  Small
</span>

<!-- ------------badge-base------------ -->

<span class="badge badge-base bg-green-100 text-green-800">
  Base
</span>




</div>
  `
},

    ];

}