import React, { useRef, FC, ComponentProps } from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';

type MuiLinkProps = ComponentProps<typeof MuiLink>;

const Link: FC<MuiLinkProps> = (props) => {
  const ref = useRef();

  // @ts-ignore
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
};

export default Link;
