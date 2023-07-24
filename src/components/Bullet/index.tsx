import React from 'react';
import { BulletStyleProps, Container } from './styles';

interface BulletProps extends BulletStyleProps {}

export function Bullet({ type }: BulletProps) {
  return (
    <Container type={type}  />
  );
}