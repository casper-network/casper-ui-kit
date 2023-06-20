import { InputHTMLAttributes } from 'react';

export interface BaseRadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  readonly label: string;
  readonly id: string;
  readonly diameter?: number;
  readonly borderColor?: string;
  readonly centerColor?: string;
  readonly required?: boolean;
  readonly disabled?: boolean;
  readonly className?: string;
}

export type RadioButtonLabelPositions = 'top' | 'right' | 'bottom' | 'left';

export interface RadioButtonBoxGroupOptions {
  readonly value: string;
  readonly name?: string;
  readonly color?: string;
  readonly required?: boolean;
  readonly disabled?: boolean;
  readonly className?: string;
}

export interface OptionProps {
  readonly label: string;
  readonly name?: string;
  readonly gapSize?: number;
  readonly verticalPadding?: number;
  readonly labelPosition?: RadioButtonLabelPositions;
  readonly borderColor?: string;
  readonly centerColor?: string;
  readonly required?: boolean;
  readonly disabled?: boolean;
  readonly className?: string;
}
