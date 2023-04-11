// import React, { useState } from 'react';
// import styled from '@emotion/styled';
// import '../../styles.css';
// import { Typography } from './Typography';
// import { NormalPalette, ColorType } from './Colors';

// export const TypographyDisplay: React.FC = () => {
//   const [color, setColor] = useState('');
//   const [font, setFont] = useState(Typography.fonts.Inter);
//   const [fontWeight, setFontWeight] = useState(0);

//   const handleDefaultColorChange = (
//     e: React.ChangeEvent<HTMLSelectElement>,
//     colorType: ColorType,
//   ) => {
//     const selectedColor = e.target
//       .value as keyof (typeof NormalPalette)[ColorType];
//     setColor(NormalPalette[colorType][selectedColor]);
//   };

//   const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedColor: string = e.target.value;
//     setColor(selectedColor);
//   };

//   const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedFont = e.target.value as keyof typeof Typography.fonts;
//     setFont(Typography.fonts[selectedFont]);
//   };

//   const handleFontWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedWeight = e.target
//       .value as keyof typeof Typography.fontWeights;
//     setFontWeight(Typography.fontWeights[selectedWeight]);
//   };

//   const primaryColors = [
//     { value: 'CasperRed' },
//     { value: 'Black' },
//     { value: 'CasperWhite' },
//   ];

//   const secondaryColors = [
//     { value: 'CasperYellow', type: 'primary' },
//     { value: 'CasperGreen' },
//     { value: 'CasperPurple' },
//     { value: 'CasperBlue' },
//     { value: 'CasperBrown' },
//     { value: 'CasperBrightPink' },
//     { value: 'CasperPalePink' },
//     { value: 'White' },
//   ];
//   const lowContrastColors = [
//     { value: 'CasperLightPurple' },
//     { value: 'CasperLightBlue' },
//   ];

//   const fonts = ['Inter', 'HelveticaNeue', 'CasperSans'];
//   const weights = [
//     'thin',
//     'light',
//     'normal',
//     'medium',
//     'semibold',
//     'bold',
//     'extrabold',
//   ];

//   return (
//     <TypographyWrapper fontWeight={fontWeight} font={font} color={color}>
//       <TypographyOptions>
//         <select
//           onChange={e => handleDefaultColorChange(e, ColorType.Secondary)}>
//           {secondaryColors.map(color => (
//             <option key={color.value}>{color.value}</option>
//           ))}
//         </select>
//         <select onChange={e => handleDefaultColorChange(e, ColorType.Primary)}>
//           {primaryColors.map(color => (
//             <option key={color.value}>{color.value}</option>
//           ))}
//         </select>
//         <select
//           onChange={e =>
//             handleDefaultColorChange(e, ColorType.LowContrastSecondary)
//           }>
//           {lowContrastColors.map(color => (
//             <option key={color.value}>{color.value}</option>
//           ))}
//         </select>
//         <input onChange={e => handleCustomColorChange(e)} type="color" />
//         <select onChange={e => handleFontChange(e)}>
//           {fonts.map(font => (
//             <option key={font}>{font}</option>
//           ))}
//         </select>
//         <select onChange={e => handleFontWeightChange(e)}>
//           {weights.map(weight => (
//             <option key={weight}>{weight}</option>
//           ))}
//         </select>
//       </TypographyOptions>

//       <TypographyText size={Typography.fontSizes.xs}>XS TEXT</TypographyText>
//       <TypographyText size={Typography.fontSizes.sm}>SM TEXT</TypographyText>
//       <TypographyText size={Typography.fontSizes.md}>MD TEXT</TypographyText>
//       <TypographyText size={Typography.fontSizes.lg}>LG TEXT</TypographyText>
//       <TypographyText size={Typography.fontSizes['2xl']}>
//         2XL TEXT
//       </TypographyText>
//       <TypographyText size={Typography.fontSizes['3xl']}>
//         3XL TEXT
//       </TypographyText>
//       <TypographyText size={Typography.fontSizes['4xl']}>
//         4XL TEXT
//       </TypographyText>
//       <TypographyText size={Typography.fontSizes['5xl']}>
//         5XL TEXT
//       </TypographyText>
//       <TypographyText size={Typography.fontSizes['6xl']}>
//         6XL TEXT
//       </TypographyText>
//       <TypographyText size={Typography.fontSizes['7xl']}>
//         7XL TEXT
//       </TypographyText>
//       <TypographyText size={Typography.fontSizes['8xl']}>
//         8XL TEXT
//       </TypographyText>
//       <TypographyText size={Typography.fontSizes['9xl']}>
//         9XL TEXT
//       </TypographyText>
//     </TypographyWrapper>
//   );
// };

// const TypographyText = styled.p<{ size: string }>`
//   text-align: center;
//   font-size: ${({ size }) => size};
// `;

// const TypographyOptions = styled.div`
//   display: flex;
//   justify-content: space-evenly;
// `;

// const TypographyWrapper = styled.div<{
//   color?: string;
//   font?: string;
//   fontWeight?: number;
// }>`
//   color: ${({ color }) => color};
//   font-family: ${({ font }) => font};
//   font-weight: ${({ fontWeight }) => fontWeight};
// `;

export {};
