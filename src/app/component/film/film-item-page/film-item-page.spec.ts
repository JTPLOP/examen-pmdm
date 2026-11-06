import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmItemPage } from './film-item-page';

describe('FilmItemPage', () => {
  let component: FilmItemPage;
  let fixture: ComponentFixture<FilmItemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmItemPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmItemPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
