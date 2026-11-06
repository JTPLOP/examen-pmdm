import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuToolbar } from './menu-toolbar';

describe('MenuToolbar', () => {
  let component: MenuToolbar;
  let fixture: ComponentFixture<MenuToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuToolbar],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
