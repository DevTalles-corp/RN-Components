import { PropsWithChildren } from 'react';

import { StyleProp, ViewStyle } from 'react-native';
import { Text, View } from 'react-native';
import { colors } from '../../../config/theme/theme';


interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>; 
}


export const Card = ({style, children }: Props) => {
  return (
    <View style={[
      {
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 10
      },
      style,
    ]}>
      { children }
     
    </View>
  )
}