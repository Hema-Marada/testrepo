import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { UrlComponent } from './url/url.component';
import { ContentsComponent } from './contents/contents.component';
import { ParamsComponent } from './params/params.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { BulkeditComponent } from './bulkedit/bulkedit.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
    import {PasswordModule} from 'primeng/password';
import { MirrorComponent } from './mirror/mirror.component';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './custompipe.pipe';
import { ComponrntscommunicationComponent } from './componrntscommunication/componrntscommunication.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
    

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    UrlComponent,
    ContentsComponent,
    ParamsComponent,
    AuthorizationComponent,
    BulkeditComponent,
    HeaderComponent,
    MirrorComponent,
    PipesComponent,
    CustompipePipe,
    ComponrntscommunicationComponent,
    LocalstorageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    CheckboxModule,
    InputTextareaModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    PasswordModule,
    TabViewModule,
    DialogModule,
    Ng2TelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
