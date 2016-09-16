import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './root/app.component'

import {ROUTER_PROVIDERS} from 'angular2/router'
// load http and Rx debendances and inject them in boot strap
import { HTTP_PROVIDERS } from 'angular2/http'
import 'rxjs/Rx';

bootstrap(AppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS]);   