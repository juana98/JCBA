import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserDetailContComponent } from './admin-user-detail-cont.component';

describe('AdminUserDetailContComponent', () => {
  let component: AdminUserDetailContComponent;
  let fixture: ComponentFixture<AdminUserDetailContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserDetailContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserDetailContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
