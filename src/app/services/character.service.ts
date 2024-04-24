import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { getEndpoint } from '@source/environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICharacterRes, PaginationRes } from '@app/core/dtos';

@Injectable({
	providedIn: 'root',
})
export class CharacterService {
	constructor(private readonly http: HttpClient) {}

	public getAll(params?: any): Observable<PaginationRes<ICharacterRes>> {
		const myParams = {
			page: 1,
		};

		return this.http.get<PaginationRes<ICharacterRes>>(getEndpoint('character'), { params: myParams }).pipe(
			retry(1),
			catchError((error: HttpErrorResponse) => throwError(() => new Error(error.error))),
		);
	}

	public get(id: number): Observable<ICharacterRes> {
		const path = `character/${id}`;
		return this.http.get<ICharacterRes>(getEndpoint(path)).pipe(
			retry(1),
			catchError((error: HttpErrorResponse) => throwError(() => new Error(error.error))),
		);
	}
}
