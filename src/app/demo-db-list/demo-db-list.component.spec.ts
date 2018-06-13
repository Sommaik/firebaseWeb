import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDbListComponent } from './demo-db-list.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterTestingModule } from '@angular/router/testing';

describe('DemoDbListComponent', () => {
  let component: DemoDbListComponent;
  let fixture: ComponentFixture<DemoDbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDbListComponent ],
      imports: [
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        RouterTestingModule.withRoutes([

        ])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
