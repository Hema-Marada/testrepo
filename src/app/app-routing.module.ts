import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ContentsComponent } from './contents/contents.component';
import { ParamsComponent } from './params/params.component';
import { TopnavComponent } from './topnav/topnav.component';
import { UrlComponent } from './url/url.component';
import { HeaderComponent } from './header/header.component';
import { MirrorComponent } from './mirror/mirror.component';
import { PipesComponent } from './pipes/pipes.component';
import { ComponrntscommunicationComponent } from './componrntscommunication/componrntscommunication.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';

const routes: Routes = [
  {
    path:"topnav",component:TopnavComponent
  },
  {
    path:"url",component:UrlComponent
  },
  {
    path:"contents",
    component:ContentsComponent
    },
  {
    path:"params",component:ParamsComponent
  },
{
  path:"authorization",component:AuthorizationComponent
},
{
  path:"header",component:HeaderComponent
},
{
  path:"url",component:UrlComponent
},
{
  path:"mirror",component:MirrorComponent
},
{
  path:"pipes",component:PipesComponent
},
{
  path:"componentscommunication",component:ComponrntscommunicationComponent
},
{
  path:"localstorage",component:LocalstorageComponent
}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
