import React from 'react';
import { Container, ContainerButton, Modal, Text } from './styles';
import { ButtonIcon } from '@components/ButtonIcon';

interface AlertModalProps {
  text: string;
  showModal: boolean;
  onCancel: () => void;
  onExclude: () => void;
}

export function AlertModal({text, showModal, onCancel, onExclude }: AlertModalProps) {
  return (
    <>
      {showModal && (
        <Container activeOpacity={1} onPress={onCancel}>
          <Modal activeOpacity={1}>
            <Text>
              {text}
            </Text>

            <ContainerButton>
              <ButtonIcon
                onPress={onCancel}
                colorType='secondary'
                text='Cancelar'
                style={{ width: 135 }}
              />
              <ButtonIcon
                onPress={onExclude}
                text='Sim, excluir'
                style={{ width: 135 }}
              />
            </ContainerButton>
          </Modal>
        </Container>
      )}
    </>
  );
}