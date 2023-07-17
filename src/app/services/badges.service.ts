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

    {
      id: 'badge_graphic',
      title: 'Badge Graphic',
      code: `
      <div class="flex items-start flex-wrap gap-4">
      <!-- ------------Key------------ -->
   
     
     <div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" class="badge-info" viewBox="0 0 16 16" fill="none">
     <path d="M5.33582 7.9926L15.9038 5.47641V0H10.4274L5.33582 7.9926Z" fill="#FF3300"/>
     <path d="M0.0961914 7.90385C0.0961914 8.5551 0.170197 9.19155 0.33301 9.79839L5.33578 7.99266L0.288606 6.17212C0.170197 6.73456 0.0961914 7.3118 0.0961914 7.90385Z" fill="#FF3300"/>
     <path d="M1.96118 2.79762L5.33583 7.99281L6.88995 0.0742188C4.9214 0.35544 3.18967 1.34711 1.96118 2.79762Z" fill="#FF3300"/>
     <path d="M5.33582 7.99268L15.9038 10.5089V16.0001H10.4274L5.33582 7.99268Z" fill="#FF3300"/>
     <path d="M1.96118 13.1879L5.33583 7.99268L6.88995 15.9113C4.9214 15.6449 3.18967 14.6384 1.96118 13.1879Z" fill="#FF3300"/>
     </svg>
   <span>Chargebee</span>                                    
   </div> 

   <div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg"class="badge-info" viewBox="0 0 16 16" fill="none">
   <rect width="16" height="16" rx="4" fill="#635BFF"/>
   <path fill-rule="evenodd" clip-rule="evenodd" d="M7.37096 6.20725C7.37096 5.82485 7.68686 5.65305 8.19673 5.65305C9.04165 5.67132 9.87076 5.88571 10.6186 6.2793V4.01259C9.84916 3.71085 9.02874 3.56031 8.20228 3.56922C6.22929 3.56922 4.91028 4.60005 4.91028 6.34026C4.91028 9.03372 8.61239 8.59589 8.61239 9.75973C8.61239 10.2086 8.2189 10.3527 7.68132 10.3527C6.73428 10.3005 5.81228 10.0292 4.98787 9.56022V11.8823C5.82791 12.2454 6.73295 12.4339 7.64807 12.4366C9.67093 12.4366 11.0675 11.439 11.0675 9.66552C11.0842 6.77809 7.37096 7.29904 7.37096 6.20725Z" fill="white"/>
   </svg>
 <span>Stripe</span>                                    
 </div> 

 <div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" class="badge-info" viewBox="0 0 16 16" fill="none">
 <path d="M13.4398 4.06503C13.6349 2.82044 13.4384 1.97352 12.7652 1.20641C12.024 0.361854 10.685 1.81198e-05 8.97191 1.81198e-05H3.99907C3.64894 1.81198e-05 3.35089 0.254785 3.29634 0.60065L1.22557 13.7313C1.18477 13.9905 1.38497 14.2247 1.64725 14.2247H4.7172L4.50534 15.5685C4.46964 15.7951 4.64476 16 4.87425 16H7.46179C7.76812 16 8.02887 15.7771 8.07662 15.4746L8.10201 15.3431L8.58951 12.252L8.6209 12.0811C8.66865 11.7786 8.92939 11.5557 9.23572 11.5557H9.62277C12.1297 11.5557 14.0925 10.5372 14.6661 7.5918C14.9058 6.36101 14.7819 5.33368 14.1481 4.61148C13.9564 4.393 13.7179 4.2124 13.4398 4.06503Z" fill="#469CDB"/>
 <path d="M13.4397 4.06515C13.6349 2.82055 13.4383 1.97363 12.7652 1.20653C12.024 0.361969 10.685 0.000134468 8.97185 0.000134468H3.99901C3.64887 0.000134468 3.35082 0.254901 3.29628 0.600765L1.22551 13.7314C1.1847 13.9906 1.38491 14.2249 1.64719 14.2249H4.71714L5.48836 9.33477L5.46444 9.48812C5.51899 9.14227 5.81456 8.88757 6.16468 8.88757H7.62375C10.4894 8.88757 12.7332 7.7233 13.3888 4.35639C13.4082 4.2567 13.4248 4.16013 13.4397 4.06515Z" fill="#232D62"/>
 <path d="M6.31676 4.08169C6.34955 3.87366 6.4831 3.7033 6.66288 3.61717C6.74455 3.57802 6.83584 3.55625 6.93158 3.55625H10.8296C11.2914 3.55625 11.7219 3.5865 12.1156 3.64989C12.2281 3.66798 12.3376 3.68879 12.4439 3.71241C12.5502 3.73602 12.6534 3.76237 12.7534 3.79159C12.8034 3.80618 12.8525 3.82151 12.9008 3.83757C13.0941 3.90173 13.274 3.97742 13.4397 4.06515C13.6349 2.82055 13.4383 1.97363 12.7652 1.20653C12.024 0.361969 10.685 0.000134468 8.97185 0.000134468H3.99907C3.64887 0.000134468 3.35082 0.254901 3.29628 0.600765L1.22551 13.7315C1.1847 13.9906 1.38491 14.2249 1.64719 14.2249H4.7172L5.48836 9.33477L6.31676 4.08169Z" fill="#293982"/>
 </svg>
<span>PayPal</span>                                    
</div> 












     
      </div>
      `
    },
    {
      id: 'badge_flag',
      title: 'Badge Flag',
      code: `
      <div class="flex items-start flex-wrap gap-4">
      <!-- ------------Flag------------ -->
   
     
     <div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
     <g clip-path="url(#clip0_4843_1438)">
     <path d="M0 0H21.3333V16H0V0Z" fill="#012169"/>
     <path d="M2.5 0L10.6333 6.03333L18.7333 0H21.3333V2.06667L13.3333 8.03333L21.3333 13.9667V16H18.6667L10.6667 10.0333L2.7 16H0V14L7.96667 8.06667L0 2.13333V0H2.5Z" fill="white"/>
     <path d="M14.1333 9.36667L21.3333 14.6667V16L12.3 9.36667H14.1333ZM8 10.0333L8.2 11.2L1.8 16H0L8 10.0333ZM21.3333 0V0.1L13.0333 6.36667L13.1 4.9L19.6667 0H21.3333ZM0 0L7.96667 5.86667H5.96667L0 1.4V0Z" fill="#C8102E"/>
     <path d="M8.03333 0V16H13.3667V0H8.03333ZM0 5.33333V10.6667H21.3333V5.33333H0Z" fill="white"/>
     <path d="M0 6.43333V9.63333H21.3333V6.43333H0ZM9.1 0V16H12.3V0H9.1Z" fill="#C8102E"/>
     </g>
     <defs>
     <clipPath id="clip0_4843_1438">
     <rect width="21.3333" height="16" rx="2" fill="white"/>
     </clipPath>
     </defs>
     </svg>
   <span>United Kingdom</span>                                    
   </div> 

   <div class="badge-neutral"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
   <g clip-path="url(#clip0_4843_1448)">
   <path d="M0.333313 0H21.6666V16H0.333313V0Z" fill="#ED2939"/>
   <path d="M6.33331 0H10.3333V16H6.33331V0Z" fill="white"/>
   <path d="M0.333313 6H21.6666V10H0.333313V6Z" fill="white"/>
   <path d="M7.33331 0H9.33331V16H7.33331V0Z" fill="#002664"/>
   <path d="M0.333313 7H21.6666V9H0.333313V7Z" fill="#002664"/>
   </g>
   <defs>
   <clipPath id="clip0_4843_1448">
   <rect x="0.333313" width="21.3333" height="16" rx="2" fill="white"/>
   </clipPath>
   </defs>
   </svg>
 <span>Norway</span>                                    
 </div> 

 
     
      </div>
      `
    },

   
  ];
}
