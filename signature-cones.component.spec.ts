import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureConesComponent } from './signature-cones.component';

describe('SignatureConesComponent', () => {
  let component: SignatureConesComponent;
  let fixture: ComponentFixture<SignatureConesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureConesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureConesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
