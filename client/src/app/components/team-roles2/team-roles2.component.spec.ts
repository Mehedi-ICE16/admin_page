import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRoles2Component } from './team-roles2.component';

describe('TeamRoles2Component', () => {
  let component: TeamRoles2Component;
  let fixture: ComponentFixture<TeamRoles2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamRoles2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamRoles2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
