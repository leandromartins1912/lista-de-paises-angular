import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../types/api';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get<Country[]>(`${this.api}/all`);
  }

  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this.api}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  getCountryByCodes(codes: string[]) {
    if (codes) {
      return this.http.get<Country[]>(
        `${this.api}/alpha?codes=${codes.join(',')}`
      );
    } else {
      return of([] as any);
    }
  }
}
