import styled from "react-emotion";

const color = {
  white: ["255,255,255", "240, 240, 240"],
  black: ["44, 42, 41", "48, 41, 36", "97, 92, 90", "60,60,60"],
  red: ["203,51,59", "178,45,52"],
  blue: ["0,114,206", "10,84,144"]
};

export default styled("div")(({ status }) => ({
  background: `rgb(${color.black[2]})`,
  color: "#fff",
  fontSize: 14,
  borderRadius: 3,
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",

  ".content": {
    padding: 10,
    lineHeight: "1.25"
  },

  ".title": {
    textTransform: "capitalize",
    fontWeight: 900
  },

  ".title-bar": {
    paddingLeft: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  button: {
    color: "#fff",
    background: "rgba(0,0,0,0)",
    border: "none",
    cursor: "pointer",
    padding: "5px 10px"
  },

  svg: {
    fill: `rgb(${color.white[1]})`,
    width: 15
  },

  ...statusProps(status)
}));

function statusProps(status) {
  switch (status) {
    case "error":
      return {
        background: `rgb(${color.red[0]})`,

        "> .title-bar": {
          background: `rgb(${color.red[1]})`
        }
      };
    case "success":
      return {
        background: `rgb(${color.blue[0]})`,

        "> .title-bar": {
          background: `rgb(${color.blue[1]})`
        }
      };
    default:
      return {};
  }
}
