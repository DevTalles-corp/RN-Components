import {Alert,Text, View} from 'react-native';


import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import { showPrompt } from '../../../config/adapters/prompt.adapter';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const AlertScreen = () => {

  const { isDark } = useContext( ThemeContext );


  const createTwoButtonAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light'
      },
    );
  };

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('onDismiss');
        },
        userInterfaceStyle: isDark ? 'dark' : 'light'
      },
    );

  const onShowPrompt = () => {

    showPrompt({
      title: 'Lorem Ipsum',
      subTitle: 'Nostrud qui duis officia dolor enim.',
      buttons: [
        { text: 'Ok', onPress: () => console.log('ok') }
      ],
      placeholder: 'Placeholder',
      
    },);
  

    // ! Código nativo
    // Alert.prompt(
    //   'Correo electronico',
    //   'Enim commodo ut amet esse aliqua.',
    //   (valor: string) => console.log({valor}),
    //   'secure-text',
    //   'Soy el valor por defecto',
    //   'number-pad'
    // );

  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />

      <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />

      <View style={{height: 10}} />

      <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />

      <View style={{height: 10}} />

      <Button text="Prompt - Input" onPress={onShowPrompt} />
    </CustomView>
  );
};
