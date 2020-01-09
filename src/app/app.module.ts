import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChangesInputOutputComponent } from "./components/changes-input-output/changes-input-output.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RouteGuardComponent } from "./components/route-guard/route-guard.component";
import { PassingDataComponent } from "./components/passing-data/passing-data.component";
import { PageAnimationComponent } from "./components/page-animation/page-animation.component";
import { InputValidationComponent } from "./components/input-validation/input-validation.component";
import { ContentUsageComponent } from "./components/content-usage/content-usage.component";
import { CurrencyFormatComponent } from "./components/currency-format/currency-format.component";
import { BindingPropertiesComponent } from "./components/binding-properties/binding-properties.component";
import { TextInputComponent } from "./components/text-input/text-input.component";
import { LoginComponent } from "./components/login/login.component";
import { ReceivingDataComponent } from "./components/receiving-data/receiving-data.component";
import { CssanimationComponent } from "./components/cssanimation/cssanimation.component";
import { AddButtonComponent } from "./components/add-button/add-button.component";
import { BackButtonComponent } from "./components/back-button/back-button.component";
import { NumbersDirective } from './directives/numbers.directive';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangesInputOutputComponent,
    DashboardComponent,
    RouteGuardComponent,
    PassingDataComponent,
    PageAnimationComponent,
    InputValidationComponent,
    ContentUsageComponent,
    CurrencyFormatComponent,
    BindingPropertiesComponent,
    TextInputComponent,
    LoginComponent,
    ReceivingDataComponent,
    CssanimationComponent,
    AddButtonComponent,
    BackButtonComponent,
    NumbersDirective,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
