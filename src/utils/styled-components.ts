import styled from 'styled-components';

export const SButton = styled.button`
  min-width: 8rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover&:!disabled {
    opacity: 0.8;
  }
  &:disabled {
    color: lightgray;
    border-color: lightgray;
    cursor: unset;
  }
`;

export const SImage = styled.img`
  max-width: 100%;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 0.05rem;
`;

export const SAssetInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 2rem 1rem;
  overflow-wrap: break-word;
`;

export const SIcon = styled.img`
  height: 1rem;
  margin-left: 0.2rem;
`;
