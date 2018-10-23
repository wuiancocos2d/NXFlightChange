import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmisSearchComponent } from './omis-search.component';

describe('OmisSearchComponent', () => {
  let component: OmisSearchComponent;
  let fixture: ComponentFixture<OmisSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmisSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmisSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
