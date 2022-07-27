import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class BadgesService {

    badgeDatas= [
        {
            id: 'badge_1',
            title: 'Brand badges',
            code: `
            <div class="flex items-start flex-wrap gap-4">
            <span class="badge badge-mini bg-brand-50 text-brand-600">
              Mini
            </span>
  
            <span class="badge badge-small bg-brand-50 text-brand-600">
              Small
            </span>
  
            <span class="badge badge-base bg-brand-50 text-brand-600">
              Base
            </span>
  
            <div class="bg-brand-50 p-2">
              <span class="badge badge-base bg-brand-50 text-brand-600 badge-inverted">
                Inverted
              </span>
            </div>
  
            <span class="badge-dot--sm bg-brand-50 text-brand-600">
              <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
              </svg>
              dot Small
            </span>
  
            <span class="badge-dot--lg bg-brand-50 text-brand-600">
              <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
              </svg>
              dot Large
            </span>
  
            <span class="badge badge-mini rounded bg-brand-50 text-brand-600"> Rounded badges </span>
  
            <span class="badge badge-small rounded bg-brand-50 text-brand-600"> Rounded badges </span>
  
            <span class="badge-dot--sm rounded bg-brand-50 text-brand-600">
              <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
              </svg>
              Rounded with dot Small
            </span>
  
            <span class="badge-dot--lg rounded bg-brand-50 text-brand-600">
              <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
              </svg>
              Rounded with dot Large
            </span>
  
            <span class="badge bg-brand-50 text-brand-600">
              Small
              <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
                <span class="sr-only">Remove small option</span>
                <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                  <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
              </button>
            </span>
  
            <span class="badge badge-small bg-brand-50 text-brand-600">
              Large
              <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
                <span class="sr-only">Remove large option</span>
                <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                  <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
              </button>
            </span>
  
          </div>
            `
        },
        {
          id: 'badge_3',
          title: 'Primary badges',
          code: `
          <div class="flex items-start flex-wrap gap-4">
          <span class="badge badge-mini bg-primary-50 text-primary-500">
          Mini
        </span>

        <span class="badge badge-small bg-primary-50 text-primary-500">
          Small
        </span>

        <span class="badge badge-base bg-primary-50 text-primary-500">
          Base
        </span>

        <div class="bg-primary-50 p-2">
          <span class="badge badge-base bg-primary-50 text-primary-500 badge-inverted">
            Inverted
          </span>
        </div>

        <span class="badge-dot--sm bg-primary-50 text-primary-500">
          <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
          dot Small
        </span>

        <span class="badge-dot--lg bg-primary-50 text-primary-500">
          <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
          dot Large
        </span>

         <span class="badge rounded badge-mini bg-primary-50 text-primary-500"> Rounded badges </span>

        <span class="badge badge-small rounded bg-primary-50 text-primary-500"> Rounded badges </span>

        <span class="badge-dot--sm rounded bg-primary-50 text-primary-500">
          <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
          Rounded with dot Small
        </span>

        <span class="badge-dot--lg rounded bg-primary-50 text-primary-500">
          <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
          Rounded with dot Large
        </span>

        <span class="badge bg-primary-50 text-primary-500">
          Small
          <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
            <span class="sr-only">Remove small option</span>
            <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
              <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
            </svg>
          </button>
        </span>

        <span class="badge badge-small bg-primary-50 text-primary-500">
          Large
          <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
            <span class="sr-only">Remove large option</span>
            <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
              <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
            </svg>
          </button>
        </span>

        </div>
          `
      },
      {
        id: 'badge_3',
        title: 'Neutral badges',
        code: `
        <div class="flex items-start flex-wrap gap-4">
        <span class="badge badge-mini bg-neutral-50 text-neutral-500">
        Mini
      </span>

      <span class="badge badge-small bg-neutral-50 text-neutral-500">
        Small
      </span>

      <span class="badge badge-base bg-neutral-50 text-neutral-500">
        Base
      </span>

      <div class="bg-neutral-50 p-2">
        <span class="badge badge-base bg-neutral-50 text-neutral-500 badge-inverted">
          Inverted
        </span>
      </div>

      <span class="badge-dot--sm bg-neutral-50 text-neutral-500">
        <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        dot Small
      </span>

      <span class="badge-dot--lg bg-neutral-50 text-neutral-500">
        <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        dot Large
      </span>

       <span class="badge rounded badge-mini bg-neutral-50 text-neutral-500"> Rounded badges </span>

      <span class="badge badge-small rounded bg-neutral-50 text-neutral-500"> Rounded badges </span>

      <span class="badge-dot--sm rounded bg-neutral-50 text-neutral-500">
        <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        Rounded with dot Small
      </span>

      <span class="badge-dot--lg rounded bg-neutral-50 text-neutral-500">
        <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        Rounded with dot Large
      </span>

      <span class="badge bg-neutral-50 text-neutral-500">
        Small
        <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
          <span class="sr-only">Remove small option</span>
          <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      </span>

      <span class="badge badge-small bg-neutral-50 text-neutral-500">
        Large
        <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
          <span class="sr-only">Remove large option</span>
          <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
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
      <span class="badge badge-mini bg-red-50 text-red-600">
            Mini
          </span>

          <span class="badge badge-small bg-red-50 text-red-600">
            Small
          </span>

          <span class="badge badge-base bg-red-50 text-red-600">
            Base
          </span>

          <div class="bg-red-50 p-2">
            <span class="badge badge-base bg-red-50 text-red-600 badge-inverted">
              Inverted
            </span>
          </div>

          <span class="badge-dot--sm bg-red-50 text-red-600">
            <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            dot Small
          </span>

          <span class="badge-dot--lg bg-red-50 text-red-600">
            <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            dot Large
          </span>

           <span class="badge rounded badge-mini bg-red-50 text-red-600"> Rounded badges </span>

          <span class="badge badge-small rounded bg-red-50 text-red-600"> Rounded badges </span>

          <span class="badge-dot--sm rounded bg-red-50 text-red-600">
            <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Rounded with dot Small
          </span>

          <span class="badge-dot--lg rounded bg-red-50 text-red-600">
            <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Rounded with dot Large
          </span>

          <span class="badge bg-red-50 text-red-600">
            Small
            <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
              <span class="sr-only">Remove small option</span>
              <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
              </svg>
            </button>
          </span>

          <span class="badge badge-small bg-red-50 text-red-600">
            Large
            <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
              <span class="sr-only">Remove large option</span>
              <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
              </svg>
            </button>
          </span>

    </div>
      `
  },
  {
    id: 'badge_3',
    title: 'Orange badges',
    code: `
    <div class="flex items-start flex-wrap gap-4">
  <span class="badge badge-mini bg-orange-50 text-orange-600">
            Mini
          </span>

          <span class="badge badge-small bg-orange-50 text-orange-600">
            Small
          </span>

          <span class="badge badge-base bg-orange-50 text-orange-600">
            Base
          </span>

          <div class="bg-orange-50 p-2">
            <span class="badge badge-base bg-orange-50 text-orange-600 badge-inverted">
              Inverted
            </span>
          </div>

          <span class="badge-dot--sm bg-orange-50 text-orange-600">
            <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            dot Small
          </span>

          <span class="badge-dot--lg bg-orange-50 text-orange-600">
            <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            dot Large
          </span>

           <span class="badge rounded badge-mini bg-orange-50 text-orange-600"> Rounded badges </span>

          <span class="badge badge-small rounded bg-orange-50 text-orange-600"> Rounded badges </span>

          <span class="badge-dot--sm rounded bg-orange-50 text-orange-600">
            <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Rounded with dot Small
          </span>

          <span class="badge-dot--lg rounded bg-orange-50 text-orange-600">
            <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Rounded with dot Large
          </span>

          <span class="badge bg-orange-50 text-orange-600">
            Small
            <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
              <span class="sr-only">Remove small option</span>
              <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
              </svg>
            </button>
          </span>

          <span class="badge badge-small bg-orange-50 text-orange-600 text-orange-600">
            Large
            <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
              <span class="sr-only">Remove large option</span>
              <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
              </svg>
            </button>
          </span>

  </div>
    `
},
{
  id: 'badge_3',
  title: 'Orange badges',
  code: `
  <div class="flex items-start flex-wrap gap-4">
  <span class="badge badge-mini bg-green-50 text-green-600">
  Mini
</span>

<span class="badge badge-small bg-green-50 text-green-600">
  Small
</span>

<span class="badge badge-base bg-green-50 text-green-600">
  Base
</span>

<div class="bg-green-50 p-2">
  <span class="badge badge-base bg-green-50 text-green-600 badge-inverted">
    Inverted
  </span>
</div>

<span class="badge-dot--sm bg-green-50 text-green-600">
  <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3" />
  </svg>
  dot Small
</span>

<span class="badge-dot--lg bg-green-50 text-green-600">
  <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3" />
  </svg>
  dot Large
</span>

 <span class="badge rounded badge-mini bg-green-50 text-green-600"> Rounded badges </span>

<span class="badge badge-small rounded bg-green-50 text-green-600"> Rounded badges </span>

<span class="badge-dot--sm rounded bg-green-50 text-green-600">
  <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3" />
  </svg>
  Rounded with dot Small
</span>

<span class="badge-dot--lg rounded bg-green-50 text-green-600">
  <svg class="badge-icn" fill="currentColor" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3" />
  </svg>
  Rounded with dot Large
</span>

<span class="badge bg-green-50 text-green-600">
  Small
  <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
    <span class="sr-only">Remove small option</span>
    <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
      <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
    </svg>
  </button>
</span>

<span class="badge badge-small bg-green-50 text-green-600">
  Large
  <button type="button" class="btn btn-small rounded-full ml-2 p-1 border-none ">
    <span class="sr-only">Remove large option</span>
    <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
      <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
    </svg>
  </button>
</span>


</div>
  `
},

    ];

}