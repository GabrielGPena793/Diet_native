import { Container, Strong, SubTittle, Tittle } from './styles';
import { Image } from 'react-native';
import { Button } from '@components/Button';

import feedbackPositive from '../../assets/feedbackPositive.png'
import feedbackNegative from '../../assets/feedbackNegative.png'

interface FeedBackProps {
  feedback: 'positive' | 'negative';
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

export function Feedback({ feedback }: FeedBackProps) {

  function backHome() {
    //TODO: add logic
  }

  return (
    <Container>
      <Tittle message={feedback}>
        {messages[feedback].tittle}
      </Tittle>

      <SubTittle>
        {messages[feedback].subTittleBefore}
        <Strong> {messages[feedback].strong} </Strong>
        {messages[feedback].subTittleAfter}
      </SubTittle>

      <Image
        source={feedback === 'positive' ? feedbackPositive :  feedbackNegative}
      />

      <Button
        text='Ir para a página inicial'
        style={{ marginTop: 32 }}
        onPress={backHome}
      />
    </Container>
  );
}