import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class SignInFormsService {

    siginInFormDatas = [
        {
            "id": "sign_1",
            "title": "Sign in Card",
            "code": `      <!--sign in box starts-->
            <div class=" flex flex-col justify-start py-12 px-4 sm:px-6 lg:flex-none lg:px-0 xl:px-24">
             <div class="min-h-full flex flex-col justify-start py-12 sm:px-6 lg:px-8  ">
                 <div class="sm:mx-auto sm:w-full sm:max-w-md  md:w-full md:max-w-xl">
                 
                         
                   <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Sign in to your account
                   </h2>
                  
                 </div>
               
                 <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md md:w-full md:max-w-md lg:max">
                   <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
         
                   
         
                     <form class="space-y-6" action="#" method="POST">
         
         
                       <p>Enter the same email id you used for registration.</p>
                       <div class="form-control">
                         <label for="email" class="label">
                             Email
                         </label>
                         
                         <div class="mt-1 "  >
                           <input id="email" x-model="email" placeholder="" name="email" type="email" autocomplete="email" required  class="input">
                           
                         
                           
                         </div>
                      
                       </div>
               
                      
                      
                     
               
                       <div>
                         <button type="button" class="btn btn-primary btns">
                           Sign in 
                         </button>
                       </div>
                     </form>
               
                     <div class="mt-6">
                       <div class="relative">
                     
                         <div class="relative flex justify-center text-sm">
                           <span class="px-2 bg-white text-gray-500">
                             New to Chargebee? <a href="#" class="text-indigo-500">Join now</a>
                           </span>
                         </div>
                       </div>
               
                      
                     </div>
                   </div>
                 </div>
               </div>
         </div>
         <!--sign in box ends-->`
        },
        {
            "id": "sign_2",
            "title": "Sign in card with error state",
            "code": `     <!--sign in box starts-->
            <div class="flex flex-col justify-start py-12 px-4 sm:px-6 lg:flex-none lg:px-0 xl:px-24">
             <div class="min-h-full flex flex-col justify-start py-12 sm:px-6 lg:px-8  ">
                 <div class="sm:mx-auto sm:w-full sm:max-w-md  md:w-full md:max-w-xl">
                 
                         
                   <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Sign in to your account
                   </h2>
                  
                 </div>
               
                 <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md md:w-full md:max-w-md lg:max">
                   <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
         
                     <!--server error starts-->
                     <div class="alert alert-danger mb-3">
                         <div class="flex">
                         <div class="flex-shrink-0">
                           <svg class="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                             <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                           </svg>
                         </div>
                         <div class="ml-3">
                           <h3 class="title ">Invalid email or password</h3>
                           
                         </div>
                         </div>
                         </div>
                                   
         <!--servererror ends-->
         
                     <form class="space-y-6" action="#" method="POST">
         
         
                       <p>Enter the same email id you used for registration.</p>
                       <div class="form-control">
                         <label for="email" class="label">
                             Email
                         </label>
                         
                         <div class="mt-1 "  >
                           <input id="email" x-model="email" placeholder="" name="email" type="email" autocomplete="email" required  class="input">
                           
                         
                           
                         </div>
                         <div class="h-4 mt-2" >
                           <p  class=" input-error" id="email-error" >Should not be empty</p>
                         </div>
                       </div>
               
                      
                      
                     
               
                       <div>
                         <button type="button" class="btn btn-primary btns">
                           Sign in 
                         </button>
                       </div>
                     </form>
               
                     <div class="mt-6">
                       <div class="relative">
                     
                         <div class="relative flex justify-center text-sm">
                           <span class="px-2 bg-white text-gray-500">
                             New to Chargebee? <a href="#" class="text-indigo-500">Join now</a>
                           </span>
                         </div>
                       </div>
               
                      
                     </div>
                   </div>
                 </div>
               </div>
         </div>
         <!--sign in box ends-->`

           
        }
    ];
}