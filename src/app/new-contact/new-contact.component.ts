import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactServiceService} from '../contact-service.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  mode : number = 1;
  contact : Contact = new Contact();
  constructor(public contactService: ContactServiceService) { }

  ngOnInit(): void {
  }

  saveContact() {
    this.contactService.saveContact(this.contact)
      .subscribe((data:any)=>{
        // tslint:disable-next-line:no-console
        console.log(data);
        this.contact = data;
        this.mode = 2;
      },err=>{
        // tslint:disable-next-line:no-console
        console.log(err);
      })

  }

  onSaveContact(dataForm) {

    this.contactService.saveContact(dataForm)
      .subscribe((data:any)=>{
        // tslint:disable-next-line:no-console
        console.log(data);
        this.contact = data;
        this.mode = 2;
      },err=>{
        // tslint:disable-next-line:no-console
        console.log(JSON.parse(err._body).message);
      })
  }
}
