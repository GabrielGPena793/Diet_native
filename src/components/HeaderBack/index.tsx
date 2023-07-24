import React from 'react';
import { Header, HeaderText } from './styles';
import { ButtonBack } from '@components/ButtonBack';

interface HeaderBackProps {
  text: string;
}

export function HeaderBack({ text }: HeaderBackProps) {

  function back() {
    //TODO: add logic
    console.log('click');
  }

  return (
    <Header>
      <ButtonBack colorArrow='gray_300' onPress={back} />

      <HeaderText>  {text} </HeaderText>
    </Header>
  );
}