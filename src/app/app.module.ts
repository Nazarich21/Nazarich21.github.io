import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BabyCareComponent } from './baby-care/baby-care.component';
import { ContactComponent } from './contact/contact.component';
import { DaiperRashComponent } from './daiper-rash/daiper-rash.component';
import { FaqComponent } from './faq/faq.component';
import { OlaCareComponent } from './ola-care/ola-care.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'what-is-diaper-rash', component: DaiperRashComponent },
  { path: 'why-use-ola-care', component: OlaCareComponent },
  { path: 'baby-care', component: BabyCareComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    BabyCareComponent,
    ContactComponent,
    DaiperRashComponent,
    FaqComponent,
    OlaCareComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
