import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import '@webcomponents/custom-elements/custom-elements.min';
import '@clr/icons';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);