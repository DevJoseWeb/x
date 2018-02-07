import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendasListComponent } from './agendas-list.component';

describe('AgendasListComponent', () => {
  let component: AgendasListComponent;
  let fixture: ComponentFixture<AgendasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
