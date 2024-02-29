import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicHomeComponent } from './music-home.component';

describe('MusicHomeComponent', () => {
  let component: MusicHomeComponent;
  let fixture: ComponentFixture<MusicHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
