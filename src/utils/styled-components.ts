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

export const SImageSquare = styled.img`
  object-fit: cover;
  // width: 230px;
  // height: 230px;
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

export const SImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 75%;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  p {
    padding-bottom: 24px;
  }
`;
