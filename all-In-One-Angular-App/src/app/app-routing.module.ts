import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FileUploadDownloadComponent } from "./feature-lists/file-upload-download/file-upload-download.component";
import { FileUploadComponent } from "./feature-lists/file-upload-download/file-upload/file-upload.component";
import { ClientSidePaginationComponent } from "./feature-lists/pagination/client-side-pagination/client-side-pagination.component";
import { PaginationComponent } from "./feature-lists/pagination/pagination.component";
import { ServerSidePaginationComponent } from "./feature-lists/pagination/server-side-pagination/server-side-pagination.component";
import { SearchDemoOneComponent } from "./feature-lists/search/search-demo-one/search-demo-one.component";
import { SearchItemsComponent } from "./feature-lists/search/search-items.component";

const routes: Routes = [
  {
    path: "pagination",
    component: PaginationComponent,
    children: [
      { path: "server-side", component: ServerSidePaginationComponent },
      { path: "client-side", component: ClientSidePaginationComponent },
    ],
  },
  {
    path: "searching",
    component: SearchItemsComponent,
    children: [{ path: "search-demo-one", component: SearchDemoOneComponent }],
  },
  {
    path: "file-upload-download",
    component: FileUploadDownloadComponent,
    children: [{ path: "file-upload", component: FileUploadComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
