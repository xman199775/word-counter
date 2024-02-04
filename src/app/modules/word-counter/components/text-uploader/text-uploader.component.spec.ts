import { TestBed } from '@angular/core/testing';

import { TextUploaderComponent } from './text-uploader.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WordCounterModule } from '../../word-counter.module';
import { AppModule } from '../../../../app.module';

describe('TextUploaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        WordCounterModule,
        AppModule
      ],
      declarations: [
        TextUploaderComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TextUploaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
