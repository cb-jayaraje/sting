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

            <div class="form-control checkbox-group">
                
                <fieldset>
                    <legend class="sr-only">Notifications</legend>
                    <div class="checkbox-list">

                      <div>
                        <input id="ckb01" name="comments" checked type="checkbox" class="checkbox">
                        <label for="ckb01" class="checkbox-label">
                          Get notified when someones posts a comment on a posting.</label>
                      </div>

                      <div>
                        <input id="ckb02" name="comments" type="checkbox" class="checkbox">
                        <label for="ckb02" class="checkbox-label">
                          Get notified when a candidate applies for a job.</label>
                      </div>
                      
                      <div class="opacity-30">
                        <input id="ckb03" name="comments" type="checkbox" class="checkbox" disabled>
                        <label for="ckb03" class="checkbox-label cursor-not-allowed">
                          Get notified when a candidate accepts or rejects an offer.</label>
                      </div>

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

                <div class="form-control checkbox-group">
                    
                    <fieldset>
                      <legend class="sr-only">Notifications</legend>
                      <div class="checkbox-list">
    
                        <div>
                            <input id="comments" name="comments" checked type="checkbox" class="checkbox">
                            <div>
                              <label for="comments" class="checkbox-label with-info">
                                <span>Comments</span> 
                                <span>Get notified when someones posts a comment on a posting.</span>
                              </label>
                            </div>
                        </div>
    
                        <div>
                            <input id="candidates" name="candidates" type="checkbox" class="checkbox">
                            <div>
                              <label for="candidates" class="checkbox-label with-info">
                                <span>Candidates</span> 
                                <span>Get notified when a candidate applies for a job.</span>
                              </label>
                            </div>
                        </div>
    
                        <div>
                            <input id="offers" name="offers" type="checkbox" class="checkbox">
                            <div>
                              <label for="offers" class="checkbox-label with-info">
                                <span>Offers</span>
                                <span>Get notified when a candidate accepts or rejects an offer.</span>
                              </label>
                            </div>
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

                <div class="form-control checkbox-group">
                    
                  <fieldset>
                  <legend class="sr-only">Notifications</legend>
                  <div class="checkbox-list">
                        
                        <div>
                            <input id="comments2" name="comments" type="checkbox" class="checkbox">
                            <label for="comments2" class="checkbox-label with-info-inline">
                              <span>New comments</span>
                              <span>so you always know what's happening.</span>
                            </label>
                        </div>
    
                        <div>
                            <input id="candidates2" name="candidates" type="checkbox" class="checkbox">
                            <label for="candidates2" class="checkbox-label with-info-inline">
                              <span>New candidates</span>
                              <span>who apply for any open postings.</span>
                            </label>
                        </div>
    
                        <div>
                            <input id="offers2" name="offers" type="checkbox" class="checkbox">
                            <label for="offers2" class="checkbox-label with-info-inline">
                              <span>Offers</span>
                              <span>when they are accepted or rejected by candidates.</span>
                            </label>
                        </div>
    
                      </div>
                      </fieldset>
    
                </div>
                `
        },
        {
            id: "checkbox_4",
            title: "List with checkbox with separators",
            code: 
                `
                <!-- List with checkbox with separators -->

                <div class="form-control checkbox-group max-w-lg">
                    
                    <fieldset>
                        <legend class="sr-only">Notifications</legend>
                        <div class="checkbox-list boxed right">
    
                          <div>
                          <input id="comments3" name="comments" type="checkbox" class="checkbox">
                                <label for="comments3" class="checkbox-label with-info">
                                <span>Comments</span>
                                <span>Get notified when someones posts a comment on a posting.</span>
                              </label>
                          </div>
    
                          <div>
                              <input id="candidates3" name="candidates" type="checkbox" class="checkbox">
                              <label for="candidates3" class="checkbox-label with-info">
                                <span>Candidates</span>
                                <span>Get notified when a candidate applies for a job.</span>
                              </label>
                          </div>
    
                          <div>
                              <input id="offers3" name="offers" type="checkbox" class="checkbox">
                              <label for="offers3" class="checkbox-label with-info">
                                <span>Offers</span>
                                <span>Get notified when a candidate accepts or rejects an offer.</span>
                              </label>
                          </div>
    
                        </div>
                      </fieldset>
    
                </div>
                `
        },
        // {
        //     id: "checkout_5",
        //     title: "Checkbox list with inline description",
        //     code: 
        //         `
        //         <!-- Checkbox list with inline description -->
    
        //         <div class="form-control checkbox-group max-w-lg">
                    
        //             <fieldset>
        //                 <legend class="cb-text-h5 mb-4">Members</legend>
        //                 <div class="checkbox-list boxed right">
    
        //                   <div>
        //                       <label for="person-1" class="label select-none cursor-pointer">Annette Black</label>
        //                       <input id="person-1" name="person-1" type="checkbox" class="checkbox">
        //                   </div>
                      
        //                   <div>
        //                       <label for="person-2" class="label select-none cursor-pointer">Cody Fisher</label>
        //                       <input id="person-2" name="person-2" type="checkbox" class="checkbox">
        //                   </div>
                      
        //                   <div>
        //                       <label for="person-3" class="label select-none cursor-pointer">Courtney Henry</label>
        //                       <input id="person-3" name="person-3" type="checkbox" class="checkbox">
        //                   </div>
                      
        //                   <div>
        //                       <label for="person-4" class="label select-none cursor-pointer">Kathryn Murphy</label>
        //                       <input id="person-4" name="person-4" type="checkbox" class="checkbox">
        //                   </div>
                          
        //                 </div>
        //               </fieldset>
    
        //         </div>
        //         `
        // },

    ];

}