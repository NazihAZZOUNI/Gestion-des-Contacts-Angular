import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactServiceService} from '../contact-service.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @ViewChild('f', { static: true }) form: ElementRef;
  pageContacts : any;
  pages : number[];
  motCle : string = "";
  currentPage : number = 0;
  size : number = 5;

  constructor(private http:HttpClient, private contactService : ContactServiceService, private router : Router) { }

  ngOnInit(): void {

    // tslint:disable-next-line:no-console
    console.log("Initialisation...");
  }

  commonSearch() {

    this.contactService.getContacts(this.motCle,this.currentPage,this.size)
      .subscribe((data:any)=>{
        // tslint:disable-next-line:no-console
        console.log(data);
        this.pageContacts = data;
        this.pages = new Array(data.totalPages);
      },err=>{
        // tslint:disable-next-line:no-console
        console.log(err);
      })
  }
  onSearch() {

    this.currentPage = 0;
    this.commonSearch();

  }

  goToPage(i: number) {
    this.currentPage = i;
    this.commonSearch();

  }

  onEditContact(id: number) {

    this.router.navigate(['editContact',id]);
  }

  onDeleteContact(c : Contact) {

    let confirm = window.confirm("Etes-vous sur de vouloir supprimer cet contact ?");

    if (confirm) {
      this.contactService.deleteContact(c.id)
        .subscribe((data: any) => {
          this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(c), 1
          );

        }, err => {
          alert("Erreur");
          // tslint:disable-next-line:no-console
          console.log(err);
        })

    }
  }
}
