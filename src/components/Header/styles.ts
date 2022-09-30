import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 250px;
  background: linear-gradient(270deg, #3EA1DB 0%, #574AE8 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  padding: 1rem;
  /* background: transparent; */
`

export const HeaderNav = styled.nav`
  /* background: transparent; */
  ul {
    display: flex;
    justify-content: space-between;

    a { 
      color: #fff;
      font-family: 'Lexend Deca', sans-serif;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`

export const InputWrapper = styled.div`
  /* width: 100%; */
  width: 970px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 1rem;  
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;

  input {
    color: #fff;
    font-size: 1.2rem;
    width: 100%;
    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }
    
    &::placeholder {
      color: #fff;
      opacity: 0.5;
    }
  }

  @media (max-width: 600px) {
    input {
      color: #fff;
      font-size: 0.875rem;
    }
  }
`;
