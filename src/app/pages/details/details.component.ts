import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Country, Currency, Language } from 'src/app/types/api';
import { tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  country: Observable<Country>;
  borderCountries: Observable<Country[]> | Observable<any[]>;
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country = this.api.getCountryByName(params.country).pipe(
        tap((res) => res),
        mergeMap((res) => {
          this.borderCountries = this.api.getCountryByCodes(res.borders);
          return of(res);
        })
      );
    });
  }

  displayCurrencies(currencies: Currency[]) {
    return currencies.map((currency) => currency.name).join(', ');
  }

  displayLanguages(languages: Language[]) {
    return languages.map((language) => language.name).join(', ');
  }
}
