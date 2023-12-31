import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 100vw;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 100%;
      padding: 3%;
      padding-top: 60px;
    }
  }
`;
export default Wrapper;
