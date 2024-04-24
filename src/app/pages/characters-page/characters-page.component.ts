import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CharacterCardComponent } from '@components/character-card/character-card.component';

@Component({
	selector: 'app-characters-page',
	standalone: true,
	templateUrl: './characters-page.component.html',
	styleUrls: ['./characters-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CharacterCardComponent],
})
export class CharactersPageComponent {}
