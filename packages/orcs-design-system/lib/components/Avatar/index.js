import React from "react";
import styled from "styled-components";
import { space, layout, variant } from "styled-system";
import PropTypes from "prop-types";
import { H5, Text } from "../Typography";
import * as systemtheme from "../../systemtheme";

const AvatarWrapper = styled.div`
  ${space}
  ${layout}
  box-sizing: border-box;
  display: flex;
  align-items: center;
  ${variant({
    prop: "sizing",
    variants: {
      small: {
        fontSize: 1
      },
      default: {}
    }
  })}
`;

const TextContent = styled.div`
  > * + * {
    margin-top: ${systemtheme.space[2]}px;
  }
  margin-left: ${systemtheme.space[3]}px;
  ${variant({
    prop: "sizing",
    variants: {
      small: {
        fontSize: 1,
        marginLeft: systemtheme.space[1]
      },
      default: {}
    }
  })}
`;

const Image = styled.img`
  background-color: ${systemtheme.colors.greyLighter};
  border-radius: 50%;
  border: 0;
  display: block;
  width: calc(${systemtheme.space[5]}px * 2.25);
  height: calc(${systemtheme.space[5]}px * 2.25);
  ${variant({
    prop: "sizing",
    variants: {
      small: {
        height: "calc(" + systemtheme.space[4] + "px * 2.5)",
        width: "calc(" + systemtheme.space[4] + "px * 2.5)"
      },
      default: {}
    }
  })}
`;

const Circle = styled.div`
  border-radius: 50%;
  background-color: ${systemtheme.colors.greyLighter};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-weight: ${systemtheme.fontWeights[2]};
  width: calc(${systemtheme.space[5]}px * 2.25);
  height: calc(${systemtheme.space[5]}px * 2.25);
  ${variant({
    prop: "sizing",
    variants: {
      small: {
        height: "calc(" + systemtheme.space[4] + "px * 2.5)",
        width: "calc(" + systemtheme.space[4] + "px * 2.5)"
      },
      default: {}
    }
  })}
  ${variant({
    prop: "color",
    variants: {
      white: {
        backgroundColor: systemtheme.colors.greyDark,
        color: systemtheme.colors.white
      },
      default: {}
    }
  })}
`;

const Title = styled(H5)`
  ${variant({
    prop: "sizing",
    variants: {
      small: {
        fontSize: systemtheme.fontSizes[3]
      },
      default: {}
    }
  })}
  ${variant({
    prop: "color",
    variants: {
      white: {
        color: systemtheme.colors.white
      },
      default: {}
    }
  })}
`;

const Subtitle = styled(Text)`
  color: ${systemtheme.colors.grey};
  ${variant({
    prop: "sizing",
    variants: {
      small: {
        fontSize: systemtheme.fontSizes[1]
      },
      default: {}
    }
  })}
  ${variant({
    prop: "color",
    variants: {
      white: {
        color: systemtheme.colors.white
      },
      default: {}
    }
  })}
`;

export default function Avatar({ image, initials, title, subtitle, ...props }) {
  return (
    <AvatarWrapper {...props}>
      {image ? (
        <Image src={image} {...props} />
      ) : (
        <Circle {...props}>{initials}</Circle>
      )}
      <TextContent {...props}>
        <Title {...props}>{title}</Title>
        {subtitle ? <Subtitle {...props}>{subtitle}</Subtitle> : null}
      </TextContent>
    </AvatarWrapper>
  );
}

Avatar.propTypes = {
  /** Changes the sizing of the Avatar component */
  sizing: PropTypes.oneOfType(["small", "default"]),
  /** Changes the text colour; use `color="white"` for dark backgrounds */
  color: PropTypes.oneOfType(["white", "default"]),
  /** Specifies a source path for an image */
  image: PropTypes.string,
  /** Specifies initials of person if available */
  initials: PropTypes.string,
  /** Specifies title / name as just plain text, or an element like a hyperlink or react router link */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Specifies subtitle / role */
  subtitle: PropTypes.string
};