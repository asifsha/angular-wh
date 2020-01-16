import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-route-guard",
  templateUrl: "./route-guard.component.html",
  styleUrls: ["./route-guard.component.css"]
})
export class RouteGuardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  logoff() {
    localStorage.setItem("wallethubuser", "false");
    this.router.navigateByUrl("dashboard");
  }
}
