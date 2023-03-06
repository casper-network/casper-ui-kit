import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as LoaderSvg } from '../Icons/assets/loader-icon.svg';

export interface LoaderProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Loader: React.FC<LoaderProps> = ({ size } = { size: 'lg' }) => {
  let loaderSize = '80px';

  switch (size) {
    case 'xs':
      loaderSize = '1rem';
      break;
    case 'sm':
      loaderSize = '1.25rem';
      break;
    case 'md':
      loaderSize = '2rem';
      break;
    case 'lg':
      loaderSize = '3rem';
      break;
    default:
      break;
  }

  return (
    <LoaderWrapper>
      <LoaderStatus size={loaderSize} aria-label="Loading..." role="status">
        <LoaderIcon data-testid="loader" size={loaderSize} />
      </LoaderStatus>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

const LoaderStatus = styled.div<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;

const LoaderIcon = styled(LoaderSvg)<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
