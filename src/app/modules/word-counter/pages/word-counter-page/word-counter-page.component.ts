import { Component } from '@angular/core';

@Component({
  selector: 'app-word-counter-page',
  templateUrl: './word-counter-page.component.html',
  styleUrl: './word-counter-page.component.css'
})
export class WordCounterPageComponent {
  fileText: string = "";

  fileReadEvent(fileText: string) {
    debugger
    this.fileText = fileText;
    console.log("file Read Event:", this.fileText)
  }
}
