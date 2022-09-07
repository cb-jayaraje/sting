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
                            <input id="1comments" aria-describedby="comments-description" name="comments" checked type="checkbox" class="checkbox">
                          </div>
    
                          <div class="ml-3 text-sm">
                            <label for="1comments" class="text-gray-700 label">Comments</label>
                            <p id="comments-description" class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                          </div>
                        </div>
    
                        <div class="relative flex items-start">
                          <div class="flex items-center h-5">
                            <input id="1candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="checkbox">
                          </div>
    
                          <div class="ml-3 text-sm">
                            <label for="1candidates" class="text-gray-700 label">Candidates</label>
                            <p id="candidates-description" class="text-gray-500">Get notified when a candidate applies for a job.</p>
                          </div>
                        </div>
    
                        <div class="relative flex items-start">
                          <div class="flex items-center h-5">
                            <input id="1offers" aria-describedby="offers-description" name="offers" type="checkbox" class="checkbox">
                          </div>
    
                          <div class="ml-3 text-sm">
                            <label for="1offers" class="text-gray-700 label">Offers</label>
                            <p id="offers-description" class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                          </div>
                        </div>
    
                      </fieldset>
    
                </div>
                `
        }

    ];

}