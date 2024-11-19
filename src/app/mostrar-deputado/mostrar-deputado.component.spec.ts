import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDeputadoComponent } from './mostrar-deputado.component';

describe('MostrarDeputadoComponent', () => {
  let component: MostrarDeputadoComponent;
  let fixture: ComponentFixture<MostrarDeputadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarDeputadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarDeputadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
