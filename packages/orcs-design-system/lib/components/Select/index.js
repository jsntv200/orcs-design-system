import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { space, radii } from "../../systemtheme";
import colours from "../../colours";
import { default as ReactSelect } from "react-select";
import { rgba } from "polished";
import systemtheme from "../../systemtheme";

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

/**
 *
 * This component uses React Select: <https://react-select.com/home>
 *
 * Usage of this component has changed since we have upgraded to the latest version of `react-select`. For example, field values are now defined as separate objects. for example:
 *
 *       const options = [
 *       { value: 'chocolate', label: 'Chocolate' },
 *       { value: 'strawberry', label: 'Strawberry' },
 *       { value: 'vanilla', label: 'Vanilla' },
 *      { value: 'hazelnut', label: 'Hazelnut' },
 *      { value: 'rocky road', label: 'Rocky Road' }
 *     ]
 * For a full list of the changes, see <https://react-select.com/upgrade-guide>.
 *
 */
const Select = forwardRef((props, ref) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      borderColor: state.isSelected
        ? colours.warning
        : state.isFocused
        ? colours.primary
        : null,
      backgroundColor: props.inverted ? colours.greyDarker : colours.white,
      color: props.inverted ? colours.white : colours.greyDarkest
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: !state.isFocused
        ? 0
        : props.inverted
        ? `0 0 0 ${radii[1]}px ${rgba(colours.primaryLightest, 0.8)}`
        : `0 0 0 ${radii[1]}px ${rgba(colours.primary, 0.4)}`,
      "&:hover": {
        borderColor: colours.primary
      },
      borderColor: state.isFocused ? colours.primary : colours.grey,
      outline: state.isFocused ? colours.primary : colours.grey,
      backgroundColor: props.inverted ? colours.greyDarker : colours.white,
      color: props.inverted ? colours.white : colours.greyDarkest,
      borderRadius: `${radii[2]}px`
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      color:
        !state.isFocused && !props.inverted
          ? colours.greyDark
          : state.isFocused && !props.inverted
          ? colours.primary
          : !state.isFocused && props.inverted
          ? colours.white
          : colours.primaryLight,
      "&:hover": {
        color:
          !state.isFocused && !props.inverted
            ? colours.primary
            : state.isFocused && !props.inverted
            ? colours.primaryDarkest
            : !state.isFocused && props.inverted
            ? colours.primary
            : colours.white
      }
    }),
    container: provided => ({
      ...provided,
      color: props.inverted ? colours.white : colours.grey,
      backgroundColor: props.inverted ? colours.greyDarker : colours.white
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color:
        !state.isFocused && !props.inverted
          ? colours.greyDark
          : state.isFocused && !props.inverted
          ? colours.primary
          : !state.isFocused && props.inverted
          ? colours.white
          : colours.primaryLight,
      "&:hover": {
        color:
          !state.isFocused && !props.inverted
            ? colours.primary
            : state.isFocused && !props.inverted
            ? colours.primaryDarkest
            : !state.isFocused && props.inverted
            ? colours.primary
            : colours.white
      }
    }),
    multiValue: provided => ({
      ...provided,
      backgroundColor: props.inverted ? colours.primaryDark : colours.primary,
      color: colours.white,
      borderRadius: `${radii[2]}px`
    }),
    multiValueLabel: provided => ({
      ...provided,
      backgroundColor: props.inverted ? colours.primaryDark : colours.primary,
      color: colours.white,
      borderRadius: `${radii[2]}px`,
      padding: `${space[2]}px`
    }),
    multiValueRemove: provided => ({
      ...provided,
      backgroundColor: props.inverted ? colours.primaryDark : colours.primary,
      color: colours.white,
      borderRadius: `${radii[2]}px`,
      "&:hover": {
        backgroundColor: colours.primaryDarkest,
        color: colours.white
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor:
        !state.isFocused && !props.inverted
          ? colours.white
          : state.isFocused && !props.inverted
          ? colours.primaryLightest
          : !state.isFocused && props.inverted
          ? colours.greyDarker
          : colours.primaryDark
    }),
    placeholder: provided => ({
      ...provided,
      color: props.inverted ? colours.white : colours.greyDarkest
    })
  };
  return (
    <ThemeProvider theme={props.theme}>
      <Wrapper inverted={props.inverted}>
        <ReactSelect ref={ref} {...props} styles={customStyles} />
      </Wrapper>
    </ThemeProvider>
  );
});

Select.propTypes = {
  /** Points to options object, see example code above */
  options: PropTypes.array,
  /** Styling for dark backgrounds. */
  inverted: PropTypes.bool,
  /** Specifies the system design theme object */
  theme: systemtheme
};

/** @component */
export default Select;
