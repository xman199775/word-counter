import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { WordCounterRoutingModule } from './word-counter.routing.module';

import { TextUploaderComponent } from './components/text-uploader/text-uploader.component';
import { TextViewerComponent } from './components/text-viewer/text-viewer.component';
import { ResultComponent } from './components/result/result.component';

import { WordCounterPageComponent } from './pages/word-counter-page/word-counter-page.component';


@NgModule({
  declarations: [
    TextUploaderComponent,
    TextViewerComponent,
    ResultComponent,
    WordCounterPageComponent
  ],
  imports: [
    WordCounterRoutingModule,
    ToolbarModule,
    PanelModule,
    HttpClientModule,
    FileUploadModule,
    InputTextareaModule,
    TableModule,
    ToastModule
  ],providers:[
    MessageService
  ]
})
export class WordCounterModule { }
