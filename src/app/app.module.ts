import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { TitleComponent } from './title/title.component';
import { HighlightDirective } from './highlight.directive';
import { UserService } from './user.service';
import { Contact, ContactService } from './contact/contact.service';
import { AwesomePipe } from './contact/awesome.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    TitleComponent,
    HighlightDirective,
    AwesomePipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ContactService , UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
