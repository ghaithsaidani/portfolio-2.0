import { render } from '@testing-library/react';

import Studies from './studies';

describe('Studies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Studies />);
    expect(baseElement).toBeTruthy();
  });
});
