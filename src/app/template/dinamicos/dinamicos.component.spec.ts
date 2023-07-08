import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DinamicosComponent } from 'src/app/template/dinamicos/dinamicos.component';

describe('DinamicosComponent', () => {
  let component: DinamicosComponent;
  let fixture: ComponentFixture<DinamicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [ DinamicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
