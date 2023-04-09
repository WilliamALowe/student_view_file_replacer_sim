import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeObjectComponent } from './iframe-object.component';

describe('IframeObjectComponent', () => {
  let component: IframeObjectComponent;
  let fixture: ComponentFixture<IframeObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
