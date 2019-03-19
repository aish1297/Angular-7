import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIcecreamDialogComponent } from './add-icecream-dialog.component';

describe('AddIcecreamDialogComponent', () => {
  let component: AddIcecreamDialogComponent;
  let fixture: ComponentFixture<AddIcecreamDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIcecreamDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIcecreamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
