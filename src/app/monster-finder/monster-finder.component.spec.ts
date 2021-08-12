import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterFinderComponent } from './monster-finder.component';

describe('MonsterFinderComponent', () => {
  let component: MonsterFinderComponent;
  let fixture: ComponentFixture<MonsterFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
