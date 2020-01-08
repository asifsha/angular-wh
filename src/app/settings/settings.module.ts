import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { NestedRouteComponent } from './nested-route/nested-route.component';



@NgModule({
  declarations: [ConfigComponent, NestedRouteComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
