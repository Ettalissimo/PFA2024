import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSelectedComponent } from './blog-selected.component';

describe('BlogSelectedComponent', () => {
  let component: BlogSelectedComponent;
  let fixture: ComponentFixture<BlogSelectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogSelectedComponent]
    });
    fixture = TestBed.createComponent(BlogSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
