/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

export default (data) => {
  const techScore =
    data.data["배점: 융복합성"] +
    data.data["배점: 기술완성도"] +
    data.data["배점: 기술신뢰성"];

  const rightScore =
    data.data["배점: 권리의 완성도"] +
    data.data["배점: 권리의 수명"] +
    data.data["배점: 권리의 확장성"];
  const marketScore =
    data.data["배점: 시장의 확보성"] +
    data.data["배점: 시장의 집중도"] +
    data.data["배점: 시장의 선점도"] +
    data.data["배점: 시장의 진출성"];
  const sumOfAllScore = techScore + rightScore + marketScore;

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Paper>
            <h4>서지사항</h4>
            <Table>
              <tbody>
                <tr>
                  <th className="tableTitle">출원번호</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">{data.data["출원번호"]}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">출원일</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">{data.data["출원일"]}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">공개일</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">{data.data["공개일"]}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">등록일</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">{data.data["등록일"]}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">출원인</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">{data.data["출원인"]}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">발명자/고안자</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">
                        {data.data["발명자/고안자"]}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">법적상태</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">{data.data["법적상태"]}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">발명의 명칭</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">{data.data["발명의 명칭"]}</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <h4>요약</h4>
            <div>{data.data["요약"]}</div>

            <h4>대표청구항</h4>
            <div>{data.data["대표청구항"]}</div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <h4>기술성</h4>
            <Table>
              <tbody>
                <tr>
                  <th className="tableTitle">기술완성도</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">
                        {data.data["배점: 기술완성도"]}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">기술신뢰성</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">
                        {data.data["배점: 기술신뢰성"]}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">융복합성</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">
                        {data.data["배점: 융복합성"]}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">합계</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">{techScore}</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            <h4>권리성</h4>
            <Table>
              <tbody>
                <tr>
                  <th className="tableTitle">권리완성</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">
                        {data.data["배점: 권리의 완성도"]}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">권리수명</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">
                        {data.data["배점: 권리의 수명"]}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">권리확장</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">
                        {data.data["배점: 권리의 확장성"]}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">합계</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">{rightScore}</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            <h4>시장성</h4>
            <Table>
              <tbody>
                <tr>
                  <th className="tableTitle">시장확보</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">
                        {data.data["배점: 시장의 확보성"]}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">시장집중</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">
                        {data.data["배점: 시장의 집중도"]}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">시장선점</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">
                        {data.data["배점: 시장의 선점도"]}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">시장진출</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">
                        {data.data["배점: 시장의 진출성"]}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="tableTitle">합계</th>
                  <td colSpan="3">
                    <div className="linkCell">
                      <div className="NumCell">{marketScore}</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            <h4>총합계: {sumOfAllScore} </h4>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Paper = styled.div`
  height: 30rem;
  border: 1px solid black;
  padding: 1rem;
  overflow: scroll;
`;

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid lightgrey;
  width: 100%;
  text-align: center;
  font-size: 15px;
  tr {
    height: 30px;
  }
  td,
  th {
    padding: 5px;
    vertical-align: middle;
  }
  th {
    background-color: #f2f2f2;
    font-weight: 500;
    border-right: 0.5px solid black;
  }
  tbody > tr:nth-child(2n) {
    border-top: 0.5px solid lightgrey;
    border-bottom: 0.5px solid lightgrey;
  }
`;
