import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentToRenderComponent } from './component-to-render/component-to-render.component';
import { ReturnBackgroundPipe } from './return-background.pipe';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ComponentToRenderComponent,
        ReturnBackgroundPipe
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the component', () => {
    component.showComponent = false;
    
    component.renderComponent();

    fixture.detectChanges();

    const componentToRenderComponent = fixture.debugElement.query(By.directive(ComponentToRenderComponent));

    expect(componentToRenderComponent).toBeTruthy();

    component.renderComponent();

    fixture.detectChanges();

    const componentToRenderEl = fixture.debugElement.query(By.css('#teste_karma-component-to-render'));

    expect(componentToRenderEl).not.toBeTruthy();
  });

  it('should apply the border red', () => {
    component.showComponent = false;

    fixture.detectChanges();

    let containerEl = fixture.debugElement.query(By.css('#teste_karma-container'));

    expect(containerEl.nativeElement).toHaveClass('border-red');

    component.renderComponent();

    fixture.detectChanges();

    containerEl = fixture.debugElement.query(By.css('#teste_karma-container'));

    expect(containerEl.nativeElement).not.toHaveClass('border-red');
  });

  it('should apply the background using pipe', () => {
    const returnBackgroundPipe = new ReturnBackgroundPipe();

   component.showComponent = false;

   component.renderComponent();

   fixture.detectChanges();

   let backgroundEl = fixture.debugElement.query(By.css('#teste_karma-background'));

   expect(backgroundEl.nativeElement).toHaveClass(returnBackgroundPipe.transform(component.showComponent));

   component.renderComponent();

   fixture.detectChanges();

   backgroundEl = fixture.debugElement.query(By.css('#teste_karma-background'));

   expect(backgroundEl.nativeElement).not.toHaveClass(returnBackgroundPipe.transform(component.showComponent));
  });
});
