import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-home-page',
	standalone: true,
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
})
export class HomePageComponent {}
