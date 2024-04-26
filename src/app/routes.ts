import { Routes } from '@angular/router';
import { HomeLayoutComponent } from '@app/layouts/home-layout/home-layout.component';
import { HomePageComponent } from '@app/pages/home-page/home-page.component';
import { CharactersPageComponent } from '@app/pages/characters-page/characters-page.component';
import { CharacterDetailPageComponent } from '@app/pages/character-detail-page/character-detail-page.component';

export const ROUTES: Routes = [
	{
		path: '',
		component: HomeLayoutComponent,
		children: [
			{
				path: 'home',
				component: HomePageComponent,
				title: 'Home',
			},
			{
				path: 'characters',
				children: [
					{
						path: '',
						component: CharactersPageComponent,
						title: 'Characters',
					},
					{
						path: ':id',
						component: CharacterDetailPageComponent,
						title: 'Character Detail',
					},
				],
			},
		],
	},
];
