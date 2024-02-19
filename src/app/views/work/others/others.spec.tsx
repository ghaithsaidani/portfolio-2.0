import { render } from '@testing-library/react';

import Others from './others';

describe('Others', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Others />);
    expect(baseElement).toBeTruthy();
  });
});
