import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosPokemonComponent } from './atributos-pokemon.component';

describe('AtributosPokemonComponent', () => {
  let component: AtributosPokemonComponent;
  let fixture: ComponentFixture<AtributosPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributosPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributosPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
