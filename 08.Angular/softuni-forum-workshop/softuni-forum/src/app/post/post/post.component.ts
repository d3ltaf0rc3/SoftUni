import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() posts: IPost[];

  constructor() { }

  ngOnInit(): void {
  }

}
