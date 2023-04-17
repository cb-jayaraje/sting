import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BannersService {
  bannerDatas = [
    {
      id: 'banner_default',
      title: 'Default',
      code: `
      <div class="banner-container">

      <div class="info-container">
  
          <div class="banner-info">
      
              <div class="banner-details">
                  <p class="cb-text-h3">Most Secure and reliable payment gateway is here.</p>
                  <p class="cb-text-copy-regular">
                      With Chargebee’s robust subscription billing infrastructure and a
                      world-class payments experience built on APIs, this is a comprehensive solution you can trust.
                      <a href="#" class="btn-link">Learn more</a>
                  </p>
              </div>
      
              <div class="banner-actions flex">
                  <button class="btn btn-primary">Configure Now</button>
              </div>
      
          </div>
      
          <div class="banner-image">
              <div class="placeholder w-48 h-48 bg-neutral-400"></div>
          </div>
  
      </div>
  
  
  
      <div class="banner-controls">
          <button class="btn px-2 btn-icon-only btn-neutral-borderless h-min">
              <x-mark class="h-5 w-5"></x-mark>
          </button>
      </div>
  
  </div>

          `,
    },
    {
      id: 'banner_secondary',
      title: 'Secondary',
      code: `
      <div class="banner-container">

      <div class="info-container">
  
          <div class="banner-info">
      
              <div class="banner-details">
                  <p class="cb-text-h3">Most Secure and reliable payment gateway is here.</p>
                  <p class="cb-text-copy-regular">
                      With Chargebee’s robust subscription billing infrastructure and a
                      world-class payments experience built on APIs, this is a comprehensive solution you can trust.
                      <a href="#" class="btn-link">Learn more</a>
                  </p>
              </div>
      
              <div class="banner-actions">
                  <button class="btn btn-primary">Primary Action</button>
                  <button class="btn btn-neutral">Secondary Action</button>
              </div>
      
          </div>
      
          <div class="banner-image">
              <div class="placeholder w-48 h-48 bg-neutral-400"></div>
          </div>
  
      </div>
  
  
  
      <div class="banner-controls">
          <button class="btn px-2 btn-icon-only btn-neutral-borderless h-min">
              <x-mark class="h-5 w-5"></x-mark>
          </button>
      </div>
  
  </div>


        `,
    },
    {
      id: 'banner_nondismissable',
      title: 'Non Dismissible',
      code: `
      <div class="banner-container">

      <div class="info-container">
  
          <div class="banner-info ">
      
              <div class="banner-details">
                  <p class="cb-text-h3">Most Secure and reliable payment gateway is here.</p>
                  <p class="cb-text-copy-regular">
                      With Chargebee’s robust subscription billing infrastructure and a
                      world-class payments experience built on APIs, this is a comprehensive solution you can trust.
                      <a href="#" class="btn-link">Learn more</a>
                  </p>
              </div>
      
              <div class="banner-actions">
                  <button class="btn btn-primary">Primary Action</button>
              </div>
      
          </div>
      
          <div class="banner-image">
              <div class="placeholder w-48 h-48 bg-neutral-400"></div>
          </div>
  
      </div>
  
  
  
  </div>


        `,
    },
   
  ];
}
