import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { CateringComponent } from './views/catering/catering.component';
import { MenuComponent } from './views/menu/menu.component';
import { PhotosComponent } from './views/photos/photos.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'photos', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  AboutComponent,
  CateringComponent,
  MenuComponent,
  PhotosComponent
]
