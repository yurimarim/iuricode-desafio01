import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12rem;
  background: linear-gradient(270deg, #3EA1DB 0%, #574AE8 100%);
  display: flex;
  flex-direction: column;
`

export const HeaderTitleContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`

export const HeaderTitle = styled.span`
  font-family: inter;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: transparent;
`

export const HeaderInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
`

export const HeaderInput = styled.input`
  width: 50%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  /* padding: 8px 0; */
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 1);

  &::placeholder {
    color: rgba(255, 255, 255, 1);
  }
`
