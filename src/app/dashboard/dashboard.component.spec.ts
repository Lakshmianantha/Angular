import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashBoardComponent;
  let fixture: ComponentFixture<DashBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashBoardComponent]
    });
    fixture = TestBed.createComponent(DashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
