import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from '../../../../../environment';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-upload.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageUploadComponent),
      multi: true,
    },
  ],
})
export class ImageUploadComponent implements ControlValueAccessor {
  value: string[] = [];  // stores uploaded URLs
  previewUrls: string[] = [];
  selectedFiles: File[] = [];
  uploading = false;

  private CLOUD_NAME = environment.cloudinary.cloudName;
  private UPLOAD_PRESET = environment.cloudinary.uploadPreset;

  constructor(private http: HttpClient) {}

  // --- ControlValueAccessor Methods ---
  onChange = (value: string[]) => {};
  onTouched = () => {};
  writeValue(value: string[]): void {
    if (value) {
      this.value = value;
      this.previewUrls = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // you can handle disabling state if needed
  }

  // --- Component Logic ---
  onFileSelect(event: any) {
    const files: FileList = event.target.files;
    this.selectedFiles = Array.from(files);
    this.previewUrls = this.selectedFiles.map(file => URL.createObjectURL(file));
  }

  async uploadImages() {
    if (this.selectedFiles.length === 0) return;

    this.uploading = true;
    const uploadedUrls: string[] = [];

    for (const file of this.selectedFiles) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', this.UPLOAD_PRESET);

      const response: any = await this.http
        .post(`https://api.cloudinary.com/v1_1/${this.CLOUD_NAME}/image/upload`, formData)
        .toPromise();

      uploadedUrls.push(response.secure_url);
    }

    this.uploading = false;
    this.value = [...this.value, ...uploadedUrls]; // append new images
    this.previewUrls = this.value;

    this.onChange(this.value); // update the form control value
    this.selectedFiles = [];
  }
}
