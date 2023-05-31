import React, { useState, useEffect } from 'react';
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
}
export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  textToCopy,
  copyColor,
  focusColor,
  hoverColor,
  copiedColor,
  width,
  height,
}) => {
  const [isCopied, setCopied] = useState(false);
  const copyFn = () => {
    setCopied(true);
    copyToClipboard(textToCopy);
  };
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isCopied) {
      timeoutId = setTimeout(() => setCopied(false), 3000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isCopied]);

  return (
    <CopyButton type="button" disabled={isCopied} onClick={copyFn}>
      {isCopied ? (
        <CopiedIcon
          data-testid="copied-icon"
          height={height}
          width={width}
          copiedColor={copiedColor}
        />
      ) : (
        <CopyIcon
          data-testid="copy-icon"
          height={height}
          width={width}
          hoverColor={hoverColor}
          focusColor={focusColor}
          copyColor={copyColor}
        />
      )}
    </CopyButton>
  );
};

const CopyIcon = styled(CopySVG)<{
  copyColor: string;
  hoverColor: string;
  focusColor: string;
  height: number;
  width: number;
}>`
  fill: ${({ copyColor }) =>
    copyColor ? (copyColor as string) : colors.secondary.CasperGreen};
  transition: all;
  width: ${({ width }) => (width ? `${pxToRem(width as number)}` : '1rem')};
  height: ${({ height }) => (height ? `${pxToRem(height as number)}` : '1rem')};
  margin-left: ${pxToRem(5)};

  :focus {
    color: ${({ focusColor }) =>
      focusColor ? (focusColor as string) : colors.secondary.CasperGreen};
  }
  :hover {
    fill: ${({ hoverColor }) =>
      hoverColor ? (hoverColor as string) : colors.primary.CasperRed};
  }
`;

const CopiedIcon = styled(CopiedSVG)<{
  copiedColor: string;
  width: number;
  height: number;
}>`
  width: ${({ width }) => (width ? `${pxToRem(width as number)}` : '1rem')};
  height: ${({ height }) => (height ? `${pxToRem(height as number)}` : '1rem')};
  background-color: ${({ copiedColor }) =>
    copiedColor ? (copiedColor as string) : colors.secondary.CasperGreen};
  border-radius: 0.125rem;
`;

const CopyButton = styled.button`
  border: none;
  background-color: transparent;
`;
