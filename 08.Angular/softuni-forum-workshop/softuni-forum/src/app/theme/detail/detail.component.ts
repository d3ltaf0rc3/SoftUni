import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/shared/interfaces/post';
import { ITheme } from 'src/app/shared/interfaces/theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  theme: ITheme<IPost>;

  constructor(private activatedRoute: ActivatedRoute, private themeService: ThemeService) { 
    const id = activatedRoute.snapshot.params.id;
    themeService.loadTheme(id);
  }

  ngOnInit(): void {
  }

}
