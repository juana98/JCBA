import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserlistContComponent } from './admin-userlist-cont.component';

describe('AdminUserlistContComponent', () => {
  let component: AdminUserlistContComponent;
  let fixture: ComponentFixture<AdminUserlistContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserlistContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserlistContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
