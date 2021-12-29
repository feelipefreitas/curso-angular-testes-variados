import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentToRenderComponent } from './component-to-render.component';

describe('ComponentToRenderComponent', () => {
  let component: ComponentToRenderComponent;
  let fixture: ComponentFixture<ComponentToRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentToRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentToRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
