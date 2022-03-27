import theme from "styles/theme";

export const styleModifier = {
  normal: {
    wrapper: {
      padding: "0",
      border: "none",
      borderRadius: "0",
      backgroundColor: "transparent",
    },
    image: {
      height: "20rem",
    },
    content: {
      padding: "3.2rem 2.4rem",
      border: `1.5px solid ${theme.colors.borderColor}`,
    },
    price: {
      fontSize: theme.fonts.sizes.extraMedium,
      span: {
        margin: "0.5rem 0 0 0.3rem",
      },
    },
    title: {
      fontSize: theme.fonts.sizes.extraMedium,
    },
    address: {
      fontSize: theme.fonts.sizes.normal,
    },
    divisor: {
      margin: "1.6rem 0",
    },
    propertiesWrapper: {
      children: {
        marginRight: "2.4rem",
      },
    },
  },
  small: {
    wrapper: {
      padding: "0.4rem",
      border: `1.5px solid ${theme.colors.primary}`,
      borderRadius: "0.8rem",
      backgroundColor: theme.colors.white,
    },
    image: {
      height: "12rem",
    },
    content: {
      padding: "1.6rem 1.2rem 2rem 1.2rem",
      border: "none",
    },
    price: {
      fontSize: theme.fonts.sizes.normal,
      span: {
        margin: "0 0 0 0.3rem",
      },
    },
    title: {
      fontSize: theme.fonts.sizes.normal,
    },
    address: {
      fontSize: theme.fonts.sizes.extraSmall,
    },
    divisor: {
      margin: "1.2rem 0",
    },
    propertiesWrapper: {
      children: {
        marginRight: "1.2rem",
      },
    },
  },
};
