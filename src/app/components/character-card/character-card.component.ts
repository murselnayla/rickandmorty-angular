import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICharacterRes } from '@app/core/dtos';
import { ButtonModule } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-character-card',
	standalone: true,
	templateUrl: './character-card.component.html',
	styleUrls: ['./character-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ButtonModule, NgOptimizedImage, RouterLink],
})
export class CharacterCardComponent {
	@Input() character!: ICharacterRes;
}
