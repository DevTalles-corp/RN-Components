import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { ReactNode } from 'react';

interface Props {
  style?:  StyleProp<ViewStyle>;
  children?: ReactNode;
}




export const CustomView = ({ style, children }:Props) => {
  return (
    <View style={[ globalStyles.mainContainer, style ]}>
      { children }
    </View>
  )
}