import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class CheckboxService {

    checkboxDatas = [
        {
            id: "checkbox_1",
            title: "Checkbox list with description",
            code: 
                `
                <!-- Checkbox list with description -->

                <div class="form-control">
                    
                    <fieldset class="space-y-5">
                        <legend class="sr-only">Notifications</legend>
    
                        <div class="relative flex items-start">
                          <div class="flex items-center h-5">
                            <input id="comments" aria-describedby="comments-description" name="comments" checked type="checkbox" class="checkbox">
                          </div>
    
                          <div class="ml-3 text-sm">
                            <label for="comments" class="label">Comments</label>
                            <p id="comments-description" class="cb-text-copy-small">Get notified when someones posts a comment on a posting.</p>

                          </div>
                        </div>
    
                        <div class="relative flex items-start">
                          <div class="flex items-center h-5">
                            <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="checkbox">
                          </div>
    
                          <div class="ml-3 text-sm">
                            <label for="candidates" class="label">Candidates</label>
                            <p id="candidates-description" class="cb-text-copy-small">Get notified when a candidate applies for a job.</p>

                          </div>
                        </div>
    
                        <div class="relative flex items-start">
                          <div class="flex items-center h-5">
                            <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="checkbox">
                          </div>
    
                          <div class="ml-3 text-sm">
                            <label for="offers" class=" label">Offers</label>
                            <p id="offers-description" class="cb-text-copy-small">Get notified when a candidate accepts or rejects an offer.</p>

                          </div>
                        </div>
    
                      </fieldset>
    
                </div>
                `
        },
        {
            id: "checkbox_2",
            title: "Checkbox list with inline description",
            code: 
                `
                <!-- Checkbox list with inline description -->

                <div class="form-control">
                    
                    <fieldset class="space-y-5">
                        <legend class="sr-only">Notifications</legend>
                        
                        <div class="relative flex items-start">
                          <div class="flex items-center h-5">
                            <input id="comments2" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="comments2" class=" label">New comments</label>
                            <span id="comments-description" class="cb-text-copy-small"><span class="sr-only">New comments </span>so you always know what's happening.</span>

                          </div>
                        </div>
    
                        <div class="relative flex items-start">
                          <div class="flex items-center h-5">
                            <input id="candidates2" aria-describedby="candidates-description" name="candidates" type="checkbox" class="checkbox">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="candidates2" class="label">New candidates</label>
                            <span id="candidates-description" class="cb-text-copy-small"><span class="sr-only">New candidates </span>who apply for any open postings.</span>

                          </div>
                        </div>
    
                        <div class="relative flex items-start">
                          <div class="flex items-center h-5">
                            <input id="offers2" aria-describedby="offers-description" name="offers" type="checkbox" class="checkbox">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="offers2" class="label">Offers</label>
                            <span id="offers-description" class="cb-text-copy-small"><span class="sr-only">Offers </span>when they are accepted or rejected by candidates.</span>

                          </div>
                        </div>
    
                      </fieldset>
    
                </div>
                `
        },
        {
            id: "checkbox_3",
            title: "List with checkbox on right",
            code: 
                `
                <!-- List with checkbox on right -->

                <div class="form-control">
                    
                    <fieldset class="border-t border-b border-neutral-200">
                        <legend class="sr-only">Notifications</legend>
                        <div class="divide-y divide-neutral-200">
    
                          <div class="relative flex items-start py-4">
                            <div class="min-w-0 flex-1 text-sm">
                              <label for="comments3" class=" label">Comments</label>
                              <p id="comments-description" class="cb-text-copy-small">Get notified when someones posts a comment on a posting.</p>

                            </div>
                            <div class="ml-3 flex items-center h-5">
                              <input id="comments3" aria-describedby="comments-description" name="comments" type="checkbox" class="checkbox">
                            </div>
                          </div>
    
                          <div class="relative flex items-start py-4">
                            <div class="min-w-0 flex-1 text-sm">
                              <label for="candidates3" class="label">Candidates</label>
                              <p id="candidates-description" class="cb-text-copy-small">Get notified when a candidate applies for a job.</p>

                            </div>
                            <div class="ml-3 flex items-center h-5">
                              <input id="candidates3" aria-describedby="candidates-description" name="candidates" type="checkbox" class="checkbox">
                            </div>
                          </div>
    
                          <div class="relative flex items-start py-4">
                            <div class="min-w-0 flex-1 text-sm">
                              <label for="offers3" class="label">Offers</label>
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
            id: "checkout_",
            title: "Checkbox list with inline description",
            code: 
                `
                <!-- Checkbox list with inline description -->
    
                <div class="form-control">
                    
                    <fieldset>
                        <legend class="cb-text-h5 ">Members</legend>
                        <div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
    
                          <div class="relative flex items-start py-4">
                            <div class="min-w-0 flex-1 text-sm">
                              <label for="person-1" class="label select-none">Annette Black</label>

                            </div>
                            <div class="ml-3 flex items-center h-5">
                              <input id="person-1" name="person-1" type="checkbox" class="checkbox">
                            </div>
                          </div>
                      
                          <div class="relative flex items-start py-4">
                            <div class="min-w-0 flex-1 text-sm">
                              <label for="person-2" class="label select-none">Cody Fisher</label>

                            </div>
                            <div class="ml-3 flex items-center h-5">
                              <input id="person-2" name="person-2" type="checkbox" class="checkbox">
                            </div>
                          </div>
                      
                          <div class="relative flex items-start py-4">
                            <div class="min-w-0 flex-1 text-sm">
                              <label for="person-3" class="label select-none">Courtney Henry</label>

                            </div>
                            <div class="ml-3 flex items-center h-5">
                              <input id="person-3" name="person-3" type="checkbox" class="checkbox">
                            </div>
                          </div>
                      
                          <div class="relative flex items-start py-4">
                            <div class="min-w-0 flex-1 text-sm">
                              <label for="person-4" class="label  select-none">Kathryn Murphy</label>

                            </div>
                            <div class="ml-3 flex items-center h-5">
                              <input id="person-4" name="person-4" type="checkbox" class="checkbox">
                            </div>
                          </div>
                      
                          <div class="relative flex items-start py-4">
                            <div class="min-w-0 flex-1 text-sm">
                              <label for="person-5" class="label select-none">Theresa Webb</label>

                            </div>
                            <div class="ml-3 flex items-center h-5">
                              <input id="person-5" name="person-5" type="checkbox" class="checkbox">
                            </div>
                          </div>
                          
                        </div>
                      </fieldset>
    
                </div>
                `
        },

    ];

}