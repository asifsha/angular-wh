import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-passing-data",
  templateUrl: "./passing-data.component.html",
  styleUrls: ["./passing-data.component.css"]
})
export class PassingDataComponent implements OnInit {
  value = "";
  constructor(private router: Router) {}

  ngOnInit() {}

  sendData() {
    this.router.navigate(["receivingData", { data: this.value }]);
  }
}
