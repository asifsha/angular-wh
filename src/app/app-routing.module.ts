import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChangesInputOutputComponent } from "./components/changes-input-output/changes-input-output.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RouteGuardComponent } from "./components/route-guard/route-guard.component";
import { AuthGuard } from "./guards/auth/auth.guard";
import { LoginComponent } from "./components/login/login.component";
import { PassingDataComponent } from "./components/passing-data/passing-data.component";
import { ReceivingDataComponent } from "./components/receiving-data/receiving-data.component";
import { PageAnimationComponent } from "./components/page-animation/page-animation.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent, data: {animation: 'DashboardPage'} },
  { path: "changesInputOutput", component: ChangesInputOutputComponent, },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.module").then(mod => mod.SettingsModule)
  },
  {
    path: "routeGuard",
    component: RouteGuardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "passingData",
    component: PassingDataComponent
  },
  {
    path: "receivingData",
    component: ReceivingDataComponent
  },
  {
    path: "pageAnimation",
    component: PageAnimationComponent,
    data: {animation: 'AnimationPage'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
