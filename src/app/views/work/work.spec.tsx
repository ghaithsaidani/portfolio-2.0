import { render } from '@testing-library/react';

import Work from './work';

describe('Work', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Work />);
    expect(baseElement).toBeTruthy();
  });
});
