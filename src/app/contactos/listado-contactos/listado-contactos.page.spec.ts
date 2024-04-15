import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoContactosPage } from './listado-contactos.page';

describe('ListadoContactosPage', () => {
  let component: ListadoContactosPage;
  let fixture: ComponentFixture<ListadoContactosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoContactosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
