import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeService } from './theme.service';
import { ThemeRouterModule } from './theme-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    ThemeComponent,
    ThemeListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ThemeRouterModule,
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
