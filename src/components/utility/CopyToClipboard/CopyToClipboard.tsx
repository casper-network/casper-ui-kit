import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { colors } from 'src/theme/colors';
import CopiedSVG from '../../../assets/svg/icons/copied-icon.svg';
import CopySVG from '../../../assets/svg/icons/copy-icon.svg';
import { pxToRem } from '../../../utils';

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);

  // add to satisfy onClick TS typing
  return undefined;
};

export interface CopyToClipboardProps {
  readonly textToCopy: string;
  readonly size?: number;
}
export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  textToCopy,
  size = 16,
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
        <CopiedIcon data-testid="copied-icon" size={size} />
      ) : (
        <CopyIcon data-testid="copy-icon" />
      )}
    </CopyButton>
  );
};

const CopyIcon = styled(CopySVG)<{
  size: number;
}>`
  fill: ${colors.secondary.CasperGreen};
  transition: all;
  width: ${({ size }) => pxToRem(size)};
  height: ${({ size }) => pxToRem(size)};
  margin-left: ${pxToRem(5)};

  :focus {
    color: ${colors.secondary.CasperGreen};
  }
  :hover {
    fill: ${colors.primary.CasperRed};
  }
`;

const CopiedIcon = styled(CopiedSVG)`
  width: ${({ size }) => pxToRem(size)};
  height: ${({ size }) => pxToRem(size)};
  background-color: ${colors.secondary.CasperGreen};
  border-radius: 0.125rem;
`;

const CopyButton = styled.button`
  border: none;
  background-color: transparent;
`;
