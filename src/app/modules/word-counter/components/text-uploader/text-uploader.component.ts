import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadHandlerEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-text-uploader',
  templateUrl: './text-uploader.component.html',
  styleUrl: './text-uploader.component.css'
})
export class TextUploaderComponent {
  @Output() fileReadHandler = new EventEmitter<string>();

  constructor(private messageService: MessageService) {}
  
  UploadEvent(event: FileUploadHandlerEvent) {
    debugger
    let file = event.files[0];
    file.text().then((text) => {
      text=text.trim();
      if(!text || text.length == 0 )
      {
        this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'The File is Empty' });
      }
      else
      {
        this.fileReadHandler.emit(text);
      }
      console.log("file uploded text :",text);
    }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Cannot Read the File' });
      console.error(error);
    });
  }
}
