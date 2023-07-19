import React from 'react';
import { Arrow, ArrowDetail, Container, ContainerStatusColor, TextSmall, TextStrong } from './styles';

interface PercentStatusProps extends ContainerStatusColor {}

export function PercentStatus({ positive }: PercentStatusProps) {

  return (
    <Container positive={ positive }>
      <TextStrong>
        90,86%
      </TextStrong>

      <TextSmall>
        das refeições dentro da dieta
      </TextSmall>

      <ArrowDetail activeOpacity={0.5}>
        <Arrow positive={ positive }/>
      </ArrowDetail>
    </Container>
  );
}