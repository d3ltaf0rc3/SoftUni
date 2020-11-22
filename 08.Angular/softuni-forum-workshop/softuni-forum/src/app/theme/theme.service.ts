import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITheme } from '../shared/interfaces/theme';

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>('http://localhost:3000/api/themes');
  }

  loadTheme(id: string): Observable<ITheme> {
    return this.http.get<ITheme>(`http://localhost:3000/api/themes/${id}`);
  }
}
