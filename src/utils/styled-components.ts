import styled from 'styled-components';

export const SButton = styled.button`
  min-width: 8rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  background-color: white;
  font-weight: 500;
  :hover:not([disabled]) {
    cursor: pointer;
    opacity: 0.8;
  }
  :disabled {
    color: gray;
    cursor: unset;
  }
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
