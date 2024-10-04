import React from 'react';
import { Text, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
}

export const CustomTextRegular: React.FC<CustomTextProps> = ({ children, style, ...props }) => {
    return (
      <Text style={[{ fontFamily: 'CustomTextRegular' }, style]} {...props}>
        {children}
      </Text>
    );
  };


  export const CustomTextMedium: React.FC<CustomTextProps> = ({ children, style, ...props }) => {
    return (
      <Text style={[{ fontFamily: 'CustomTextMedium' }, style]} {...props}>
        {children}
      </Text>
    );
  };
  

  export const CustomTextBold: React.FC<CustomTextProps> = ({ children, style, ...props }) => {
    return (
      <Text style={[{ fontFamily: 'CustomTextBold' }, style]} {...props}>
        {children}
      </Text>
    );
  };
