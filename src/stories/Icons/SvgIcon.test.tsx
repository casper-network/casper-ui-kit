import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import {
  BlocksIcon,
  ValidatorsIcon,
  DeploysIcon,
  OpenMenuIcon,
  CloseMenuIcon,
  ErrorIcon,
  FailureIcon,
  LoaderIcon,
  SuccessIcon,
  ButtonIcon,
} from './SvgIcon.stories';

describe('SvgIcon', () => {
  it('should render the BlocksIcon', () => {
    render(
      <BlocksIcon
        icon="BlocksIcon"
        title='icon="BlocksIcon'
        {...BlocksIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the ValidatorsIcon', () => {
    render(
      <ValidatorsIcon
        icon="ValidatorsIcon"
        title="ValidatorsIcon"
        {...ValidatorsIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the DeploysIcon', () => {
    render(
      <DeploysIcon
        icon="DeploysIcon"
        title="DeploysIcon"
        {...DeploysIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the OpenMenuIcon', () => {
    render(
      <OpenMenuIcon
        icon="OpenMenuIcon"
        title="OpenMenuIcon"
        {...OpenMenuIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the CloseMenuIcon', () => {
    render(
      <CloseMenuIcon
        icon="CloseMenuIcon"
        title="CloseMenuIcon"
        {...CloseMenuIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the ErrorIcon', () => {
    render(
      <ErrorIcon icon="ErrorIcon" title="ErrorIcon" {...ErrorIcon.args} />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the FailureIcon', () => {
    render(
      <FailureIcon
        icon="FailureIcon"
        title="FailureIcon"
        {...FailureIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the LoaderIcon', () => {
    render(
      <LoaderIcon icon="LoaderIcon" title="LoaderIcon" {...LoaderIcon.args} />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the SuccessIcon', () => {
    render(
      <SuccessIcon
        icon="SuccessIcon"
        title="SuccessIcon"
        {...SuccessIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should render the ButtonIcon', () => {
    render(
      <ButtonIcon icon="ButtonIcon" title="ButtonIcon" {...ButtonIcon.args} />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
