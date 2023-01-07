import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbarComponent } from './cartbar.component';

describe('CartbarComponent', () => {
  let component: CartbarComponent;
  let fixture: ComponentFixture<CartbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
