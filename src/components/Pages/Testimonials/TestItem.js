import React from "react"
import styled from "styled-components"

import { BigBlueDoubleQuote } from "../../styles/Commons/Effects"

const TestItemStyled = styled.div`
  position: relative;
  width: 100%;
  padding: 12rem 0 10rem;
  margin: 2rem auto;
  background: ${props => props.theme.white};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(33.3333% - 2rem);
    margin: 1rem;
    padding: 12rem 0 6rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(33.3333% - 4rem);
    margin: 2rem;
    padding: 12rem 0 8rem;
  }

  .test-content {
    text-align: center;
    padding: 2rem;

    p {
      color: ${props => props.theme.black};
      font-family: ${props => props.theme.fontPrim};
      font-size: 2rem;
      font-style: italic;
      font-weight: 300;
      line-height: 1.5;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 1.4rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 1.4rem;
      }
    }
  }

  .test-name {
    position: absolute;
    right: 0;
    bottom: 2rem;
    left: 0;
    text-align: center;
    p {
      display: inline-block;
      position: relative;
      padding: 1rem 3rem 0 3rem;
      transition: all 0.3s ease;
      color: #363636;
      font-family: ${props => props.theme.fontSec};
      font-size: 2.4rem;
      font-weight: 500;
      text-align: center;
      text-transform: uppercase;
      line-height: 1.31;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 1.4rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2rem;
      }

      @media (min-width: ${props => props.theme.bpDeskmd}) {
        font-size: 1.6rem;
      }

      &::after {
        display: block;
        position: absolute;
        right: 0;
        bottom: -1rem;
        left: 0;
        width: 15rem;
        height: 1rem;
        margin: 0 auto;
        transition: all 0.3s ease;
        background: ${props => props.theme.colorPrim};
        content: "";
      }
    }
  }
`

const TestItem = props => {
  const { content, name } = props
  return (
    <TestItemStyled className="test-item">
      <BigBlueDoubleQuote />
      <div
        className="test-content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <div className="test-name">
        <p>{name}</p>
      </div>
    </TestItemStyled>
  )
}

export default TestItem
