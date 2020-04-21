import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infos : any;
  comments = [];
  commentaire = {date:null, message : ""}


  constructor(private aboutService : AboutService) {
    this.infos = this.aboutService.getInfo();
    this.comments = this.aboutService.getAllComments();
  }

  ngOnInit(): void {
  }

  onAddCommentaire(c) {
    this.aboutService.addComment(c);
    this.commentaire.message = "";
    this.comments = this.aboutService.getAllComments();
  }
}
