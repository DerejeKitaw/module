import { Component, Input,OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
@Input() subtitle = '';
title ='Angular Project';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
  ngOnInit() {
  }

}
