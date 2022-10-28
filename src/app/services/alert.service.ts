import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class AlertService {

    alertDatas = [

        {
            "id": "alert_1",
            "title": "With description",
            "code": `
            <div class="alert alert-warning">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h3>Attention needed</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
                </div>
                </div>
              </div>
              `
        },
    
        {
           "id": "alert_2",
            "title": "With list",
            "code": `
            <div class="alert alert-danger">
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                <div>
                  <h3>There were 2 errors with your submission</h3>
                  <div>
                    <ul role="list">
                      <li>Your password must be at least 8 characters</li>
                      <li>Your password must include at least one pro wrestling finishing move</li>
                    </ul>
                  </div>
                </div>
                </div>
              </div>
              `
         },

        {
            "id": "alert_3",
             "title": "With actions",
             "code": `
             <div class="alert alert-success">
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                <div>
                  <h3>Order completed</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    <div class="actions">
                      <button type="button" class="link">View status</button>
                      <button type="button" class="link">Dismiss</button>
                    </div>
                </div>
              </div>
            </div>
            `
         },
         {
            "id": "alert_5",
             "title": "With inline link",
             "code": `
             <div class="alert alert-info">
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                <div>
                A new software update is available. <a href="#"> See what’s new in version 2.0.4. </a>
                </div>
              </div>
            </div>
          `
         },
         {
            "id": "alert_6",
             "title": "With dismiss button",
             "code": `
             <div class="alert alert-success">
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <h3>Order completed</h3>
                <div class="ml-auto">
                    <button type="button" class="">
                      <span class="sr-only">Dismiss</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                </div>
              </div>
            </div>
           `
         }

    ];
}