import { RenderResult, render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppHeaderComponent', () => {
  let component: RenderResult<AppComponent>;

  beforeEach(async () => {
    component = await render(AppComponent, {
      imports: [],
    });
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });
});
