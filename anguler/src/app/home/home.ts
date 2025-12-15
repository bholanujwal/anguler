import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggle } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatSlideToggle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  showPopover = false;
  selectedFileName = 'No file chosen';
  fileError: string | null = null;
  selectedFile?: File;

  togglePopover() {
    this.showPopover = !this.showPopover;
    if (!this.showPopover) {
      this.selectedFileName = 'No file chosen';
      this.selectedFile = undefined;
      this.fileError = null;
    }
  }

  onFileSelected(event: Event) {
    this.fileError = null;

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      this.selectedFileName = 'No file chosen';
      this.selectedFile = undefined;
      return;
    }

    const file = input.files[0];

    if (file.type !== 'application/pdf') {
      this.fileError = 'Only PDF files are allowed.';
      input.value = '';
      this.selectedFileName = 'No file chosen';
      this.selectedFile = undefined;
      return;
    }

    //10MB
    if (file.size > 10 * 1024 * 1024) {
      this.fileError = 'File is too large (max 10MB).';
      input.value = '';
      this.selectedFileName = 'No file chosen';
      this.selectedFile = undefined;
      return;
    }

    this.selectedFile = file;
    this.selectedFileName = file.name;
  }
}
