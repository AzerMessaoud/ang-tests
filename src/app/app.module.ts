import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelListComponent } from './level-list/level-list.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { LevelCrudComponent } from './level-crud/level-crud.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LevelListComponent,
    LevelCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    [provideHttpClient(withFetch())]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
