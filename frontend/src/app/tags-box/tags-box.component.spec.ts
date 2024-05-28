import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsBoxComponent } from './tags-box.component';

describe('TagsBoxComponent', () => {
  let component: TagsBoxComponent;
  let fixture: ComponentFixture<TagsBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagsBoxComponent]
    });
    fixture = TestBed.createComponent(TagsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
