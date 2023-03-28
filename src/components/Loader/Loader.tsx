import React from 'react';
import styled from '@emotion/styled';
import LoaderSVG from '../../assets/svg/icons/loader-icon.svg';

export interface LoaderProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Loader: React.FC<LoaderProps> = ({ size } = { size: 'lg' }) => {
  const getLoaderSize = (size?: LoaderProps['size']) => {
    switch (size) {
      case 'xs':
        return '2rem';
      case 'sm':
        return '2.25rem';
      case 'md':
        return '3rem';
      case 'lg':
        return '4rem';
      default:
        return '80px';
    }
  };

  return (
    <LoaderWrapper>
      <LoaderStatus
        size={getLoaderSize(size)}
        aria-label="Loading..."
        role="status">
        <LoaderIcon size={getLoaderSize(size)}>
          <LoaderSVG />
        </LoaderIcon>
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

const LoaderIcon = styled(LoaderSVG)<{ size: string }>`
  // TODO: figure out why TS doesn't know the type here
  height: ${({ size }) => size as string};
  width: ${({ size }) => size as string};
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
