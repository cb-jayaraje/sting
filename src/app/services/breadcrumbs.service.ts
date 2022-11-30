import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  breadcrumbsData = [
    {
      id: 'breadcrumb_!',
      title: 'Breadcrumb',
      code: `     <nav class="flex" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-3">
        <li>
          <div class="flex items-center">
            <a href="#" class="cb-text-copy-small hover:text-neutral-800"
              >Page</a
            >
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="flex-shrink-0 h-5 w-5 text-neutral-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
            </svg>
            <a href="#" class="ml-3 cb-text-copy-small hover:text-neutral-800"
              >Page</a
            >
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="flex-shrink-0 h-5 w-5 text-neutral-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
            </svg>
            <a
              href="#"
              class="ml-3 cb-text-copy-small hover:text-neutral-800"
              aria-current="page"
              >Page</a
            >
          </div>
        </li>
      </ol>
    </nav>`,
    },
  ];
}
