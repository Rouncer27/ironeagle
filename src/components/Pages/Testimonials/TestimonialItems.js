import React from "react"
import styled from "styled-components"

import TestItem from "./TestItem"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { AngleGreyBackground } from "../../styles/Commons/Effects"

const TestimonialItemsStyled = styled.div`
  .test-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: 100%;
  }
`

const TestimonialItems = props => {
  const { tests } = props
  let oneRow = []
  const rowsOfTest = []

  tests.forEach((test, index) => {
    if ((index + 1) % 3 === 0) {
      oneRow.push(test)
      rowsOfTest.push(oneRow)
      oneRow = []
    } else {
      oneRow.push(test)
    }
  })

  return (
    <TestimonialItemsStyled>
      <StandardWrapper>
        {rowsOfTest.map((row, index) => {
          return (
            <div key={index} className="test-row">
              {row.map((test, index) => {
                return (
                  <TestItem
                    key={index}
                    content={test.node.acf._ire_test_content}
                    name={test.node.acf._ire_test_name}
                  />
                )
              })}
              <AngleGreyBackground />
            </div>
          )
        })}
      </StandardWrapper>
    </TestimonialItemsStyled>
  )
}

export default TestimonialItems
