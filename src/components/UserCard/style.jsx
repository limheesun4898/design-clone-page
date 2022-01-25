import styled from 'styled-components';

export const StyledInfoCardContainer = styled.div`
  background-color: white;
  width: 100%;
  height: ${props => (props.isDetail ? '500px' : '300px')};
  display: grid;
  grid-template-columns: 1fr 1px 5fr;
  padding: 70px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const StyledInfoCardEmoji = styled.div`
  height: 50px;
  font-size: 170px;
  margin-top: -70px;
`;

export const StyledInfoCardContour = styled.div`
  border-right: 1.5px solid #b6b6b6a4;
  height: 50px;
  margin-top: 30px;
`;

export const StyledInfoDetailContainer = styled.div`
  margin-left: 40px;
  display: grid;
  grid-template-rows: 1fr 0.7fr 3fr 1fr;
`;

export const StyledInfoDetailName = styled.div`
  font-size: 32px;
  font-family: 'NexonBo';
`;

export const StyledInfoDetailText = styled.div``;

export const StyledInfoBottomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledInfoBottom = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 20px;
`;

export const StyledInfoLink = styled.a`
  margin-left: 10px;
  margin-top: 4px;
`;

export const StyledInfoEmail = styled.div`
  margin-left: 10px;
  margin-top: 4px;
`;

export const StyledDetailCommentBox = styled.div`
  background-color: #f5f5f5;
  border-radius: 24px;
  padding: 23px;
`;

export const StyledArrowContainer = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
`;