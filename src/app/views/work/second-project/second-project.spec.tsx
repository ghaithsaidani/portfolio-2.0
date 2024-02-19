import { render } from '@testing-library/react';

import SecondProject from './second-project';

describe('SecondProject', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SecondProject />);
    expect(baseElement).toBeTruthy();
  });
});
