import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDbFormComponent } from './demo-db-form.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs';

describe('DemoDbFormComponent', () => {
  let component: DemoDbFormComponent;
  let fixture: ComponentFixture<DemoDbFormComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let params = { mode: "EDIT", code: "001" }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoDbFormComponent],
      imports: [
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        RouterTestingModule.withRoutes([

        ])
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe: (() => {
                of(params)
              }),
            },
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mode edit', () => {
    expect(component.mode).toEqual("EDIT")
  })
});
