import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { ModalDelete } from './modal-delete/modal-delete.component';
import { ModalEdit } from './modal-edit/modal-edit.component';
import { EmployeeForm } from './employee-form/employee-form.component';
import { ModalAdd } from './modal-add/modal-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './custom-pipes/employee-list-filter.pipe';
import { OrderByPipe } from './custom-pipes/employee-list-order.pipe';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';


registerLocaleData(localeRu, 'ru-RU');

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EmployeesListComponent,
    ModalDelete,
    ModalEdit,
    ModalAdd,
    EmployeeForm,
    FilterPipe,
    OrderByPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'employees', component: EmployeesListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
