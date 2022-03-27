import theme from "styles/theme";

export const styleModifier = {
  contained: {
    backgroundColor: theme.colors.primary,
    textColor: theme.colors.white,
    borderColor: theme.colors.primary,
  },
  outlined: {
    backgroundColor: "transparent",
    textColor: theme.colors.text.primary,
    borderColor: theme.colors.secondary,
  },
};
