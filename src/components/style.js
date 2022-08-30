import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  gap: 20%;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContainerSide = styled.div`
  display: flex;
  gap: 25%;
  width: 70%;
`;

export const ContainerText = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 62%;
`;

export const ProfileText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const ProfileDescription = styled.span`
  font-size: 14px;
  color: #8e8e8e;
`;

export const SuggestText = styled.span`
  color: #8e8e8e;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ContainerSuggest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ListContainer = styled.ul`
  list-style: none;
`;

export const ContainerButtons = styled.span`
  color: #0095f6;
`;
