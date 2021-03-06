import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoListComponent } from './demo-list.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFirestoreModule } from 'angularfire2/firestore';

describe('DemoListComponent', () => {
  let component: DemoListComponent;
  let fixture: ComponentFixture<DemoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoListComponent ],
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
    fixture = TestBed.createComponent(DemoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
