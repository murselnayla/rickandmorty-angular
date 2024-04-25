import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { getEndpoint } from '@source/environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICharacterRes, PaginationRes } from '@app/core/dtos';
import { removeEmptyQueryParams } from '@app/core/utils';

@Injectable({
	providedIn: 'root',
})
export class CharacterService {
	constructor(private readonly http: HttpClient) {}

	public getAll(params?: any): Observable<PaginationRes<ICharacterRes>> {
		return this.http
			.get<PaginationRes<ICharacterRes>>(getEndpoint('character'), { params: removeEmptyQueryParams(params) })
			.pipe(
				retry(1),
				catchError((error: HttpErrorResponse) => throwError(() => error.error)),
			);
	}

	public get(id: number): Observable<ICharacterRes> {
		const path = `character/${id}`;
		return this.http.get<ICharacterRes>(getEndpoint(path)).pipe(
			retry(1),
			catchError((error: HttpErrorResponse) => throwError(() => error.error)),
		);
	}
}
