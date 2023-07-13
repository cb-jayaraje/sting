import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BadgesService {
  badgeDatas = [

    {
      id: 'badge_base',
      title: 'Base',
      code: `
      <div class="flex items-start flex-wrap gap-4">
      <!-- ------------badge-primary------------ -->
      <div class="badge-primary"><span>Primary</span></div> 
      <div class="badge-primary-light"><span>Light</span></div> 
      <div class="badge-neutral"><span>Neutral</span></div> 
      <div class="badge-neutral-light"><span>Light</span></div> 
      <div class="badge-red"><span>Red</span></div> 
      <div class="badge-red-light"><span>Light</span></div> 
      <div class="badge-yellow"><span>yellow</span></div> 
      <div class="badge-yellow-light"><span>Light</span></div> 
      <div class="badge-green"><span>yellow</span></div> 
      <div class="badge-green-light"><span>Light</span></div> 
      <div class="badge-disabled"><span>Disabled</span></div> 
      </div>
      `
    },

    {
      id: 'badge_action',
      title: 'With Action',
      code: `
      <div class="flex items-start flex-wrap gap-4">
      <!-- ------------badge-primary------------ -->
      <div class="badge-primary"><span>Primary</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-icon">
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
    </div> 

    <div class="badge-primary-light"><span>Primary</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-icon">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
  </div> 


  <div class="badge-neutral"><span>Primary</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-icon">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
</svg>
</div> 

<div class="badge-neutral-light"><span>Primary</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-icon">
<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
</svg>
</div> 
     
      </div>
      `
    },

    {
      id: 'badge_info',
      title: 'Badge Info',
      code: `
      <div class="flex items-start flex-wrap gap-4">
      <!-- ------------badge-primary------------ -->
      <div class="badge-primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-info">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
    </svg>
    
    <span>Primary</span>                                    
    </div> 

    <div class="badge-primary-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-info">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
  </svg>
   <span>Primary</span>
  </div> 


  <div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-info">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
</svg>
<span>Primary</span>
</div> 

<div class="badge-neutral-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-info">
<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
</svg>
<span>Primary</span>
</div> 
     
      </div>
      `
    },

    {
      id: 'badge_trend',
      title: 'Badge Trend',
      code: `
      <div class="flex items-start flex-wrap gap-4">
      <!-- ------------Negative------------ -->
      <div class="badge-red"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" class="badge-info">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82635 9.75C2.11328 9.75 1.66126 8.9855 2.0049 8.3607L5.17856 2.59041C5.53474 1.94281 6.46528 1.94281 6.82146 2.59041L9.99512 8.3607C10.3388 8.9855 9.88673 9.75 9.17367 9.75L2.82635 9.75Z" fill="#6E0908"/>
      </svg>
    
    <span>Upwards</span>                                    
    </div> 

    <div class="badge-red"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" class="badge-info">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17365 2.25C9.88672 2.25 10.3387 3.0145 9.9951 3.6393L6.82145 9.40959C6.46526 10.0572 5.53472 10.0572 5.17854 9.40959L2.00488 3.6393C1.66124 3.0145 2.11327 2.25 2.82633 2.25L9.17365 2.25Z" fill="#991412"/>
    </svg>
   <span>Downwards</span>
  </div> 


  <div class="badge-red-light"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" class="badge-info">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82635 9.75C2.11328 9.75 1.66126 8.9855 2.0049 8.3607L5.17856 2.59041C5.53474 1.94281 6.46528 1.94281 6.82146 2.59041L9.99512 8.3607C10.3388 8.9855 9.88673 9.75 9.17367 9.75L2.82635 9.75Z" fill="#6E0908"/>
  </svg>
<span>Upwards</span>
</div> 

<div class="badge-red-light"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" class="badge-info">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.17365 2.25C9.88672 2.25 10.3387 3.0145 9.9951 3.6393L6.82145 9.40959C6.46526 10.0572 5.53472 10.0572 5.17854 9.40959L2.00488 3.6393C1.66124 3.0145 2.11327 2.25 2.82633 2.25L9.17365 2.25Z" fill="#991412"/>
</svg>
<span>Downwards</span>
</div> 


<!-- ------------Positive------------ -->
<div class="badge-green"><svg xmlns="http://www.w3.org/2000/svg" class="badge-info" viewBox="0 0 12 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.82635 9.75C2.11328 9.75 1.66126 8.9855 2.0049 8.3607L5.17856 2.59041C5.53474 1.94281 6.46528 1.94281 6.82146 2.59041L9.99512 8.3607C10.3388 8.9855 9.88673 9.75 9.17367 9.75L2.82635 9.75Z" fill="#2F4C0E"/>
</svg>

<span>Upwards</span>                                    
</div> 

<div class="badge-green"><svg xmlns="http://www.w3.org/2000/svg" class="badge-info" viewBox="0 0 12 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.17365 2.25C9.88672 2.25 10.3387 3.0145 9.9951 3.6393L6.82145 9.40959C6.46526 10.0572 5.53472 10.0572 5.17854 9.40959L2.00488 3.6393C1.66124 3.0145 2.11327 2.25 2.82633 2.25L9.17365 2.25Z" fill="#477315"/>
</svg>
<span>Downwards</span>
</div> 


<div class="badge-green-light"><svg xmlns="http://www.w3.org/2000/svg" class="badge-info" viewBox="0 0 12 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.82635 9.75C2.11328 9.75 1.66126 8.9855 2.0049 8.3607L5.17856 2.59041C5.53474 1.94281 6.46528 1.94281 6.82146 2.59041L9.99512 8.3607C10.3388 8.9855 9.88673 9.75 9.17367 9.75L2.82635 9.75Z" fill="#2F4C0E"/>
</svg>
<span>Upwards</span>
</div> 

<div class="badge-green-light"><svg xmlns="http://www.w3.org/2000/svg" class="badge-info" viewBox="0 0 12 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.17365 2.25C9.88672 2.25 10.3387 3.0145 9.9951 3.6393L6.82145 9.40959C6.46526 10.0572 5.53472 10.0572 5.17854 9.40959L2.00488 3.6393C1.66124 3.0145 2.11327 2.25 2.82633 2.25L9.17365 2.25Z" fill="#477315"/>
</svg>
<span>Downwards</span>
</div> 

     
      </div>
      `
    },

    {
      id: 'badge_data',
      title: 'Badge Data',
      code: `
      <div class="flex items-start flex-wrap gap-4">
      <!-- ------------Key------------ -->
   
     
     <div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-info">
     <path fill-rule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clip-rule="evenodd" />
   </svg>
   <span>Key</span>                                    
   </div> 

   <div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-info">
   <path fill-rule="evenodd" d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
 </svg>
 <span>Secure</span>                                    
 </div> 

 <div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-info">
 <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
</svg>
<span>User</span>                                    
</div> 


<div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-info">
<path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
</svg>
<span>Date</span>                                    
</div> 

<div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-info">
<path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
<path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
</svg>
<span>Email</span>                                    
</div> 


<div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-info">
<path d="M16.555 5.412a8.028 8.028 0 00-3.503-2.81 14.899 14.899 0 011.663 4.472 8.547 8.547 0 001.84-1.662zM13.326 7.825a13.43 13.43 0 00-2.413-5.773 8.087 8.087 0 00-1.826 0 13.43 13.43 0 00-2.413 5.773A8.473 8.473 0 0010 8.5c1.18 0 2.304-.24 3.326-.675zM6.514 9.376A9.98 9.98 0 0010 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 01-.351 3.759A13.54 13.54 0 0110 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 01-.352-3.758zM5.285 7.074a14.9 14.9 0 011.663-4.471 8.028 8.028 0 00-3.503 2.81c.529.638 1.149 1.199 1.84 1.66zM17.334 6.798a7.973 7.973 0 01.614 4.115 13.47 13.47 0 01-3.178 1.72 15.093 15.093 0 00.174-3.939 10.043 10.043 0 002.39-1.896zM2.666 6.798a10.042 10.042 0 002.39 1.896 15.196 15.196 0 00.174 3.94 13.472 13.472 0 01-3.178-1.72 7.973 7.973 0 01.615-4.115zM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 01-1.72 3.178 8.099 8.099 0 01-1.826 0 13.47 13.47 0 01-1.72-3.178c.855.151 1.735.23 2.633.23zM14.357 14.357a14.912 14.912 0 01-1.305 3.04 8.027 8.027 0 004.345-4.345c-.953.542-1.971.981-3.04 1.305zM6.948 17.397a8.027 8.027 0 01-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 001.305 3.04z" />
</svg>
<span>Website</span>                                    
</div> 

<div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="badge-info">
<path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
</svg>
<span>Phone</span>                                    
</div> 




     
      </div>
      `
    },

   
  ];
}
