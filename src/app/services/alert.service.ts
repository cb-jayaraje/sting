import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class AlertService {

  alertDatas = [

    {
      "id": "alert_1",
      "title": "Default component",
      "code": `
            <div class="flex flex-col gap-4">

    <!-- Alert primary starts here -->

    <div class="alert-container alert-primary flex">
        <div class="alert-icon">
            <information-circle class="h-5 w-5" ></information-circle>
        </div>

        <div class="details-wrapper flex flex-col gap-4">

            <div class="alert-details flex flex-col gap-2">
                <h6 class="alert-header cb-text-h6">Title of the alert banner should come here</h6>
                <p class="cb-text-copy-small">
                    With Chargebee’s robust subscription billing infrastructure and a world-class payments experience
                    built
                    on
                    APIs, this is a comprehensive solution you can trust.
                </p>
            </div>

            <div class="alert-controls flex gap-4">
                <div>
                    <button class="btn btn-small btn-primary">Primary Action</button>
                </div>

                <div>
                    <button class=" btn btn-borderless btn-small">Secondary Action</button>
                </div>

            </div>

        </div>

    </div>

    <!-- Alert primary ends here -->

    <!-- Alert warning starts here -->

    <div class="alert-container alert-warning flex">
        <div class="alert-icon">
            <information-circle class="h-5 w-5" ></information-circle>
        </div>

        <div class="details-wrapper flex flex-col gap-4">

            <div class="alert-details flex flex-col gap-2">
                <h6 class="alert-header cb-text-h6">Title of the alert banner should come here</h6>
                <p class="cb-text-copy-small">
                    With Chargebee’s robust subscription billing infrastructure and a world-class payments experience
                    built
                    on
                    APIs, this is a comprehensive solution you can trust.
                </p>
            </div>

            <div class="alert-controls flex gap-4">
                <div>
                    <button class="btn btn-small btn-primary">Primary Action</button>
                </div>

                <div>
                    <button class=" btn btn-borderless btn-small">Secondary Action</button>
                </div>

            </div>

        </div>

    </div>

    <!-- Alert warning ends here -->

    <!-- Alert Danger starts here -->

    <div class="alert-container alert-danger flex">
        <div class="alert-icon">
            <information-circle class="h-5 w-5" ></information-circle>
        </div>

        <div class="details-wrapper flex flex-col gap-4">

            <div class="alert-details flex flex-col gap-2">
                <h6 class="alert-header cb-text-h6">Title of the alert banner should come here</h6>
                <p class="cb-text-copy-small">
                    With Chargebee’s robust subscription billing infrastructure and a world-class payments experience
                    built
                    on
                    APIs, this is a comprehensive solution you can trust.
                </p>
            </div>

            <div class="alert-controls flex gap-4">
                <div>
                    <button class="btn btn-small btn-primary">Primary Action</button>
                </div>

                <div>
                    <button class=" btn btn-borderless btn-small">Secondary Action</button>
                </div>

            </div>

        </div>

    </div>

    <!-- Alert danger ends here -->

    <!-- Alert success starts here -->

    <div class="alert-container alert-success flex">
        <div class="alert-icon">
            <information-circle class="h-5 w-5"></information-circle>
        </div>

        <div class="details-wrapper flex flex-col gap-4">

            <div class="alert-details flex flex-col gap-2">
                <h6 class="alert-header cb-text-h6">Title of the alert banner should come here</h6>
                <p class="cb-text-copy-small">
                    With Chargebee’s robust subscription billing infrastructure and a world-class payments experience
                    built
                    on
                    APIs, this is a comprehensive solution you can trust.
                </p>
            </div>

            <div class="alert-controls flex gap-4">
                <div>
                    <button class="btn btn-small btn-primary">Primary Action</button>
                </div>

                <div>
                    <button class=" btn btn-borderless btn-small">Secondary Action</button>
                </div>

            </div>

        </div>

    </div>

    <!-- Alert success ends here -->

</div>
              `
    },

    {
      "id": "alert_2",
      "title": "With dimiss button",
      "code": `
      <div class="alert-container alert-warning flex">
      <div class="alert-icon">
          <information-circle class="h-5 w-5 alert-icon" ></information-circle>
      </div>
  
      <div class="details-wrapper flex flex-col gap-4">
  
          <div class="alert-details flex flex-col gap-2">
              <h6 class="alert-header cb-text-h6">Title of the alert banner should come here</h6>
              <p class="cb-text-copy-small">
                  With Chargebee’s robust subscription billing infrastructure and a world-class payments experience built
                  on
                  APIs, this is a comprehensive solution you can trust.
              </p>
          </div>
  
          <div class="alert-controls flex gap-4">
              <div>
                  <button class="btn btn-primary btn-small">Primary Action</button>
              </div>
  
              <div>
                  <button class=" btn btn-borderless btn-small btn-small">Secondary Action</button>
              </div>
  
          </div>
  
      </div>
  
      <div class="banner-controls">
          <button class="btn btn-small px-2 btn-icon-only h-min btn-borderless">
              <x-mark class="close-icon h-4 w-4"></x-mark>
          </button>
      </div>
  
  </div>
              `
    },

    {
      "id": "alert_3",
      "title": "With no actions",
      "code": `
      <div class="alert-container alert-success flex">
      <div class="alert-icon">
          <information-circle class="h-5 w-5" ></information-circle>
      </div>

      <div class="details-wrapper flex flex-col gap-4">

          <div class="alert-details flex flex-col gap-2">
              <h6 class="alert-header cb-text-h6">Title of the alert banner should come here</h6>
              <p class="cb-text-copy-small">
                  With Chargebee’s robust subscription billing infrastructure and a world-class payments experience
                  built
                  on
                  APIs, this is a comprehensive solution you can trust.
              </p>
          </div>

      </div>

  </div>

            `
    },
    {
      "id": "alert_4",
      "title": "With only primary action",
      "code": `
      <div class="alert-container alert-warning flex">

        <div class="alert-icon">
            <information-circle class="h-5 w-5" ></information-circle>
        </div>

      <div class="details-wrapper flex flex-col gap-4">

          <div class="alert-details flex flex-col gap-2">
              <h6 class="alert-header cb-text-h6">Title of the alert banner should come here</h6>
              <p class="cb-text-copy-small">
                  With Chargebee’s robust subscription billing infrastructure and a world-class payments experience
                  built
                  on
                  APIs, this is a comprehensive solution you can trust.
              </p>
          </div>

          <div class="alert-controls flex gap-4">
              <div>
                  <button class="btn btn-small btn-primary">Primary Action</button>
              </div>
          </div>

      </div>

  </div>

          `
    }

  ];
}