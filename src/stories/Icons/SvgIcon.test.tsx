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

describe('SvgIcon.stories', () => {
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

  it('should render the Validators Icon', () => {
    render(
      <ValidatorsIcon
        icon="ValidatorsIcon"
        title="ValidatorsIcon"
        {...ValidatorsIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the Deploys Icon', () => {
    render(
      <DeploysIcon
        icon="DeploysIcon"
        title="DeploysIcon"
        {...DeploysIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the Open Menu Icon', () => {
    render(
      <OpenMenuIcon
        icon="OpenMenuIcon"
        title="OpenMenuIcon"
        {...OpenMenuIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the Close Menu Icon', () => {
    render(
      <CloseMenuIcon
        icon="CloseMenuIcon"
        title="CloseMenuIcon"
        {...CloseMenuIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the Error Icon', () => {
    render(
      <ErrorIcon icon="ErrorIcon" title="ErrorIcon" {...ErrorIcon.args} />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the Failure Icon', () => {
    render(
      <FailureIcon
        icon="FailureIcon"
        title="FailureIcon"
        {...FailureIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the Loader Icon', () => {
    render(
      <LoaderIcon icon="LoaderIcon" title="LoaderIcon" {...LoaderIcon.args} />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the Success Icon', () => {
    render(
      <SuccessIcon
        icon="SuccessIcon"
        title="SuccessIcon"
        {...SuccessIcon.args}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should render the Button Icon', () => {
    render(
      <ButtonIcon icon="ButtonIcon" title="ButtonIcon" {...ButtonIcon.args} />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
