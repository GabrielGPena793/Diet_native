import React from 'react';
import {
  Avatar,
  ButtonAdd,
  Container,
  Header,
  IconButtonAdd,
  Main,
  Text,
  TextButtonAdd
} from './styles';
import { Image } from 'react-native';

import logo from '@assets/logo.png'
import { PercentStatus } from '@components/PercentStatus';

export function Home() {
  return (
    <Container>
      <Header >
        <Image source={logo} />

        <Avatar>
          <Image
            style={{ height: '100%', width: '100%' }}
            source={{ uri: 'https://github.com/GabrielGPena793.png' }}
          />
        </Avatar>
      </Header>

      <PercentStatus positive />


      <Main>
        <Text>
          Refeições
        </Text>
        <ButtonAdd activeOpacity={0.8}>
          <IconButtonAdd />
          <TextButtonAdd>
            Nova refeição
          </TextButtonAdd>
        </ButtonAdd>
      </Main>

    </Container>
  );
}