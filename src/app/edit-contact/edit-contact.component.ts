import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactServiceService} from '../contact-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode : number = 1;
  contact : Contact = new Contact();
  idContact : number;
  constructor(private contactService : ContactServiceService, private activatedRoute : ActivatedRoute, private router : Router) {
    this.idContact = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.contactService.getContact(this.idContact)
      .subscribe((data:any)=>{
        // tslint:disable-next-line:no-console
        console.log(data);
        this.contact = data;
      },err=>{
        // tslint:disable-next-line:no-console
        console.log(JSON.parse(err._body).message);
      });
  }

  updateContact() {

    this.contactService.updateContact(this.contact)
      .subscribe((data:any)=>{
          alert("Mise à jour effectuée");
          this.router.navigate(['contacts']);
      },err=>{
        alert("Erreur");
        // tslint:disable-next-line:no-console
        console.log(err);
      })

  }
}
