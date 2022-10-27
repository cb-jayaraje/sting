import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class CheckboxService {

    checkboxDatas = [
      {
        id: "checkbox_1",
        title: "Basic",
        code: 
            `
            <!-- Checkbox list with description -->

            <div class="form-control">
                
                <fieldset class="space-y-4">
                    <legend class="sr-only">Notifications</legend>

                      <div class="flex items-center gap-3">
                        <input id="ckb01" aria-describedby="comments-description" name="comments" checked type="checkbox" class="checkbox">
                        <label for="ckb01" class="label cursor-pointer">Get notified when someones posts a comment on a posting.</label>
                      </div>

                      <div class="flex items-center gap-3">
                        <input id="ckb02" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox">
                        <label for="ckb02" class="label cursor-pointer">Get notified when a candidate applies for a job.</label>
                      </div>
                      
                      <div class="flex items-center gap-3 opacity-30">
                        <input id="ckb03" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox" disabled>
                        <label for="ckb03" class="label cursor-not-allowed">Get notified when a candidate accepts or rejects an offer.</label>
                      </div>

                  </fieldset>

            </div>
            `
    },
    {
            id: "checkbox_2",
            title: "Checkbox list with description",
            code: 
                `
                <!-- Checkbox list with description -->

                <div class="form-control">
                    
                    <fieldset class="space-y-4">
                        <legend class="sr-only">Notifications</legend>
    
                        <div class="relative flex items-start gap-3">
                            <input id="comments" aria-describedby="comments-description" name="comments" checked type="checkbox" class="checkbox">
                            <div class="-mt-1">
                              <label for="comments" class="label !font-semibold cursor-pointer">Comments</label>
                              <p id="comments-description" class="cb-text-copy-small">Get notified when someones posts a comment on a posting.</p>
                            </div>
                        </div>
    
                        <div class="relative flex items-start gap-3">
                            <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="checkbox">
                            <div class="-mt-1">
                              <label for="candidates" class="label !font-semibold cursor-pointer">Candidates</label>
                              <p id="candidates-description" class="cb-text-copy-small">Get notified when a candidate applies for a job.</p>
                            </div>
                        </div>
    
                        <div class="relative flex items-start gap-3">
                            <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="checkbox">
                            <div class="-mt-1">
                              <label for="offers" class="label !font-semibold cursor-pointer">Offers</label>
                              <p id="offers-description" class="cb-text-copy-small">Get notified when a candidate accepts or rejects an offer.</p>
                            </div>
                        </div>
    
                      </fieldset>
    
                </div>
                `
        },
        {
            id: "checkbox_3",
            title: "Checkbox list with inline description",
            code: 
                `
                <!-- Checkbox list with inline description -->

                <div class="form-control">
                    
                    <fieldset class="space-y-4">
                        <legend class="sr-only">Notifications</legend>
                        
                        <div class="flex items-center gap-3">
                            <input id="comments2" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox">
                            <label for="comments2" class="label !font-semibold cursor-pointer">New comments
                            <span class="cb-text-copy-regular">so you always know what's happening.</span></label>
                        </div>
    
                        <div class="flex items-center gap-3">
                            <input id="candidates2" aria-describedby="candidates-description" name="candidates" type="checkbox" class="checkbox">
                            <label for="candidates2" class="label !font-semibold cursor-pointer">New candidates
                            <span class="cb-text-copy-regular">who apply for any open postings.</span></label>
                        </div>
    
                        <div class="flex items-center gap-3">
                            <input id="offers2" aria-describedby="offers-description" name="offers" type="checkbox" class="checkbox">
                            <label for="offers2" class="label !font-semibold cursor-pointer">Offers
                            <span class="cb-text-copy-regular">when they are accepted or rejected by candidates.</span></label>
                        </div>
    
                      </fieldset>
    
                </div>
                `
        },
        {
            id: "checkbox_4",
            title: "List with checkbox on right",
            code: 
                `
                <!-- List with checkbox on right -->

                <div class="form-control max-w-lg">
                    
                    <fieldset class="border-t border-b border-neutral-200">
                        <legend class="sr-only">Notifications</legend>
                        <div class="divide-y divide-neutral-200">
    
                          <div class="relative flex items-start py-4">
                            <div class="min-w-0 flex-1 text-sm">
                              <label for="comments3" class="label !font-semibold cursor-pointer">Comments</label>
                              <p id="comments-description" class="cb-text-copy-small">Get notified when someones posts a comment on a posting.</p>

                            </div>
                            <div class="ml-3 flex items-center h-5">
                              <input id="comments3" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox">
                            </div>
                          </div>
    
                          <div class="relative flex items-start py-4">
                            <div class="min-w-0 flex-1 text-sm">
                              <label for="candidates3" class="label !font-semibold cursor-pointer">Candidates</label>
                              <p id="candidates-description" class="cb-text-copy-small">Get notified when a candidate applies for a job.</p>

                            </div>
                            <div class="ml-3 flex items-center h-5">
                              <input id="candidates3" aria-describedby="candidates-description" name="candidates" type="checkbox" class="checkbox">
                            </div>
                          </div>
    
                          <div class="relative flex items-start py-4">
                            <div class="min-w-0 flex-1 text-sm">
                              <label for="offers3" class="label !font-semibold cursor-pointer">Offers</label>
                              <p id="offers-description" class="cb-text-copy-small">Get notified when a candidate accepts or rejects an offer.</p>

                            </div>
                            <div class="ml-3 flex items-center h-5">
                              <input id="offers3" aria-describedby="offers-description" name="offers" type="checkbox" class="checkbox">
                            </div>
                          </div>
    
                        </div>
                      </fieldset>
    
                </div>
                `
        },
        {
            id: "checkout_5",
            title: "Checkbox list with inline description",
            code: 
                `
                <!-- Checkbox list with inline description -->
    
                <div class="form-control max-w-lg">
                    
                    <fieldset>
                        <legend class="cb-text-h5 ">Members</legend>
                        <div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
    
                          <div class="relative flex items-center justify-between py-4">
                              <label for="person-1" class="label select-none cursor-pointer">Annette Black</label>
                              <input id="person-1" name="person-1" type="checkbox" class="checkbox">
                          </div>
                      
                          <div class="relative flex items-center justify-between py-4">
                              <label for="person-2" class="label select-none cursor-pointer">Cody Fisher</label>
                              <input id="person-2" name="person-2" type="checkbox" class="checkbox">
                          </div>
                      
                          <div class="relative flex items-center justify-between py-4">
                              <label for="person-3" class="label select-none cursor-pointer">Courtney Henry</label>
                              <input id="person-3" name="person-3" type="checkbox" class="checkbox">
                          </div>
                      
                          <div class="relative flex items-center justify-between py-4">
                              <label for="person-4" class="label select-none cursor-pointer">Kathryn Murphy</label>
                              <input id="person-4" name="person-4" type="checkbox" class="checkbox">
                          </div>
                          
                        </div>
                      </fieldset>
    
                </div>
                `
        },

    ];

}