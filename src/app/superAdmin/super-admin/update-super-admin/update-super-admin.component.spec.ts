import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuperAdminComponent } from './update-super-admin.component';

describe('UpdateSuperAdminComponent', () => {
  let component: UpdateSuperAdminComponent;
  let fixture: ComponentFixture<UpdateSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuperAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
