import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  breadcrumbsData = [
    {
      id: 'breadcrumb_!',
      title: 'Breadcrumb',
      code: `     <nav class="breadcrumb" aria-label="Breadcrumb">
      <ol role="list">
        <li>
            <a  class="breadcrumb-text">Page</a>
        </li>
        <li>
            <svg 
              class="breadcrumb-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
            </svg>
            <a  class="ml-3 breadcrumb-text">Page</a>
        </li>
        <li>
            <svg
            class="breadcrumb-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
            </svg>
            <a  class="ml-3 breadcrumb-text">Page</a>
        </li>
      </ol>
    </nav>`,
    },
  ];
}
