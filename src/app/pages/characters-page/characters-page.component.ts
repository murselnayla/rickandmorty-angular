import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-characters-page',
	standalone: true,
	templateUrl: './characters-page.component.html',
	styleUrls: ['./characters-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
})
export class CharactersPageComponent {}
