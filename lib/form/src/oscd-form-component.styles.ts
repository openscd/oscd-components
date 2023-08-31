import { css, CSSResult } from 'lit-element';

import { styles as coreStyles } from '@openscd/core';

export const styles: CSSResult = css`
  ${coreStyles}

  .container {
    display: flex;
    flex-direction: row;
  }

  .container > div {
    flex: auto;
  }
  .container.container--switch {
    align-items: center;
    margin-left: 16px;
    height: 56px;
  }
`;
