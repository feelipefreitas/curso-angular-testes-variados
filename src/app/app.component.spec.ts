import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentToRenderComponent } from './component-to-render/component-to-render.component';
import { ReturnBackgroundPipe } from './pipes/return-background.pipe';

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
      imports: [
        FormsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
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

  describe('Select Tests', () => {
    it('should select the status "Inativo"', () => {
      const statusEl = fixture.debugElement.query(By.css('#test_karma-select')).nativeElement;

      const selectedOption = statusEl.options[1].value;
      
      statusEl.value = selectedOption;
      statusEl.dispatchEvent(new Event('change'));

      fixture.detectChanges();
      
      const currentStatusEl = fixture.debugElement.query(By.css('#test_karma-current-status')).nativeElement;

      expect(currentStatusEl.textContent).toBe('Status Atual: ' + selectedOption);
    });
  });

  describe('Input Tests', () => {
    fit('should filter the people list', () => {
      const inputFilter = fixture.debugElement.query(By.css('#test_karma-input-filter')).nativeElement;

      inputFilter.value = 'Laura';
      inputFilter.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      const peopleList = fixture.debugElement.queryAll(By.css('#test_karma-people-list'));

      expect(component.peopleListFiltered.length).toBe(1);
      expect(component.peopleListFiltered[0].name).toBe('Laura');
      expect(peopleList.length).toBe(1);
    });
  });
});
