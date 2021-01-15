import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FileUploadingComponent } from "./feature-lists/file-uploading/file-uploading.component";
import { ClientSidePaginationComponent } from "./feature-lists/pagination/client-side-pagination/client-side-pagination.component";
import { PaginationComponent } from "./feature-lists/pagination/pagination.component";
import { ServerSidePaginationComponent } from "./feature-lists/pagination/server-side-pagination/server-side-pagination.component";
import { SearchItemsComponent } from "./feature-lists/search-items/search-items.component";

const routes: Routes = [
  {
    path: "pagination",
    component: PaginationComponent,
    children: [
      { path: "server-side", component: ServerSidePaginationComponent },
      { path: "client-side", component: ClientSidePaginationComponent },
    ],
  },
  { path: "searching", component: SearchItemsComponent },
  { path: "file-uploading", component: FileUploadingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
