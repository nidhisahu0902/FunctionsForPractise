import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmemberComponent } from './allmember.component';

describe('AllmemberComponent', () => {
  let component: AllmemberComponent;
  let fixture: ComponentFixture<AllmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
