/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import exportExcel from "../../util/exportExcel";
import getData from "../../util/getData";
import { DataContext } from "./RouteControler";
import setCalculatedData from "../../util/setCalculatedData";
import DescriptionBox from "./DescriptionBox";
import { useTable, useSortBy, useRowSelect, usePagination } from "react-table";
function DashBoard() {
  const [loading, setLoading] = useState(true);
  const { data } = useContext(DataContext);
  const [selectedRows, setSelectedRows] = useState(0);
  const [avrgNumOfClaim, setAvrgNumOfClaim] = useState(1);
  const [avrgNumOfInventors, setAvrgNumOfInventors] = useState(1);
  const [avrgNumOfIPC, setAvrgNumOfIPC] = useState(1);
  const [avrgRemainingYears, setAvrgRemainingYears] = useState(1);
  const [avrgNumOfFamilyPatent, setAvrgNumOfFamilyPatent] = useState(1);
  const [avrgNumOfFamilyContry, setAvrgNumOfFamilyContry] = useState(1);
  const [avrgPublicationDays, setAvrgPublicationDays] = useState(1);
  const now = new Date();
  const nowYear = now.getFullYear();
  const columns = useMemo(
    () => [
      {
        Header: "국가코드",
        accessor: "국가코드",
      },
      {
        Header: "발명의 명칭",
        accessor: "발명의 명칭",
      },

      {
        Header: "청구항 수",
        accessor: "청구항 수",
      },

      {
        Header: "출원번호",
        accessor: "출원번호",
      },
      {
        Header: "출원일",
        accessor: "출원일",
      },
      {
        Header: "공개번호/공표/재공표",
        accessor: "공개번호/공표/재공표",
      },
      {
        Header: "공개일",
        accessor: "공개일",
      },
      {
        Header: "등록번호",
        accessor: "등록번호",
      },
      {
        Header: "등록일",
        accessor: "등록일",
      },
      {
        Header: "출원인",
        accessor: "출원인",
      },
      {
        Header: "존속기간(예상)만료일(KR/JP/US/CN)",
        accessor: "존속기간(예상)만료일(KR/JP/US/CN)",
      },
      {
        Header: "출원인 국적",
        accessor: "출원인 국적",
      },
      {
        Header: "출원인 수",
        accessor: "출원인 수",
      },
      {
        Header: "발명자/고안자 국적",
        accessor: "발명자/고안자 국적",
      },
      {
        Header: "발명자 수",
        accessor: "발명자 수",
      },
      {
        Header: "패밀리 문헌 수 (출원기준)",
        accessor: "패밀리 문헌 수 (출원기준)",
      },
      {
        Header: "패밀리 국가 수(출원기준)",
        accessor: "패밀리 국가 수(출원기준)",
      },
      {
        Header: "Original IPC Main",
        accessor: "Original IPC Main",
      },
      {
        Header: "Original IPC All",
        accessor: "Original IPC All",
      },
      {
        Header: "상태정보(KR/JP/EP/CN)",
        accessor: "상태정보(KR/JP/EP/CN)",
      },
      {
        Header: "상태정보[US등록문헌]",
        accessor: "상태정보[US등록문헌]",
      },
      {
        Header: "인용 문헌 수(B1)",
        accessor: "인용 문헌 수(B1)",
      },
      {
        Header: "인용 문헌번호 (B1) + 심사관(E) 인용 (KR/US)",
        accessor: "인용 문헌번호 (B1) + 심사관(E) 인용 (KR/US)",
      },
      {
        Header: "인용 문헌 수(F1)",
        accessor: "인용 문헌 수(F1)",
      },

      {
        Header: "인용 문헌번호 (F1) + 심사관(E) 인용 (KR/US)",
        accessor: "인용 문헌번호 (F1) + 심사관(E) 인용 (KR/US)",
      },
      {
        Header: "심사관인용문헌(F1)",
        accessor: "심사관인용문헌(F1)",
      },
      {
        Header: "현재권리자(KR/JP/US)",
        accessor: "현재권리자(KR/JP/US)",
      },
      {
        Header: "원문링크",
        accessor: "원문링크",
      },

      {
        Header: "Wintelips Key",
        accessor: "Wintelips Key",
      },

      {
        Header: "기술완성도",
        accessor: "기술완성도",
      },
      {
        Header: "기술신뢰성",
        accessor: "기술신뢰성",
      },
      {
        Header: "융복합성",
        accessor: "융복합성",
      },
      {
        Header: "배점: 기술완성도",
        accessor: "배점: 기술완성도",
      },
      {
        Header: "배점: 기술신뢰성",
        accessor: "배점: 기술신뢰성",
      },
      {
        Header: "배점: 융복합성",
        accessor: "배점: 융복합성",
      },
      {
        Header: "권리의 완성도",
        accessor: "권리의 완성도",
      },
      {
        Header: "권리의 수명",
        accessor: "권리의 수명",
      },
      {
        Header: "권리의 확장성",
        accessor: "권리의 확장성",
      },
      {
        Header: "배점: 권리의 완성도",
        accessor: "배점: 권리의 완성도",
      },
      {
        Header: "배점: 권리의 수명",
        accessor: "배점: 권리의 수명",
      },
      {
        Header: "배점: 권리의 확장성",
        accessor: "배점: 권리의 확장성",
      },
      {
        Header: "시장의 확보성",
        accessor: "시장의 확보성",
      },
      {
        Header: "시장의 진출성",
        accessor: "시장의 진출성",
      },
      {
        Header: "시장의 집중도",
        accessor: "시장의 집중도",
      },
      {
        Header: "시장의 선점도",
        accessor: "시장의 선점도",
      },
      {
        Header: "배점: 시장의 확보성",
        accessor: "배점: 시장의 확보성",
      },
      {
        Header: "배점: 시장의 진출성",
        accessor: "배점: 시장의 진출성",
      },
      {
        Header: "배점: 시장의 집중도",
        accessor: "배점: 시장의 집중도",
      },
      {
        Header: "배점: 시장의 선점도",
        accessor: "배점: 시장의 선점도",
      },
    ],
    []
  );
  const handleData = async () => {
    await getData(
      data,
      now,
      nowYear,
      setAvrgNumOfClaim,
      setAvrgNumOfInventors,
      setAvrgNumOfIPC,
      setAvrgRemainingYears,
      setAvrgNumOfFamilyPatent,
      setAvrgNumOfFamilyContry,
      setAvrgPublicationDays
    );
    console.log(data);
    await setCalculatedData(
      data,
      now,
      nowYear,
      avrgNumOfClaim,
      avrgNumOfInventors,
      avrgNumOfIPC,
      avrgRemainingYears,
      avrgNumOfFamilyPatent,
      avrgNumOfFamilyContry,
      avrgPublicationDays
    );
    setLoading(false);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Wrapper>
      <h1>DashBoard</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ContentWrapper>
          <DescriptionBox data={data[selectedRows]} />
          <Button
            onClick={() => {
              exportExcel(data);
            }}
          >
            excel Download
          </Button>
          <SheetContainer>
            <Styles>
              <TableContainer
                columns={columns}
                data={data}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
              />
            </Styles>
          </SheetContainer>
        </ContentWrapper>
      )}
    </Wrapper>
  );
}

