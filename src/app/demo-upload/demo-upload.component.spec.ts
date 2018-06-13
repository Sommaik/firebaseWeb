import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoUploadComponent } from './demo-upload.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { RouterTestingModule } from '@angular/router/testing';

describe('DemoUploadComponent', () => {
  let component: DemoUploadComponent;
  let fixture: ComponentFixture<DemoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoUploadComponent ],
      imports: [
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        RouterTestingModule.withRoutes([

        ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
