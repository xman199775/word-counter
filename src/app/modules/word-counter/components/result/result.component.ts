import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  @Input() set fileText(text: string) {
    this.result = this.wordCount(text);
  }
  result: Array<[string,number]> = [];

  wordCount(text: string): Array<[string, number]> {
    debugger
    text = text.replace(/(?:\r\n|\r|\n)/g, ' ');
    const words = text.toLowerCase().split(" ");
    const wordCounts: Map<string, number> = new Map();
    for (const word of words) {
      if(word =="")
      {
        continue;
      }
      const count = wordCounts.get(word) || 0;
      wordCounts.set(word, count + 1);
    }

    const wordPairs = Array.from(wordCounts.entries());

    return wordPairs;
  }
}
