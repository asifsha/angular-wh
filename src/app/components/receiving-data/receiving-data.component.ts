import { Component, OnInit } from "@angular/core";
import { Router, Route, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-receiving-data",
  templateUrl: "./receiving-data.component.html",
  styleUrls: ["./receiving-data.component.css"]
})
export class ReceivingDataComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  data = "";
  ngOnInit() {
    this.data = this.route.snapshot.paramMap.get("data");
    
  }
}
