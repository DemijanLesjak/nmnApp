import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateStateService {
  localization: 'en' | 'sl' = 'en';

  constructor(public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  setLanguage(lang: 'en' | 'sl') {
    this.translate.use(lang);
    this.localization = lang;
  }
}
