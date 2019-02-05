import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  {path: 'location', component: LocationComponent},
  {path: 'table', component: TableComponent},
  {path: 'form', component: FormComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
