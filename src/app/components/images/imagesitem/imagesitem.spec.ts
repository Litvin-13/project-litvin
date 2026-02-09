import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagesitem } from './imagesitem';

describe('Imagesitem', () => {
  let component: Imagesitem;
  let fixture: ComponentFixture<Imagesitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imagesitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imagesitem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
