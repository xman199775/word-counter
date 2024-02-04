import { TestBed } from '@angular/core/testing';

import { TextViewerComponent } from './text-viewer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WordCounterModule } from '../../word-counter.module';
import { AppModule } from '../../../../app.module';

describe('TextViewerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        WordCounterModule,
        AppModule
      ],
      declarations: [
        TextViewerComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TextViewerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
