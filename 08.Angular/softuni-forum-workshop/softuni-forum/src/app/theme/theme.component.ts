import { Component, Input } from '@angular/core';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  @Input() theme: ITheme;

  constructor() { }
}
