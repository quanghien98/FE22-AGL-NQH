import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1BestlaptopComponent } from './baitap1-bestlaptop.component';

describe('Baitap1BestlaptopComponent', () => {
  let component: Baitap1BestlaptopComponent;
  let fixture: ComponentFixture<Baitap1BestlaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1BestlaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1BestlaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
