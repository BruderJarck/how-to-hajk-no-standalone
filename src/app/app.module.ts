import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MaterialComponent } from './components/material/material.component';
import { RouteComponent } from './components/route/route.component';
import { RouteBeispieleComponent } from './components/route-beispiele/route-beispiele.component';
import { EssenComponent } from './components/essen/essen.component';
import { MotivationComponent } from './components/motivation/motivation.component';
import { AnmeldungPacklisteComponent } from './components/anmeldung-packliste/anmeldung-packliste.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    MaterialComponent,
    RouteComponent,
    RouteBeispieleComponent,
    EssenComponent,
    MotivationComponent,
    AnmeldungPacklisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
