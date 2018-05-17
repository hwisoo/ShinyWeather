import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { SearchPage } from '../search/search';
import { LocationSelectPage} from '../location-select/location-select';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;
  tab4Root = LocationSelectPage;

  constructor() {

  }
}
