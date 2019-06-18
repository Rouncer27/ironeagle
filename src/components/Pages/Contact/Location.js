import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/Commons/Wrappers"
import { SmallH1TitleBlue } from "../../styles/Commons/Titles"
import { AngleGreyBackground } from "../../styles/Commons/Effects"

const LocationStyled = styled.section`
  position: relative;
  width: 100%;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin-top: 10rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    margin-top: 15rem;
    margin-bottom: 15rem;
  }

  .location-wrapper {
    align-items: center;
  }

  .location-map {
    position: relative;
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin-right: 4rem;
    }

    .location-map--title {
      position: absolute;
      top: -2rem;
      right: 0;
      left: 0;
      width: 100%;
      margin: 0 auto;
      text-align: center;
      z-index: 500;

      @media (min-width: ${props => props.theme.bpTablet}) {
        top: -3rem;
      }

      p {
        color: ${props => props.theme.black};
        font-family: ${props => props.theme.fontSec};
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 1.14;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 3.6rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 4.4rem;
        }

        @media (min-width: ${props => props.theme.bpDeskmd}) {
          font-size: 4.8rem;
        }
      }
    }
  }

  .location-address {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 5rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 4rem;
    }

    &--title {
      h1 {
        color: ${props => props.theme.black};
      }
    }

    .vcard {
      span {
        color: #363636;
        font-family: ${props => props.theme.fontPrim};
        font-size: 1.8rem;
        font-weight: 300;
        font-style: normal;
        line-height: 1.5;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.6rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2rem;
          line-height: 1.67;
        }

        @media (min-width: ${props => props.theme.bpDeskmd}) {
          font-size: 2.4rem;
        }

        a {
          color: #363636;
          font-weight: 300;

          &:hover {
            color: ${props => props.theme.colorSec};
          }
        }
      }

      .street-address {
        display: block;
      }

      .street-address__phone,
      .street-address__wrapper {
        display: block;
      }
    }
  }

  .location-background {
    top: auto;
    bottom: 0;
  }
`

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "#00adef",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
)

class Location extends Component {
  static defaultProps = {
    center: {
      lat: 51.2903677,
      lng: -113.9981432,
    },
    zoom: 15,
  }

  render() {
    return (
      <LocationStyled>
        <StandardWrapper className="location-wrapper">
          <div className="location-map">
            <div className="location-map--title">
              <p>Find Us</p>
            </div>
            <div style={{ height: "400px", width: "400px" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyABBBBHsMVQXBjX3nq7GMdNiTdGiUqbczc",
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={51.2903677}
                  lng={-113.9981432}
                  text={"Iron Eagle"}
                />
              </GoogleMapReact>
            </div>
          </div>
          <div className="location-address">
            <div className="location-address--title">
              <SmallH1TitleBlue>
                Iron Eagle Heating, <br />
                Air Conditioning, <br />& Refrigeration
              </SmallH1TitleBlue>
            </div>
            <address
              className="vcard"
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              <span className="adr">
                <span itemProp="streetAddress" className="street-address">
                  708 East Lake Rise NE
                </span>
                <span className="street-address__wrapper">
                  <span itemProp="addressLocality" className="locality">
                    Airdrie
                  </span>
                  ,{" "}
                  <span className="region" title="Alberta">
                    Alberta
                  </span>
                  ,{" "}
                  <span itemProp="postalCode" className="postal-code">
                    T4A 2H9
                  </span>
                </span>
                <span className="street-address__phone">
                  Telephone:{" "}
                  <a href="tel:+14039481333" itemProp="telephone">
                    403.948.1333
                  </a>
                </span>
              </span>
            </address>
          </div>
        </StandardWrapper>
        <AngleGreyBackground className="location-background" />
      </LocationStyled>
    )
  }
}

export default Location
