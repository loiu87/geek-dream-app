import { gql } from "apollo-boost";

export const GET_SHEETS = gql`
  query getSheets {
    getSheets {
      id
      fileName
      createdAt
    }
  }
`;

export const GET_SHEET = gql`
  mutation getSheet($id: Int!) {
    getSheet(id: $id) {
      id
      content
      createdAt
    }
  }
`;

export const CREATE_SHEET = gql`
  mutation createSheet($fileName: String!, $content: String!) {
    createSheet(fileName: $fileName, content: $content) {
      id
      content
      createdAt
    }
  }
`;

export const LOCAL_LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
