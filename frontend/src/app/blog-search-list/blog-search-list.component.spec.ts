import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSearchListComponent } from './blog-search-list.component';

describe('BlogSearchListComponent', () => {
  let component: BlogSearchListComponent;
  let fixture: ComponentFixture<BlogSearchListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogSearchListComponent]
    });
    fixture = TestBed.createComponent(BlogSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