const TableContainer = ({ columns, data, selectedRows, setSelectedRows }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    selectedFlatRows,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, selectedRowIds: { [selectedRows]: true } },
    },
    useSortBy,
    usePagination,
    useRowSelect
  );

  useEffect(() => {
    const index =
      selectedFlatRows &&
      selectedFlatRows[0] &&
      Number.isInteger(selectedFlatRows[0].index)
        ? selectedFlatRows[0].index
        : 0;
    setSelectedRows(index);
  }, [selectedFlatRows]);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " ⬇️"
                        : " ⬆️"
                      : " "}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            // console.log(page);
            prepareRow(row);
            const onChange = row.getToggleRowSelectedProps().onChange;
            const select = (e) => {
              rows.map((row, i) => {
                return row.isSelected && row.toggleRowSelected(false);
              });
              onChange(e);
            };
            return (
              <tr
                {...row.getRowProps()}
                onClick={select}
                style={{
                  backgroundColor: row.isSelected ? "green" : "#fff",
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} style={{}}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50, 100, 200].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

const Wrapper = styled.div``;
const SheetContainer = styled.div`
  width: 100%;
  overflow: scroll;
`;
const ContentWrapper = styled.div``;
const Styles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 4rem;
      max-width: 8rem;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

export default DashBoard;
