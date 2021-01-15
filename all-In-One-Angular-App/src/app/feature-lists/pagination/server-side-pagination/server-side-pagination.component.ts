import { Component, OnInit } from "@angular/core";

// Step - 1
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-server-side-pagination",
  templateUrl: "./server-side-pagination.component.html",
  styleUrls: ["./server-side-pagination.component.css"],
})
export class ServerSidePaginationComponent implements OnInit {
  // Step - 2
  pager = {};
  pageOfItems = [];

  // Step - 3
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  // Step - 4
  ngOnInit() {
    // load page based on 'page' query param or default to 1
    this.route.queryParams.subscribe((x) => this.loadPage(x.page || 1));
  }

  // Step - 5
  private loadPage(page) {
    // get page of items from api
    this.http
      .get<any>(`http://localhost:3000/pagination/?page=${page}`)
      .subscribe((x) => {
        console.log("Data fetched - ", x);

        this.pager = x.pager;
        this.pageOfItems = x.pageOfItems;
      });
  }
}
