import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserDetailPresComponent } from './admin-user-detail-pres.component';

describe('AdminUserDetailPresComponent', () => {
  let component: AdminUserDetailPresComponent;
  let fixture: ComponentFixture<AdminUserDetailPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserDetailPresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserDetailPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
