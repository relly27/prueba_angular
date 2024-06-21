// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';


// import { UserListComponent } from './components/user-list/user-list.component';
// import { UserItemComponent } from './components/user-item/user-item.component';
// import { AddUserComponent } from './components/add-user/add-user.component';
// import { EditUserComponent } from './components/edit-user/edit-user.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     UserListComponent,
//     UserItemComponent,
//     AddUserComponent,
//     EditUserComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     RouterModule.forRoot([
//       // {path: '', component:HomeComponent},
//       // {path: 'activities', component:ActivitiesComponent},
//       // {path: 'sigesp', component:CustomersComponent},
//       // {path: 'contact', component:ProvidersComponent},
//       // {path: '**', component:PageNotFoundComponent}
//     ])
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
