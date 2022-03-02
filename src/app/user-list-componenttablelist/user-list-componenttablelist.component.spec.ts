import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponenttablelistComponent } from './user-list-componenttablelist.component';

describe('UserListComponenttablelistComponent', () => {
  let component: UserListComponenttablelistComponent;
  let fixture: ComponentFixture<UserListComponenttablelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponenttablelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponenttablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
