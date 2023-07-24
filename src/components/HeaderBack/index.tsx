import React from 'react';
import { Header, HeaderText } from './styles';
import { ButtonBack } from '@components/ButtonBack';

export function HeaderBack() {

  function back() {
    //TODO: add logic
    console.log('click');
  }

  return (
    <Header>
      <ButtonBack colorArrow='gray_300' onPress={back} />

      <HeaderText>  Nova Refeição </HeaderText>
    </Header>
  );
}