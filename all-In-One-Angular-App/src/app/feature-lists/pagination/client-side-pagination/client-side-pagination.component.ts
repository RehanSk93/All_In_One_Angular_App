import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-client-side-pagination",
  templateUrl: "./client-side-pagination.component.html",
  styleUrls: ["./client-side-pagination.component.css"],
})
export class ClientSidePaginationComponent implements OnInit {
  p: number = 1; // Set your current page
  collection: Object = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .subscribe((res) => {
        console.log(res);
        this.collection = res;
      });
  }
}
