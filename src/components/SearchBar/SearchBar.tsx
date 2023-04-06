import React from 'react';

import styled from '@emotion/styled';
import { PropsValue } from 'react-select';
import { SvgIcon } from '../Icons';

import { NormalPalette } from '../Theme';
import { DropDownSelector, SelectOptions } from '../Selectors';

export interface SearchBarProps {
  onClick: () => void;
  filters?: SelectOptions[];
  currentFilter?: SelectOptions;
  errorMessage?: any;
  className?: string;
  defaultValue?: PropsValue<SelectOptions>;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onClick,
  filters,
  errorMessage,
  currentFilter,
  className,
  defaultValue,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    onClick?.();
    event.preventDefault();
  };
  return (
    <FormContainer data-testid="searchBar" className={className}>
      <Form onSubmit={handleSubmit}>
        <SearchLabel htmlFor="default-search">Search</SearchLabel>
        <FormComponentsContainer>
          {filters && currentFilter && defaultValue && (
            <div data-testid="searchBarFilter">
              <DropDownSelector
                options={filters}
                name=""
                currentSelection={currentFilter}
                defaultValue={defaultValue}
              />
            </div>
          )}

          <InputAndButtonContainer>
            <SearchInput type="search" id="search" placeholder="" required />
            <SubmitButton type="submit">
              <SvgIcon
                width={20}
                height={20}
                icon="ButtonIcon"
                title="Button icon"
                fill={NormalPalette.secondary.White}
              />
            </SubmitButton>
          </InputAndButtonContainer>
        </FormComponentsContainer>
        {errorMessage && (
          <ErrorMessageContainer>
            <ErrorSvgContainer>
              <SvgIcon
                width={30}
                height={30}
                icon="ErrorIcon"
                title="Error icon"
                stroke="red"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </ErrorSvgContainer>
            <ErrorMessage data-testid="errorMessage">
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
  color: ${NormalPalette.primary.Black};
  background-color: ${NormalPalette.secondary.White};
  height: 2.5rem;
  width: 100%;
  font-size: clamp(0.9rem, 1.1vw, 1.4rem);
  border-radius: 0.375rem 0 0 0.375rem;

  margin-top: 0;
  margin-bottom: 0;
  box-shadow: inset 0px 1px 7px rgba(127, 128, 149, 0.2);
  border-style: none;
  appearance: none;

  :hover,
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  @media (min-width: 769px) {
    border-radius: 0;
  }
`;

const SubmitButton = styled.button`
  font-weight: 500;
  background-color: ${NormalPalette.primary.CasperRed};
  height: 2.5rem;
  width: 3.2rem;
  border-radius: 0 0.375rem 0.375rem 0;
  cursor: pointer;
  position: relative;
  right: 0.0625rem;
  border-style: none;

  :hover,
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
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

const ErrorSvgContainer = styled.div`
  stroke: ${NormalPalette.primary.CasperRed};
  stroke-width: 2;
  fill: ${NormalPalette.secondary.White};
`;

const ErrorMessage = styled.p`
  color: ${NormalPalette.primary.CasperRed};
  font-size: 0.9rem;
  padding-top: 0.1rem;
`;

const SearchLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
