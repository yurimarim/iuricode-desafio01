import React from 'react'
import { GoSearch } from 'react-icons/go';
import { HeaderContainer, HeaderWrapper, HeaderNav, InputWrapper } from './styles'

export function Header() {
  return(
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderNav>
            <ul>
              <li>
                <a href="https://discord.gg/QrbaK6hU" target="_blank" className="main-title">Codelândia</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
            </ul>
          </HeaderNav>
        </HeaderWrapper>
        <InputWrapper>
          <GoSearch color="#FFF" size={24} />
          <input type="text" name="" id="" placeholder="Search the blog" />
        </InputWrapper>
      </HeaderContainer>
    </>
  )
}

