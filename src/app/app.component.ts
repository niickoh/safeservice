import { Component } from '@angular/core';
import disableDevtool from 'disable-devtool';
import { environment } from './environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'safe-services';
  isIframe = false;

  ngOnInit(): void {
    const options: any = {
      tkName: "v30bypasskey",
      md5: disableDevtool.md5("v30check"),
    };

    if(environment.production) { disableDevtool(options) }

    this.isIframe = window !== window.parent && !window.opener;
  }
}
