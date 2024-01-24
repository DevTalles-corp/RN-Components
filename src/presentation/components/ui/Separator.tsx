import {  StyleProp, View, ViewStyle } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/theme';


interface Props {
  style?: StyleProp<ViewStyle>;
}


export const Separator = ({ style }:Props) => {
  return (
    <View style={{
      backgroundColor: colors.cardBackground
    }}>
        <View 
          style={[
            {
              alignSelf: 'center',
              width: '80%',
              height: 1,
              backgroundColor: colors.text,
              opacity: 0.1,
              marginVertical: 8,
            },
            style
          ]}
        
        />
    </View>
  )
}