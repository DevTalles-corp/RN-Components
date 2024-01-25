import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Separator} from './Separator';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  name: string;
  icon: string;
  component: string;

  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItem = ({
  name,
  icon,
  component,
  isFirst = false,
  isLast = false,
}: Props) => {
  const navigation = useNavigation<any>();

  const { colors } = useContext( ThemeContext );

  return (
    <>
      <Pressable onPress={() => navigation.navigate(component)}>
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
          }}>
          <Icon
            name={icon}
            size={25}
            style={{marginRight: 10}}
            color={colors.primary}
          />
          <Text style={{color: colors.text}}>{name}</Text>
          <Icon
            name="chevron-forward-outline"
            size={25}
            style={{marginLeft: 'auto', color: colors.primary}}
          />
        </View>
      </Pressable>

      {!isLast && <Separator />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
