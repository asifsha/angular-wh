import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-validation",
  templateUrl: "./input-validation.component.html",
  styleUrls: ["./input-validation.component.css"]
})
export class InputValidationComponent implements OnInit {
  constructor() {}

  showEmailError = false;
  showNumberError = false;

  ngOnInit() {}

  validateNumber(event) {
    this.showNumberError = false;
    if (event.target.value <= 10) this.showNumberError = true;
  }

  validateEmail(event) {
    this.showEmailError = false;
    if (!this.validateEmailAddress(event.target.value))
      this.showEmailError = true;
  }
  validateEmailAddress(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
