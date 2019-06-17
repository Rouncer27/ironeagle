import React from "react"
import styled from "styled-components"

const TraneProductsStyled = styled.div`
  margin: 5rem auto;
  padding: 0;
  border-top: 0.25rem solid ${props => props.theme.colorPrim};
  border-bottom: 0.25rem solid ${props => props.theme.colorPrim};
  box-shadow: 0 0.5rem 1rem 0.5rem rgba(0, 0, 0, 0.25);

  .trane-product-wrapper {
    width: 100vw;
    height: 75vh;
    min-height: 75rem;
    max-height: 75rem;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
  }

  .trane-product-iframe {
    width: 100vw;
    height: 75vh;
    min-height: 75rem;
    max-height: 75rem;
  }
`

const TraneProducts = () => {
  return (
    <TraneProductsStyled>
      <div id="product-site" className="trane-product-wrapper">
        <iframe
          src="https://traneproducts.com/?channel_id=795"
          frameborder="0"
          className="trane-product-iframe"
          vspace="0"
          hspace="0"
          scrolling="auto"
          allowtransparency="true"
          title="Trane Products List"
        />
      </div>
    </TraneProductsStyled>
  )
}

export default TraneProducts
