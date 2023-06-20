import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { colors } from 'src/theme/colors';
import CopiedSVG from '../../../assets/svg/icons/copied-icon.svg';
import CopySVG from '../../../assets/svg/icons/copy-icon.svg';
import { pxToRem } from '../../../utils';

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export interface CopyToClipboardProps {
  readonly textToCopy: string;
  readonly width?: number;
  readonly height?: number;
  readonly copyColor?: string;
  readonly focusColor?: string;
  readonly hoverColor?: string;
  readonly copiedColor?: string;
  readonly isCopied: boolean;
  readonly setIsCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  textToCopy,
  copyColor,
  focusColor,
  hoverColor,
  copiedColor,
  width,
  height,
  isCopied,
  setIsCopied,
}) => {
  const copyFn = () => {
    setIsCopied(true);
    copyToClipboard(textToCopy);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isCopied) {
      timeoutId = setTimeout(() => setIsCopied(false), 3000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isCopied, setIsCopied]);

  return (
    <CopyButton type="button" disabled={isCopied} onClick={copyFn}>
      {isCopied ? (
        <CopiedIconWrapper
          data-testid="copied-icon"
          height={height}
          width={width}
          copiedColor={copiedColor}>
          <CopiedSVG />
        </CopiedIconWrapper>
      ) : (
        <CopyIconWrapper
          data-testid="copy-icon"
          height={height}
          width={width}
          hoverColor={hoverColor}
          focusColor={focusColor}
          copyColor={copyColor}>
          <CopySVG />
        </CopyIconWrapper>
      )}
    </CopyButton>
  );
};

const CopyIconWrapper = styled.div<{
  copyColor?: string;
  hoverColor?: string;
  focusColor?: string;
  height?: number;
  width?: number;
}>`
  svg {
    fill: ${({ copyColor }) => copyColor ?? colors.secondary.CasperGreen};
    transition: all;
    width: ${({ width }) => (width ? `${pxToRem(width)}` : '1rem')};
    height: ${({ height }) => (height ? `${pxToRem(height)}` : '1rem')};
    margin-left: ${pxToRem(5)};

    :focus {
      color: ${({ focusColor }) => focusColor ?? colors.secondary.CasperGreen};
    }
    :hover {
      fill: ${({ hoverColor }) => hoverColor ?? colors.primary.CasperRed};
    }
  }
`;

const CopiedIconWrapper = styled.div<{
  copiedColor?: string;
  width?: number;
  height?: number;
}>`
  svg {
    width: ${({ width }) => (width ? `${pxToRem(width)}` : '1rem')};
    height: ${({ height }) => (height ? `${pxToRem(height)}` : '1rem')};
    background-color: ${({ copiedColor }) =>
      copiedColor ?? colors.secondary.CasperGreen};
    border-radius: 0.125rem;
    margin-left: ${pxToRem(5)};
  }
`;

const CopyButton = styled.button`
  border: none;
  background-color: transparent;
`;
