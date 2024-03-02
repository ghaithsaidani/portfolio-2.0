import { render } from '@testing-library/react';

import Contacts2 from './contacts2';

describe('Contacts2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Contacts2 />);
    expect(baseElement).toBeTruthy();
  });
});
