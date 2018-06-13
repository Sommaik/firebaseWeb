import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormComponent } from './demo-form.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFirestoreModule } from 'angularfire2/firestore';

describe('DemoFormComponent', () => {
  let component: DemoFormComponent;
  let fixture: ComponentFixture<DemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormComponent ],
      imports: [
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        RouterTestingModule.withRoutes([

        ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
