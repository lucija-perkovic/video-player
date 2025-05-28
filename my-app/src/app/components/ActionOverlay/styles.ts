import { styled } from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fade-in 0.3s ease-in-out;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;