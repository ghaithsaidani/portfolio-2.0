import { render } from '@testing-library/react';

import ThirdProject from './third-project';

describe('ThirdProject', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThirdProject />);
    expect(baseElement).toBeTruthy();
  });
});
