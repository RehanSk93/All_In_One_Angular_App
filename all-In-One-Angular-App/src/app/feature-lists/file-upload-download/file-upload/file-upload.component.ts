import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // Add this line

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  // step - 1
  selectedFile: File = null;
  message = "";

  // step - 2
  fileUploadedURL = "http://localhost:3000/file_upload_download";

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUploadFile() {
    const fd = new FormData();
    // "file" <= it should be matched from backend
    fd.append("file", this.selectedFile);
    this.http.post(this.fileUploadedURL, fd).subscribe((res) => {
      this.message = res["message"];
    });
  }
}
