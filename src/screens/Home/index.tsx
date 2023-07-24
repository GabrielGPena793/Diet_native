import React from 'react';
import {
  Avatar,
  Container,
  Header,
  Main,
  Text,
} from './styles';
import { Image } from 'react-native';
import { PercentStatus } from '@components/PercentStatus';
import { MealsList } from '@components/MealsList';
import { ButtonIcon } from '@components/ButtonIcon';

import logo from '@assets/logo.png'

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
        <Text> Refeições </Text>
        <ButtonIcon
          style={{
            marginTop: 8,
            marginBottom: 32
          }}
          icon='plus'
          text='Nova refeição'
        />

        <MealsList />
      </Main>

    </Container>
  );
}