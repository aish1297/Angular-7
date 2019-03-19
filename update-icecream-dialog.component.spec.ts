import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIcecreamDialogComponent } from './update-icecream-dialog.component';

describe('UpdateIcecreamDialogComponent', () => {
  let component: UpdateIcecreamDialogComponent;
  let fixture: ComponentFixture<UpdateIcecreamDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateIcecreamDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIcecreamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
