import styled from '@emotion/styled';
import React, { useState } from 'react';
import { pxToRem } from '../../utils';

export interface CheckboxProps {
  readonly label?: string;
  readonly width?: number;
  readonly checkmarkSize?: number;
  readonly color?: string;
  readonly borderWidth?: number;
  readonly checked?: boolean;
  readonly disabled?: boolean;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly required?: boolean;
  readonly name?: string;
  readonly value?: string | number;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label = 'Checkbox Label',
  width = 30,
  borderWidth = 2,
  checkmarkSize = 65,
  color = '#02c1b0',
  checked = false,
  disabled,
  onChange,
  value,
  name,
  required,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LabelCheckboxContainer>
      <CheckboxContainer onClick={() => setIsChecked(!isChecked)} width={width}>
        <StyledCheckbox
          color={color}
          width={width}
          borderWidth={borderWidth}
          data-testid="checkbox"
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
          value={value}
          name={name}
          required={required}
        />
        {(isChecked || checked) && (
          <CheckboxSvgWrapper width={width} checkmarkSize={checkmarkSize}>
            <StyledSvg
              color={color}
              disabled={disabled}
              required={required}
              width="100%"
              height="100%"
              viewBox="0 0 460.775 460.775">
              <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>
            </StyledSvg>
          </CheckboxSvgWrapper>
        )}
      </CheckboxContainer>
      <label data-testid="checkboxLabel">{label}</label>
    </LabelCheckboxContainer>
  );
};

const LabelCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};
`;

const CheckboxContainer = styled.div<{ width: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${({ width }) => pxToRem(width)};
  height: ${({ width }) => pxToRem(width)};
`;

const StyledCheckbox = styled.input<{
  color: string | undefined;
  disabled: boolean | undefined;
  required: boolean | undefined;
  borderWidth: number;
}>`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: ${({ disabled, required, borderWidth, color }) =>
    (disabled && `${pxToRem(borderWidth)} solid #F1F1F4`) ||
    (required && `${pxToRem(borderWidth)}  solid red`) ||
    `${pxToRem(borderWidth)}  solid ${color}`};
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
`;

const CheckboxSvgWrapper = styled.div<{
  width: number;
  checkmarkSize: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: ${({ checkmarkSize }) => `${checkmarkSize}%`};
  max-width: ${({ width }) => pxToRem(width)};
  cursor: pointer;
`;

const StyledSvg = styled.svg<{
  disabled: boolean | undefined;
  required: boolean | undefined;
  color: string | undefined;
}>`
  fill: ${({ disabled, required, color }) =>
    (disabled && `#F1F1F4`) || (required && `red`) || `${color}`};
`;
