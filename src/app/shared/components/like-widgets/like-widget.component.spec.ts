import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create a component', () => {
    expect(component).toBeTruthy();
  });

  // erro corrigido , havia um erro na construção de regex:  /^[A-Za-z]+[\w\-\:\.]*$/;  o \w estava em maiúsculo

  it('Should auto generate ID when id Input property is missing', () => {
    fixture.detectChanges(); // detectando as mudanças que foram alteradas
    expect(component.id).toBeTruthy();
  });

  it('Should not generate ID when id Input property is present', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  //Testando as propriedades do output
  // Para garantir que o subscribe será realizada, pode trocar o () da chamada por uma palavra e chamá-la após o expect como um metodo
  //Se não for chamado esse done, por algum motivo, isso vai gerar um erro no teste.
  // it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`, (done) => {
  //   fixture.detectChanges();
  //   component.liked.subscribe(() => {
  //     expect(true).toBeTrue();
  //     done();
  //   });
  //   component.like();
  // });

  //Melhorando o it utilizando o spyOn e o toHaveBeenCalled
  it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`, () => {
    spyOn(component.liked, 'emit'); //o spyOn verifica o component e puxa a função emit para evitar dar erro
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
