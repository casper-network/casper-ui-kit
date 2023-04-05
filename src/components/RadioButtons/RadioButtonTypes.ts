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
}

export type RadioButtonLabelPositions = 'top' | 'right' | 'bottom' | 'left';

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
}

export interface OptionGroupProps {
  readonly options: OptionProps[];
  readonly width?: number;
  readonly verticalPadding?: number;
  readonly orientation?: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
