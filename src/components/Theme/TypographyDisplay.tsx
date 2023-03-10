import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Typography } from './Typography';
import { NormalPalette } from './Colors';

export const TypographyDisplay: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const [font, setFont] = useState();
  const [fontWeight, setFontWeight] = useState('');

  const handleDefaultColorChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    colorType: string,
  ) => {
    const selectedColor: string = e.target.value;
    setColor(NormalPalette[colorType][selectedColor]);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor: string = e.target.value;
    setColor(selectedColor);
  };

  const handleFontWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedWeight = e.target.value;
    setFontWeight(Typography.fontWeights[selectedWeight]);
  };

  const primaryColors = [
    { value: 'CasperRed', type: 'primary' },
    { value: 'Black', type: 'primary' },
    { value: 'CasperWhite', type: 'primary' },
  ];

  const secondaryColors = [
    { value: 'CasperYellow', type: 'secondary' },
    { value: 'CasperGreen', type: 'secondary' },
    { value: 'CasperPurple', type: 'secondary' },
    { value: 'CasperBlue', type: 'secondary' },
    { value: 'CasperBrown', type: 'secondary' },
    { value: 'CasperBrightPink', type: 'secondary' },
    { value: 'CasperPalePink', type: 'secondary' },
    { value: 'White', type: 'secondary' },
  ];
  const lowContrastColors = [
    { value: 'CasperLightPurple', type: 'lowContrastSecondary' },
    { value: 'CasperLightBlue', type: 'lowContrastSecondary' },
  ];

  const fonts = ['Inter', 'Lausanne', 'HelveticaNeue', 'CasperSans'];
  const weights = [
    'thin',
    'light',
    'normal',
    'medium',
    'semibold',
    'bold',
    'extrabold',
  ];

  return (
    <TypographyWrapper fontWeight={fontWeight} font={font} color={color}>
      <TypographyOptions>
        <select
          onChange={e => {
            handleDefaultColorChange(e, 'secondary');
          }}>
          {secondaryColors.map(color => (
            <option key={`${color.value}`}>{color.value}</option>
          ))}
        </select>
        <select
          onChange={e => {
            handleDefaultColorChange(e, 'primary');
          }}>
          {primaryColors.map(color => (
            <option key={`${color.value}`}>{color.value}</option>
          ))}
        </select>
        <select
          onChange={e => {
            handleDefaultColorChange(e, 'lowContrastSecondary');
          }}>
          {lowContrastColors.map(color => (
            <option key={`${color.value}`}>{color.value}</option>
          ))}
        </select>
        <input
          onChange={e => {
            handleCustomColorChange(e);
          }}
          type="color"
        />
        <select>
          {fonts.map(font => (
            <option key={`${font}`}>{font}</option>
          ))}
        </select>
        <select
          onChange={e => {
            handleFontWeightChange(e);
          }}>
          {weights.map(weight => (
            <option key={`${weight}`}>{weight}</option>
          ))}
        </select>
      </TypographyOptions>

      <TypographyText size={Typography.fontSizes.xs}>XS TEXT</TypographyText>
      <TypographyText size={Typography.fontSizes.sm}>SM TEXT</TypographyText>
      <TypographyText size={Typography.fontSizes.md}>MD TEXT</TypographyText>
      <TypographyText size={Typography.fontSizes.lg}>LG TEXT</TypographyText>
      <TypographyText size={Typography.fontSizes['2xl']}>
        2XL TEXT
      </TypographyText>
      <TypographyText size={Typography.fontSizes['3xl']}>
        3XL TEXT
      </TypographyText>
      <TypographyText size={Typography.fontSizes['4xl']}>
        4XL TEXT
      </TypographyText>
      <TypographyText size={Typography.fontSizes['5xl']}>
        5XL TEXT
      </TypographyText>
      <TypographyText size={Typography.fontSizes['6xl']}>
        6XL TEXT
      </TypographyText>
      <TypographyText size={Typography.fontSizes['7xl']}>
        7XL TEXT
      </TypographyText>
      <TypographyText size={Typography.fontSizes['8xl']}>
        8XL TEXT
      </TypographyText>
      <TypographyText size={Typography.fontSizes['9xl']}>
        9XL TEXT
      </TypographyText>
    </TypographyWrapper>
  );
};

const TypographyText = styled.p<{ size: string }>`
  text-align: center;
  font-size: ${({ size }) => size};
`;

const TypographyOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TypographyWrapper = styled.div<{
  color: string;
  font: string;
  fontWeight: number;
}>`
  color: ${({ color }) => color};
  font: ${({ font }) => font};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
