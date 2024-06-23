import * as Dialog from '@radix-ui/react-dialog';
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  animation: overlayShow 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled(Dialog.Content)`
  border-radius: 6px;
  background: ${props => props.theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 3rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;

    input {
      padding: 1rem;
      background: ${props => props.theme['gray-900']};
      border: 0;
      border-radius: 6px;
      color: ${props => props.theme['gray-100']};
    }

    button {
      width: 100%;
      text-align: center;
      color: ${props => props.theme.white};
      background: ${props => props.theme['green-500']};
      padding: 1rem 0;
      border: 0;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s;
      font-weight: bold;

      &:hover {
        background: ${props => props.theme['green-300']};
      }
    }
  }

  

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const Close = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  right: 0;
  top: 0;
  margin: 1.5rem;
  border: 0;
  cursor: pointer;
  line-height: 0;
  border-radius: 6px;
`;