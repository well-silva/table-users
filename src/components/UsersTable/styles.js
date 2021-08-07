import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  table {
    width: 100%;
    border-spacing: 0 .15rem;

    th {
      background: #5984C0;
      font-weight: 500;
      height: 3rem;
      text-align: center;
      line-height: 1.5rem;
      color: #FFFFFF;

      &:first-child {
        border-radius: .25rem 0 0 ;
      }

      &:last-child {
        border-radius: 0 .25rem 0 0;
      }
    }
  }

  td {
    height: 3rem;
    border: 0;
    background: #FFFFFF;
    color: #000000;
    text-align: center;
    padding: .5rem 0;

    img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }
`

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0;

    input[type="text"] {
      width: 280px;
      padding: .5rem;
      font-size: 1rem;
      border-radius: .25rem;
      border: 1px solid #CDCDCD;
    }
`

