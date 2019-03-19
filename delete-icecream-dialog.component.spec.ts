import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIcecreamDialogComponent } from './delete-icecream-dialog.component';

describe('DeleteIcecreamDialogComponent', () => {
  let component: DeleteIcecreamDialogComponent;
  let fixture: ComponentFixture<DeleteIcecreamDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteIcecreamDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIcecreamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
