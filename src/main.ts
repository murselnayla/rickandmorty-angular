import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { provideRouter, withRouterConfig } from '@angular/router';
import { ROUTES } from '@app/routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
	providers: [
		provideAnimations(),
		provideHttpClient(),
		provideRouter(
			ROUTES,
			withRouterConfig({
				onSameUrlNavigation: 'reload',
			}),
		),
	],
}).catch((err) => console.error(err));
