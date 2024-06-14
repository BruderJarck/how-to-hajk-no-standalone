import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { MotivationComponent } from './components/motivation/motivation.component';
import { EssenComponent } from './components/essen/essen.component';
import { MaterialComponent } from './components/material/material.component';
import { RouteComponent } from './components/route/route.component';
import { RouteBeispieleComponent } from './components/route-beispiele/route-beispiele.component';
import { AnmeldungPacklisteComponent } from './components/anmeldung-packliste/anmeldung-packliste.component';

const routes: Routes = [
  { path: '', redirectTo: 'motivation', pathMatch: 'full' },
  { path: "übersicht", component: OverviewComponent },
  { path: "motivation", component: MotivationComponent },
  { path: "essens-planung", component: EssenComponent },
  {
      path: "routen-planung", component: RouteComponent, children: [
          { path: "beispiele", component: RouteBeispieleComponent },
      ]
  },
  { path: "anmeldung-packliste", component: AnmeldungPacklisteComponent },
  { path: "material", component: MaterialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
