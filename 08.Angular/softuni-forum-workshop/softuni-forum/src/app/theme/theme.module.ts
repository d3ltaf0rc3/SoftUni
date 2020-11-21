import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeService } from './theme.service';

@NgModule({
  declarations: [
    ThemeComponent,
    ThemeListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ThemeService
  ],
  exports: [
    ThemeComponent,
    ThemeListComponent
  ]
})
export class ThemeModule { }
