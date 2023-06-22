import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CopyToClipboard } from '../../../components/utility/CopyToClipboard';

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe(CopyToClipboard, () => {
  jest.spyOn(navigator.clipboard, 'writeText');

  it('should render the copy icon on first load', () => {
    const { getByTestId } = render(
      <CopyToClipboard
        isCopied={false}
        setIsCopied={jest.fn}
        textToCopy="copy this"
      />,
    );

    const copyIcon = getByTestId('copy-icon');

    expect(copyIcon).toBeInTheDocument();
  });

  it('should render copied icon after copy', async () => {
    const { findByTestId } = render(
      <CopyToClipboard isCopied setIsCopied={jest.fn} textToCopy="copy this" />,
    );

    const copiedIcon = await findByTestId('copied-icon');

    expect(copiedIcon).toBeInTheDocument();
  });

  it('should render copy icon after copy icon click and waiting for the timeout to run', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    const { getByTestId, findByTestId } = render(
      <CopyToClipboard
        isCopied={false}
        setIsCopied={jest.fn}
        textToCopy="copy this"
      />,
    );

    const copyIcon = getByTestId('copy-icon');

    fireEvent.click(copyIcon);

    act(() => {
      jest.runAllTimers();
    });

    const copyIconAfterClick = await findByTestId('copy-icon');

    expect(copyIconAfterClick).toBeInTheDocument();
  });
});
