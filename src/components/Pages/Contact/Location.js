import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/Commons/Wrappers"

const LocationStyled = styled.section`
  width: 100%;
  @media (min-width: ${props => props.theme.bpTablet}) {
    padding-top: 10rem;
  }

  .location-wrapper {
    align-items: center;
  }

  .location-map {
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
    }
  }

  .location-address {
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
    }
  }
`

const AnyReactComponent = ({ text }) => <div>{text}</div>

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
            <div style={{ height: "400px", width: "400px" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCUdH5JJBzezyH-kSzH8Fy9B9a-qvn3utw",
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
          <div className="location-address">
            <div>
              <h1>Iron Eagle Heating, Air Conditioning, & Refrigeration</h1>
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
                  Phone 24/7:{" "}
                  <a href="tel:+14039481333" itemProp="telephone">
                    403.948.1333
                  </a>
                </span>
              </span>
            </address>
          </div>
        </StandardWrapper>
      </LocationStyled>
    )
  }
}

export default Location
