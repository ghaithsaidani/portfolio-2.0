import { render } from '@testing-library/react';

import CertificationsAssociativeLife from './certifications-associative-life';

describe('CertificationsAssociativeLife', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CertificationsAssociativeLife />);
    expect(baseElement).toBeTruthy();
  });
});
