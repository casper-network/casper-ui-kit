import React, { useState } from 'react';
import styled from 'src/styled';
import { PropsValue } from 'react-select';

import { defaultTheme } from '../../theme';
import { DropDownSelector, SelectOptions } from '../Selectors';
import { SearchIcon, ErrorIcon } from '../Icon';

export interface SearchBarProps {
  readonly onClick: () => void;
  readonly filters?: SelectOptions[];
  readonly currentFilter: SelectOptions;
  readonly errorMessage?: any;
  readonly className?: string;
  readonly defaultValue?: PropsValue<SelectOptions>;
  readonly dataCy?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onClick,
  filters,
  errorMessage,
  currentFilter,
  className,
  defaultValue,
  dataCy,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    onClick?.();
    event.preventDefault();
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState<SelectOptions | null>(
    currentFilter,
  );
  return (
    <FormContainer
      className={className}
      data-testid="search-bar"
      data-cy={dataCy}>
      <Form onSubmit={handleSubmit}>
        <SearchLabel htmlFor="default-search">Search</SearchLabel>
        <FormComponentsContainer>
          {filters && currentFilter && defaultValue && (
            <div data-testid="search-bar-filter">
              <DropDownSelector
                options={filters}
                name=""
                defaultValue={defaultValue}
                setCurrentOption={setCurrentOption}
                currentOption={currentOption}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            </div>
          )}

          <InputAndButtonContainer>
            <SearchInput type="search" id="search" placeholder="" required />
            <SubmitButton type="submit">
              <SearchIcon
                strokeWidth={1}
                color={defaultTheme.colors.secondary.White}
                width={20}
                height={32}
              />
            </SubmitButton>
          </InputAndButtonContainer>
        </FormComponentsContainer>
        {errorMessage && (
          <ErrorMessageContainer>
            <ErrorIcon strokeWidth={2} />
            <ErrorMessage data-testid="error-message">
              {errorMessage}
            </ErrorMessage>
          </ErrorMessageContainer>
        )}
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 92%;
  max-width: 37rem;
  padding: '0';
  margin: 0 auto 2rem auto;
  position: relative;
  padding: 0;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 64%;
    min-width: 39rem;
    max-width: 40rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    justify-content: start;
    width: 100%;
    min-width: 53rem;
    max-width: 53rem;
    margin: 0 auto;
    padding-right: 0;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const FormComponentsContainer = styled.div`
  @media (min-width: 640px) {
    display: flex;
    width: 100%;
  }
`;

const InputAndButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.4rem;
  margin: 0 auto;
  width: 91%;

  @media (min-width: 768px) {
    padding-top: 0;
    width: 100%;
  }
`;

const SearchInput = styled.input`
  display: block;
  color: ${defaultTheme.colors.primary.Black};
  background-color: ${defaultTheme.colors.secondary.White};
  height: 2.5rem;
  width: 100%;
  font-size: clamp(0.9rem, 1.1vw, 1.4rem);
  border-radius: 0.375rem 0 0 0.375rem;

  margin-top: 0;
  margin-bottom: 0;
  box-shadow: inset 0px 0.0625rem 0.4375rem rgba(127, 128, 149, 0.2);
  border-style: none;
  appearance: none;

  :hover,
  :focus {
    outline: 0.125rem solid transparent;
    outline-offset: 0.125rem;
  }

  @media (min-width: 769px) {
    border-radius: 0;
  }
`;

const SubmitButton = styled.button`
  font-weight: 500;
  background-color: ${defaultTheme.colors.primary.CasperRed};
  height: 2.5rem;
  width: 3.2rem;
  border-radius: 0 0.375rem 0.375rem 0;
  cursor: pointer;
  position: relative;
  right: 0.0625rem;
  border-style: none;

  :hover,
  :focus {
    outline: 0.125rem solid transparent;
    outline-offset: 0.125rem;
  }
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  position: absolute;
  right: 0;
  left: 0;
`;

const ErrorMessage = styled.p`
  color: ${defaultTheme.colors.primary.CasperRed};
  font-size: 0.9rem;
  padding-top: 0.1rem;
`;

const SearchLabel = styled.label`
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  padding: 0;
  margin: -0.625rem;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
