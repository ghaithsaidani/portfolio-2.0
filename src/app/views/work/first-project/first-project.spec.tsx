import { render } from '@testing-library/react';

import FirstProject from './first-project';

describe('FirstProject', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirstProject />);
    expect(baseElement).toBeTruthy();
  });
});
