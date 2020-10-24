import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemShimmerComponent } from './post-item-shimmer.component';

describe('PostItemShimmerComponent', () => {
  let component: PostItemShimmerComponent;
  let fixture: ComponentFixture<PostItemShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItemShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
