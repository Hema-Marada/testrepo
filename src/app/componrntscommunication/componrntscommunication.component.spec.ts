import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponrntscommunicationComponent } from './componrntscommunication.component';

describe('ComponrntscommunicationComponent', () => {
  let component: ComponrntscommunicationComponent;
  let fixture: ComponentFixture<ComponrntscommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponrntscommunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponrntscommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
