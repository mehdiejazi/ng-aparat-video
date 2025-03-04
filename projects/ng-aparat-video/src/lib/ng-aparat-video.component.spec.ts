import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAparatVideoComponent } from './ng-aparat-video.component';

describe('NgAparatVideoComponent', () => {
  let component: NgAparatVideoComponent;
  let fixture: ComponentFixture<NgAparatVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAparatVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAparatVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
