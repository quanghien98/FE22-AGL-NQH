import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1BestmobileComponent } from './baitap1-bestmobile.component';

describe('Baitap1BestmobileComponent', () => {
  let component: Baitap1BestmobileComponent;
  let fixture: ComponentFixture<Baitap1BestmobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1BestmobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1BestmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
