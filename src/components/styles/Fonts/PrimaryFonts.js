import * as primary from "../../../fonts/primary"

const PrimaryFonts = `
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src:
    local("Open Sans Light"),
    local("OpenSans-Light"),
    url('${primary.WOFF2_3}') format("woff2"),
    url('${primary.WOFF_3}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 300;
  src:
    local("Open Sans Light Italic"),
    local("OpenSans-LightItalic"),
    url('${primary.IWOFF2_3}') format("woff2"),
    url('${primary.IWOFF_3}') format("woff");
}


@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src:
    local("Open Sans Regular"),
    local("OpenSans-Regular"),
    url('${primary.WOFF2_4}') format("woff2"),
    url('${primary.WOFF_4}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 400;
  src:
    local("Open Sans Italic"),
    local("OpenSans-LightItalic"),
    url('${primary.IWOFF2_4}') format("woff2"),
    url('${primary.IWOFF_4}') format("woff");
}


@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  src:
    local("Open Sans SemiBold"),
    local("OpenSans-SemiBold"),
    url('${primary.WOFF2_6}') format("woff2"),
    url('${primary.IWOFF_6}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 600;
  src:
    local("Open Sans SemiBold Italic"),
    local("OpenSans-SemiBoldItalic"),
    url('${primary.IWOFF2_6}') format("woff2"),
    url('${primary.IWOFF_6}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src:
    local("Open Sans Bold"),
    local("OpenSans-Bold"),
    url('${primary.WOFF2_7}') format("woff2"),
    url('${primary.WOFF_7}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 700;
  src:
    local("Open Sans Bold Italic"),
    local("OpenSans-BoldItalic"),
    url('${primary.IWOFF2_7}') format("woff2"),
    url('${primary.IWOFF_7}') format("woff");
}


@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  src:
    local("Open Sans ExtraBold"),
    local("OpenSans-ExtraBold"),
    url('${primary.WOFF2_8}') format("woff2"),
    url('${primary.WOFF_8}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 800;
  src:
    local("Open Sans ExtraBold Italic"),
    local("OpenSans-ExtraBoldItalic"),
    url('${primary.IWOFF2_8}') format("woff2"),
    url('${primary.IWOFF_8}') format("woff");
}

`

export default PrimaryFonts
