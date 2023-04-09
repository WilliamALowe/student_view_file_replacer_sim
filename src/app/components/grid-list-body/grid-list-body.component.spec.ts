import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListBodyComponent } from './grid-list-body.component';

describe('GridListBodyComponent', () => {
  let component: GridListBodyComponent;
  let fixture: ComponentFixture<GridListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
