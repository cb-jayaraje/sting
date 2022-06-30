import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class BadgesService {

    badgeDatas= [
        {
            id: 'badge_1',
            title: 'Basic badges',
            code: `
            <span class="badge badge-primary"> Badge </span>
            <span class="badge badge-secondary"> Badge </span>
            <span class="badge badge-info"> Badge </span>
            <span class="badge badge-warning"> Badge </span>
            <span class="badge badge-success"> Badge </span>
            `
        },
        {
            id: 'badge_2',
            title: 'Badge with dot',
            code: `
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
  <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3" />
  </svg>
  Small
</span>
<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
  <svg class="-ml-1 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3" />
  </svg>
  Large
</span>
`
        }
    ];

}