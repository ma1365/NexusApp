import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollDetailsComponent } from './dice-roll-details.component';

describe('DiceRollDetailsComponent', () => {
  let component: DiceRollDetailsComponent;
  let fixture: ComponentFixture<DiceRollDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceRollDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
