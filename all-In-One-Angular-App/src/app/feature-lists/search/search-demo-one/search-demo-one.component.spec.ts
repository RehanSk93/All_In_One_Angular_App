import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDemoOneComponent } from './search-demo-one.component';

describe('SearchDemoOneComponent', () => {
  let component: SearchDemoOneComponent;
  let fixture: ComponentFixture<SearchDemoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDemoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDemoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
