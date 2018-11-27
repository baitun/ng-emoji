import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableEmojiComponent } from './table-emoji.component';

describe('TableEmojiComponent', () => {
  let component: TableEmojiComponent;
  let fixture: ComponentFixture<TableEmojiComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEmojiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
