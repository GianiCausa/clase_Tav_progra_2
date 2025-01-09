import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecimasPage } from './decimas.page';

describe('DecimasPage', () => {
  let component: DecimasPage;
  let fixture: ComponentFixture<DecimasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
