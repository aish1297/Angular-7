import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamsComponent } from './icecreams.component';

describe('IcecreamsComponent', () => {
  let component: IcecreamsComponent;
  let fixture: ComponentFixture<IcecreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcecreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
