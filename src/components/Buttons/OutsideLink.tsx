import { Box } from "../Box";
import { Button } from "./Button";

export const OutsideLink = ({
  as = "span",
  to = "#",
  children,
  description = "",
  ...props
}) => {
  if (description) {
    return (
      <Box>
        <Button
          as="a"
          href={to || `#`}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
          class="btn btn-primary"
        >
          {children}
        </Button>
        <Box as={as}>{description}</Box>
      </Box>
    );
  } else {
    return (
      <Button
        as="a"
        href={to || `#`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
        class="btn btn-primary"
      >
        {children}
      </Button>
    );
  }
};