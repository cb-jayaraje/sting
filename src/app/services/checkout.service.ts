import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class CheckoutService {

    checkoutDatas: any = [
        {
            id: 'checkout_1',
            title: 'Gelato Checkout',
            code: `
            <section class="px-8 py-6 relative">
            <h1 class="text-2xl font-bold">Your order</h1>
        
            <div class="flex items-start flex-wrap gap-8 sm:flex-nowrap ">
                <!-- left -->
                <div class=" py-6 grid grid-cols-1 gap-6 w-full sm:w-1/2 md:w-3/5 rounded-lg">
                    <!-- Card one -->    
                    <div class="w-full flex p-4 lg:p-8 rounded-lg bg-white dark:bg-gray-900 shadow-sm border gap-x-8">
                        <div class="flex-grow-0">
                            <img alt="" class="rounded-md" src="https://picsum.photos/seed/picsum/200" />
                          </div>
                          <div class="sm:w-3/4">
                            <div class="grid grid-cols-1 gap-2">
                                <span class="badge bg-gray-500 inline-flex w-min text-white">Plan</span>
                                <h2 class="font-bold">Subscription Plan</h2>
                                <p class="text-sm font-light text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper ex sem....</p>
                                <div class="flex flex-wrap items-center gap-2 mt-2">
                                    <span class="inline-flex flex-nowrap items-center gap-1 text-sm text-gray-900 font-extralight">$00.00
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                      </span>
        
                                      <div class="flex flex-nowrap flex-grow-0 border px-0 mr-4 rounded-md items-center" >
                                        <button class="p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400 flex-shrink-0">
                                          <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                          </svg>
                                        </button>
                                        <span class="justify-center w-6 text-center">1</span>
                                        <button class="p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400 flex-shrink-0">
                                          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                          </svg>
                                        </button>
                                      </div>
        
                                      <span class="font-bold flex-grow text-left sm:text-right">$00.00</span>
                      
                                </div>
                            </div>
                          </div>
                    </div>
                    <!-- card one end -->
        
                    <!-- Card one -->    
                    <div class="w-full flex p-4 lg:p-8 rounded-lg bg-white dark:bg-gray-900 shadow-sm border gap-x-8">
                        
                          <div class="w-full space-y-6">
                            <div class="grid grid-cols-1 gap-2">
                                <span class="badge bg-gray-100 inline-flex w-16 text-gray-500">Add on</span>
                                <h2 class="font-bold">Subscription Plan</h2>
                                <p class="text-sm font-light text-gray-500 w-2/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper ex sem....</p>
                                <div class="flex flex-wrap items-center gap-2 mt-2">
                                    <span class="inline-flex flex-nowrap items-center gap-1 text-sm text-gray-900 font-extralight">$00.00
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                      </span>
        
                                      <div class="flex flex-nowrap flex-grow-0 border px-0 mr-4 rounded-md items-center" >
                                        <button class="p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400 flex-shrink-0">
                                          <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                          </svg>
                                        </button>
                                        <span class="justify-center w-6 text-center">1</span>
                                        <button class="p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400 flex-shrink-0">
                                          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                          </svg>
                                        </button>
                                      </div>
        
                                      <span class="font-bold flex-grow text-left sm:text-right">$00.00</span>
                      
                                </div>
                            </div>
                            <div class="">
                                <a class="text-sm font-medium text-gray-700">
                                Remove</a>
                              </div>
                          </div>
                    </div>
                    <!-- card one end -->
                </div>
                <!-- left -->
                <!--right start-->
                <div 
                class="w-full sm:w-1/2 md:w-2/5 sticky top-2 px-0">
                <section class="space-y-4 px-8 py-6 rounded-lg ">
                  <h2 class="font-bold">Order summary</h2>
                  <div class="grid grid-cols-1 gap-3 text-sm ">
                    <div class="space-y-4">
                      <div class="grid grid-flow-col grid-cols-2 justify-between gap-2 w-full g-item font-light text-sm text-gray-500">
                        <div>
                          <p>Subtotal (3 items)</p>
                        </div>
                        <div class="text-right">$00.00</div>
                      </div>
        
                      <div class="grid grid-flow-col grid-cols-2 gap-2 w-full g-item font-light text-sm text-gray-500">
                        <div>
                          <p>Taxes (20%)</p>
                        </div>
                        <div class="text-right">$00.00</div>
                      </div>
                    </div>
                  </div>
                  <hr class="border-dashed">
                  <div class="  border-x-0" 
                  >
                  
                              <div class="form-control">
                    <div class="mt-1 flex gap-3">
                      <input type="text" name="email" id="email" class="input" placeholder="Enter voucher code">
                      <button  class=" btn btn-outline border-primary-300 border-2" 
                      >Apply</button>
                    </div>
                  </div>
                        
                   
                  </div> 
        
                  <hr class="border-dashed">  
                    <div class="flex justify-between text-lg font-bold">
                      <div>Total</div>
                      <div>$000.00</div>
                    </div>
                  <hr class="border-dashed">
        
                    <div class="space-y-3">
                      <a href="#" class="btn btn-primary text-xl w-full">Checkout Securely</a>
                      <p class="text-center pt-2 text-gray-500 text-md font-light">or checkout with</p>
                      <div class="flex gap-4 ">
                        <a href="#" class="w-full flex justify-center p-2.5 bg-white border border-black text-white rounded-md">
                          <img src="https://via.placeholder.com/20" style="height: 20px" alt="Apple Pay">
                        </a>
                        <a href="#" class="w-full flex justify-center p-2.5 bg-gray-50 border border-gray-300 text-white rounded-md">
                          <img src="https://via.placeholder.com/20" style="height: 20px" alt="PayPal">
                        </a>
                      </div>
                    </div>
                  </section>
                  <div class="p-6 flex flex-nowrap justify-center gap-1">
                    <div class="flex flex-nowrap gap-2 w-min whitespace-nowrap items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 flex-grow-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" /></svg>
                    <p class="text-base font-light"><span class="text-gray-400">Secure checkout by </span> Chargebee</p> </div>
                    
                  </div>
                </div>
                <!--right ends-->
            </div>
          
        </section>
            `
        }
    ];

}