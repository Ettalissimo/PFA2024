import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsTagComponent } from './blogs-tag.component';

describe('BlogsTagComponent', () => {
  let component: BlogsTagComponent;
  let fixture: ComponentFixture<BlogsTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsTagComponent]
    });
    fixture = TestBed.createComponent(BlogsTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
