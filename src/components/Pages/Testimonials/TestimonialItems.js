import React from "react"
import styled from "styled-components"

import TestItem from "./TestItem"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { AngleGreyBackground } from "../../styles/Commons/Effects"

const TestimonialItemsStyled = styled.div`
  position: relative;
`

const TestimonialItems = props => {
  const { tests } = props
  return (
    <TestimonialItemsStyled>
      <StandardWrapper>
        {tests &&
          tests.length > 0 &&
          tests.map((test, index) => {
            const BG = (index + 1) % 3 === 0 ? true : false

            console.log(BG, index)
            return (
              <TestItem
                key={index}
                content={test.node.acf._ire_test_content}
                name={test.node.acf._ire_test_name}
              />
            )
          })}
      </StandardWrapper>
    </TestimonialItemsStyled>
  )
}

export default TestimonialItems
