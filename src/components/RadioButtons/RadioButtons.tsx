import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { RadioButtonGroup } from './Partials/RadioButtonGroup';
import { OptionProps } from './RadioButtonTypes';

export interface RadioButtonsProps {
  readonly options: OptionProps[];
  readonly legendLabel?: string;
  readonly orientation?: string;
  readonly width?: number;
}

export const RadioButtons: React.FC<RadioButtonsProps> = ({
  options,
  legendLabel,
  orientation,
  width,
}) => {
  const [selectedValue, setSelectedValue] = useState<String>(options[0].label);

  const updateRadioGroupSelection = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setSelectedValue(event.target.value),
    [],
  );

  // eslint-disable-next-line no-console
  console.log(selectedValue);

  return (
    <StyledFieldset data-testid="RadioButtonsContainer">
      <legend>{legendLabel}</legend>
      <RadioButtonGroup
        options={options}
        orientation={orientation}
        width={width}
        onChange={updateRadioGroupSelection}
      />
    </StyledFieldset>
  );
};

const StyledFieldset = styled.fieldset`
  border: none;
`;
