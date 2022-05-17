import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ButtonService { 

    buttonDatas = [
        {
            id: 'button_1',
            title: 'Button outline',
            code: `
            <button type="button" class="btn-outline  px-2.5 py-1.5 text-xs ">Button text</button>
            <button type="button" class="btn-outline px-3 py-2 text-sm leading-4">Button text</button>
            <button type="button" class="btn-outline px-4 py-2 text-sm ">Button text</button>
            <button type="button" class="btn-outline px-4 py-2 text-base ">Button text</button>
            <button type="button" class="btn-outline px-6 py-3 text-base ">Button text</button>
            `
        },
        {
            id: 'button_2',
            title: 'Button solid',
            code: `<button type="button" class=" btn btn-primary">Button text</button>
            <button type="button" class=" btn btn-secondary">Button text</button>
            <button type="button" class=" btn btn-info">Button text</button>
            <button type="button" class=" btn btn-warning">Button text</button>
            <button type="button" class=" btn btn-success ">Button text</button>
            <button type="button" class=" btn btn-danger ">Button text</button>
           
            `
        },
        {
            id: 'button_3',
            title: 'Button with leading icon',
            code: `<button type="button" class="btn btn-primary">
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Button text
          </button>
          
          <button type="button" class="btn btn-secondary">
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Button text
          </button>
          
          <button type="button" class="btn btn-info">
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Button text
          </button>
          
          <button type="button" class="btn btn-warning">
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Button text
          </button>
          
          <button type="button" class="btn btn-success">
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Button text
          </button>
          
          <button type="button" class="btn btn-danger">
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Button text
          </button>
          
         
          
          
            `
        },
        {
            id: 'button_4',
            title: 'Button with trailing icons',
            code: `<button type="button" class="btn btn-primary">
            Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
           
          </button>
          
          <button type="button" class="btn btn-secondary">
          Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          
          </button>
          
          <button type="button" class="btn btn-info">
          Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
           
          </button>
          
          <button type="button" class="btn btn-warning">
          Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          

          </button>
          
          <button type="button" class="btn btn-success">
          Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            
          </button>
          
          <button type="button" class="btn btn-danger">
          Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            
          </button>
          
         
            `
        },
        {
            id: 'button_5',
            title: 'Round buttons',
            code: `<button type="button" class="btn btn-primary rounded-full">
            Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
           
          </button>
          
          <button type="button" class="btn btn-secondary rounded-full">
          Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          
          </button>
          
          <button type="button" class="btn btn-info rounded-full">
          Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
           
          </button>
          
          <button type="button" class="btn btn-warning rounded-full">
          Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          

          </button>
          
          <button type="button" class="btn btn-success rounded-full">
          Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            
          </button>
          
          <button type="button" class="btn btn-danger rounded-full">
          Button text
            <!-- Heroicon name: solid/mail -->
            <svg class="btn-trailing-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            
          </button>
          
         
            `
        },
        {
            id: 'button_6',
            title: 'Circular buttons',
            code: `<button type="button" class="btn btn-primary rounded-full p-2">
          
            <!-- Heroicon name: solid/mail -->
            <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
        
           
          </button>
          
          <button type="button" class="btn btn-secondary rounded-full p-2">
          
          <!-- Heroicon name: solid/mail -->
          <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
      
         
        </button>
          
        <button type="button" class="btn btn-info rounded-full p-2">
          
          <!-- Heroicon name: solid/mail -->
          <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
      
         
        </button>
          
        <button type="button" class="btn btn-warning rounded-full p-2">
          
        <!-- Heroicon name: solid/mail -->
        <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
      </svg>
    
       
      </button>
          
      <button type="button" class="btn btn-success rounded-full p-2">
          
      <!-- Heroicon name: solid/mail -->
      <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
    </svg>
  
     
    </button>
          
    <button type="button" class="btn btn-danger rounded-full p-2">
          
    <!-- Heroicon name: solid/mail -->
    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
  </svg>

   
  </button>
          
 
            `
        }
    ]
}