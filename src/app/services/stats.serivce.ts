import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StatsService {
  statDatas = [
    {
      id: 'stats_1',
      title: 'Stats',
      code: `  <div class="card px-5 py-4 2xl:p-6">
                    <dt class="truncate cb-text-copy-small">Total Subscribers</dt>
                    <dd class="mt-1 cb-text-h3">71,897</dd>
                </div>`,
    },
    {
      id: 'stats_2',
      title: 'Stats with trend',
      code: `
    <div class="card px-5 py-4 2xl:p-6">
        <dt class="truncate cb-text-copy-small">Total Subscribers</dt>
        <dd class="w-full flex items-baseline justify-between">
            <div class="mt-1 cb-text-h3">71,897</div>
            <span class="badge-green badge-base px-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4 -ml-0.5 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
                12%
            </span>
        </dd>
    </div>
  `,
    },
  ];
}
