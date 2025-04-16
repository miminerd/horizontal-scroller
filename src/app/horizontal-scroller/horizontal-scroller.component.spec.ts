import { HorizontalScrollerComponent } from './horizontal-scroller.component';
import { render, RenderResult } from '@testing-library/angular';

describe('HorizontalScrollerComponent', () => {
  let component: RenderResult<HorizontalScrollerComponent>;

  beforeEach(async () => {
    component = await render(HorizontalScrollerComponent, {
      imports: [],
      componentProperties: {
        speed: 20,
      },
    });
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });

  it('has by default speed of 20 seconds and displays logos', () => {
    expect(component.getAllByTestId('logo-img')).toHaveLength(16);
    expect(component.getByTestId('logo-container')).toHaveClass(
      'animate-scroll'
    );
  });
});
