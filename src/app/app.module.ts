import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {FormsModule} from '@angular/forms';
import {AboutService} from '../service/about.service';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactServiceService} from './contact-service.service';
import {NewContactComponent} from './new-contact/new-contact.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'editContact/:id', component: EditContactComponent},
  {path: 'new-contact', component: NewContactComponent},

  {path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent,
    NewContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AboutService, ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
