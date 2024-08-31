import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionPagPage } from './confirmacion-pag.page';

describe('ConfirmacionPagPage', () => {
  let component: ConfirmacionPagPage;
  let fixture: ComponentFixture<ConfirmacionPagPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionPagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
