import React from 'react'
import { HeaderContainer, HeaderTitleContainer, HeaderTitle, HeaderInputContainer, HeaderInput } from './styles'

export function Header() {
  return(
    <>
      <HeaderContainer>
        <HeaderTitleContainer>
          <HeaderTitle>Codelândia</HeaderTitle>
          <HeaderTitle>blog</HeaderTitle>
        </HeaderTitleContainer>

        <HeaderInputContainer>
        <HeaderInput placeholder="Pesquise no blog" />
        </HeaderInputContainer>
      </HeaderContainer>
    </>
  )
}