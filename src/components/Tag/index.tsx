import React from 'react';
import { Container, Text } from './styles';
import { Bullet } from '@components/Bullet';
import { BulletStyleProps } from '@components/Bullet/styles';

interface TagProps extends BulletStyleProps {
  text: string;
}

export function Tag({ text, type }: TagProps) {
  return (
    <Container>
      <Bullet type={type}/>
      <Text>{text}</Text>
    </Container>
  );
}