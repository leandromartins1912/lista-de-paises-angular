import { Component, Input } from '@angular/core';
import { Country } from 'src/app/types/api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  country: Country;
}
