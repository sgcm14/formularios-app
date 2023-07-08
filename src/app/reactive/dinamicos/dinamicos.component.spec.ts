import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DinamicosReactiveComponent } from 'src/app/reactive/dinamicos/dinamicos.component';

describe('DinamicosReactiveComponent', () => {
  let component: DinamicosReactiveComponent;
  let fixture: ComponentFixture<DinamicosReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ DinamicosReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicosReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
