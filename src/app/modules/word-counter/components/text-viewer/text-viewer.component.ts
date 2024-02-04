import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrl: './text-viewer.component.css'
})
export class TextViewerComponent {
  @Input() fileText: string = "here you will see the file content";
}
