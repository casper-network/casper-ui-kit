import React from 'react';
import styled from '@emotion/styled';

export interface LoaderProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Loader: React.FC<LoaderProps> = ({ size } = { size: 'lg' }) => {
  const tempSvg = (
    <svg data-testid="loader" viewBox="3 3 18 18">
      <path
        fill="#0421CB"
        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
      />
      <path
        fill="#D51E4A"
        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
      />
    </svg>
  );

  let loaderSize = '80px';
  switch (size) {
    case 'xs':
      loaderSize = '2rem';
      break;
    case 'sm':
      loaderSize = '2.25rem';
      break;
    case 'md':
      loaderSize = '3rem';
      break;
    case 'lg':
      loaderSize = '4rem';
      break;
    default:
      break;
  }

  return (
    <LoaderWrapper>
      <LoaderStatus size={loaderSize} aria-label="Loading..." role="status">
        {/* <LoaderIcon data-testid="loader" size={loaderSize} /> */}
        <LoaderIcon size={loaderSize}>{tempSvg}</LoaderIcon>
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

const LoaderIcon = styled.div<{ size: string }>`
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
