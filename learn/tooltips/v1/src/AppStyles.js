import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import 'react-tippy/dist/tippy.css';

export const Body = styled.div`
  text-align: left;
  font-family: "Adobe Garamond W08", Times;
  font-weight: regular;
  font-size: 22px;
  line-height: 30px;
  max-width: 680px;
  margin: 10vh auto;
`;

export const Link = styled.span`
  text-decoration: underline;
  text-decoration-style: dashed;
  cursor: pointer;
`;


injectGlobal`
  @import url('https://webfonts.artsy.net/unica-webfonts.css');
  @import url('https://webfonts.artsy.net/force-webfonts.css?a=b');
  }
`
