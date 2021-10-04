import React from "react";
import { useHistory } from "react-router";
import * as S from "../style";

export default function SessionContainer(props) {
  const history = useHistory();
  return (
    <>
      <S.SessionContainer
      //onClick={() => history.push(`/detail/${category}/${id}`)}
      >
        <S.SessionImg>
          {/* 이사이에 이미지 <img > 로 받아온 이미지 나중에 집어넣을 예정 */}
        </S.SessionImg>
        <S.SessionExplainWrapper>
          <S.SessionText>
            <S.SessionTitle>
              <p>{props.couseName}</p>
            </S.SessionTitle>
            <S.SessionExplain>
              <p>{props.courseLeader} 세션장</p>
            </S.SessionExplain>
          </S.SessionText>
          <S.SessionLevel>
            <p>
              난이도:{props.difficulty} /{props.requireTime}학점
            </p>
          </S.SessionLevel>
          {/* {props.check ? (
            <S.SessionFavorite>수강중</S.SessionFavorite>
          ) : (
            <S.SessionFavorite>신청하기</S.SessionFavorite>
          )} */}
        </S.SessionExplainWrapper>
      </S.SessionContainer>
    </>
  );
}
