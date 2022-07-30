import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RadioGroupService {
  radioGropuDatas = [
    {
      id: 'radio_1',
      title: 'Simple list',
      code: `      
      <div class="form-control">
                
      <label class="text-base font-medium text-gray-900">Notifications</label>
      <p class="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p>

      <fieldset class="mt-4">
        <legend class="sr-only">Notification method</legend>
        <div class="space-y-4">
          <div class="flex items-center">
            <input id="email" name="notification-method" type="radio" checked="" class="radio">
            <label for="email" class="radio-label"> Email </label>
          </div>
    
          <div class="flex items-center">
            <input id="sms" name="notification-method" type="radio" class="radio">
            <label for="sms" class="radio-label"> Phone (SMS) </label>
          </div>
    
          <div class="flex items-center">
            <input id="push" name="notification-method" type="radio" class="radio">
            <label for="push" class="radio-label"> Push notification </label>
          </div>
        </div>
      </fieldset>

  </div>
        `,
    },
   
  ];
}
