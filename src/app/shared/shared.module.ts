import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [HomePageComponent,AboutPageComponent,SidebarComponent,SearchBoxComponent,LoaderComponent,LogoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HomePageComponent,AboutPageComponent,SidebarComponent,
  SearchBoxComponent,LoaderComponent,LogoComponent]
})
export class SharedModule { }
