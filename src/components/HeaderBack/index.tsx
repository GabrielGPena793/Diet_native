import React from 'react';
import { Header, HeaderText } from './styles';
import { ButtonBack } from '@components/ButtonBack';
import { useNavigation } from '@react-navigation/native';

interface HeaderBackProps {
  text: string;
}

export function HeaderBack({ text }: HeaderBackProps) {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Header>
      <ButtonBack colorArrow='gray_300' onPress={handleGoBack} />

      <HeaderText>  {text} </HeaderText>
    </Header>
  );
}