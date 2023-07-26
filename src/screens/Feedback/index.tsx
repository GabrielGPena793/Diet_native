import { Container, Strong, SubTittle, Tittle } from './styles';
import { Image } from 'react-native';
import { Button } from '@components/Button';

import feedbackPositive from '../../assets/feedbackPositive.png'
import feedbackNegative from '../../assets/feedbackNegative.png'
import { useNavigation, useRoute } from '@react-navigation/native';

interface RouteParams {
  feedbackType: 'positive' | 'negative';
}

const messages = {
  positive: {
    tittle: 'Continue assim!',
    subTittleBefore: 'Você continua',
    strong: 'dentro da dieta.',
    subTittleAfter: 'Muito bem!'
  },
  negative: {
    tittle: 'Que pena!',
    subTittleBefore: 'Você',
    strong: 'saiu da dieta',
    subTittleAfter: 'dessa vez, mas continue se esforçando e não desista!'
  }
}

export function Feedback() {
  const navigate = useNavigation()
  const route = useRoute()
  const { feedbackType } = route.params as RouteParams

  function backHome() {
    navigate.navigate('home')
  }

  return (
    <Container>
      <Tittle message={feedbackType}>
        {messages[feedbackType].tittle}
      </Tittle>

      <SubTittle>
        {messages[feedbackType].subTittleBefore}
        <Strong> {messages[feedbackType].strong} </Strong>
        {messages[feedbackType].subTittleAfter}
      </SubTittle>

      <Image
        source={feedbackType === 'positive' ? feedbackPositive :  feedbackNegative}
      />

      <Button
        text='Ir para a página inicial'
        style={{ marginTop: 32 }}
        onPress={backHome}
      />
    </Container>
  );
}