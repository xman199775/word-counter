import { TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WordCounterModule } from '../../word-counter.module';
import { AppModule } from '../../../../app.module';

describe('ResultComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        WordCounterModule,
        AppModule
      ],
      declarations: [
        ResultComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ResultComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should return word count 2',() => {
    const fixture = TestBed.createComponent(ResultComponent);
    const app = fixture.componentInstance;
    const string = 'Ahmed Ahmed';
    expect(app.wordCount(string)).toEqual([['ahmed',2]]);
  });

  it('should return no word',() => {
    const fixture = TestBed.createComponent(ResultComponent);
    const app = fixture.componentInstance;
    const string = ' ';
    expect(app.wordCount(string)).toEqual([]);
  });

  it('should return count words',() => {
    const fixture = TestBed.createComponent(ResultComponent);
    const app = fixture.componentInstance;
    const string = 'Ahmed Sayed       Ahmed';
    expect(app.wordCount(string)).toEqual([['ahmed',2],['sayed',1]]);
  });
});
