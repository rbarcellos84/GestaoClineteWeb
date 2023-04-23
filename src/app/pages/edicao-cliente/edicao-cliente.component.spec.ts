import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdicaoClienteComponent } from './edicao-cliente.component';

describe('EdicaoClienteComponent', () => {
  let component: EdicaoClienteComponent;
  let fixture: ComponentFixture<EdicaoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
