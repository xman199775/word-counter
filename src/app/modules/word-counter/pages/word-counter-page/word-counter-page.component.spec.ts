import { TestBed } from '@angular/core/testing';

import { WordCounterPageComponent } from './word-counter-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WordCounterModule } from '../../word-counter.module';
import { AppModule } from '../../../../app.module';

describe('WordCounterPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        WordCounterModule,
        AppModule
      ],
      declarations: [
        WordCounterPageComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WordCounterPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
