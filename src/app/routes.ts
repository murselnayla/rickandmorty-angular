import { Routes } from '@angular/router';
import { HomeLayoutComponent } from '@app/layouts/home-layout/home-layout.component';
import { HomePageComponent } from '@app/pages/home-page/home-page.component';
import { CharactersPageComponent } from '@app/pages/characters-page/characters-page.component';

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
				component: CharactersPageComponent,
				title: 'Characters',
			},
		],
	},
];
