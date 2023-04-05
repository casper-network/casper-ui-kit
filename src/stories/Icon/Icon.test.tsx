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
} from './Icon.stories';

describe('SvgIcon.stories', () => {
  it('should render the BlocksIcon', () => {
    render(<BlocksIcon icon="BlocksIcon" {...BlocksIcon.args} />);

    expect(screen.getByTestId('icon-component')).toBeInTheDocument();
  });

  it('should render the Validators Icon', () => {
    render(<ValidatorsIcon icon="ValidatorsIcon" {...ValidatorsIcon.args} />);

    expect(screen.getByTestId('icon-component')).toBeInTheDocument();
  });

  it('should render the Deploys Icon', () => {
    render(<DeploysIcon icon="DeploysIcon" {...DeploysIcon.args} />);

    expect(screen.getByTestId('icon-component')).toBeInTheDocument();
  });

  it('should render the Open Menu Icon', () => {
    render(<OpenMenuIcon icon="OpenMenuIcon" {...OpenMenuIcon.args} />);

    expect(screen.getByTestId('icon-component')).toBeInTheDocument();
  });

  it('should render the Close Menu Icon', () => {
    render(<CloseMenuIcon icon="CloseMenuIcon" {...CloseMenuIcon.args} />);

    expect(screen.getByTestId('icon-component')).toBeInTheDocument();
  });

  it('should render the Error Icon', () => {
    render(<ErrorIcon icon="ErrorIcon" {...ErrorIcon.args} />);

    expect(screen.getByTestId('icon-component')).toBeInTheDocument();
  });

  it('should render the Failure Icon', () => {
    render(<FailureIcon icon="FailureIcon" {...FailureIcon.args} />);

    expect(screen.getByTestId('icon-component')).toBeInTheDocument();
  });

  it('should render the Loader Icon', () => {
    render(<LoaderIcon icon="LoaderIcon" {...LoaderIcon.args} />);

    expect(screen.getByTestId('icon-component')).toBeInTheDocument();
  });

  it('should render the Success Icon', () => {
    render(<SuccessIcon icon="SuccessIcon" {...SuccessIcon.args} />);

    expect(screen.getByTestId('icon-component')).toBeInTheDocument();
  });

  it('should render the Button Icon', () => {
    render(<ButtonIcon icon="ButtonIcon" {...ButtonIcon.args} />);

    expect(screen.getByTestId('icon-component')).toBeInTheDocument();
  });
});
