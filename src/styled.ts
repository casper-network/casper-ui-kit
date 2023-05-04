import styled from '@emotion/styled';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const MyStyled: typeof styled =
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  typeof styled === 'function' ? styled : (styled as any).default;

export default MyStyled;
