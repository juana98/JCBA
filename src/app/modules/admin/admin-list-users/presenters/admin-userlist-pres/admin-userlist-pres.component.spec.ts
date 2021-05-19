import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserlistPresComponent } from './admin-userlist-pres.component';

describe('AdminUserlistPresComponent', () => {
  let component: AdminUserlistPresComponent;
  let fixture: ComponentFixture<AdminUserlistPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserlistPresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserlistPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
