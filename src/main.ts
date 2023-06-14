import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// loads app.module.ts
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
