import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { PostModule } from '../post/post.module';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    PostModule
  ],
  providers: [
    UserService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class CoreModule { }
