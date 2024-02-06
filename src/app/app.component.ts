import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  constructor(private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('search', domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/search.svg'));
    iconRegistry.addSvgIcon('filter', domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/filter.svg'));
  }
}
