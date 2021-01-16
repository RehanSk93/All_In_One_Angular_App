import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";
import { LeftNavMenuComponent } from "./common/left-nav-menu/left-nav-menu.component";
import { LayoutComponent } from "./common/layout/layout.component";
import { PaginationComponent } from "./feature-lists/pagination/pagination.component";
import { SearchItemsComponent } from "./feature-lists/search-items/search-items.component";
import { FileUploadingComponent } from "./feature-lists/file-uploading/file-uploading.component";
import { ServerSidePaginationComponent } from "./feature-lists/pagination/server-side-pagination/server-side-pagination.component";
import { ClientSidePaginationComponent } from "./feature-lists/pagination/client-side-pagination/client-side-pagination.component";
import { HttpClientModule } from "@angular/common/http";

import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavMenuComponent,
    LayoutComponent,
    PaginationComponent,
    SearchItemsComponent,
    FileUploadingComponent,
    ServerSidePaginationComponent,
    ClientSidePaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
