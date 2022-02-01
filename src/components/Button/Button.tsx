import React from 'react';

import { Button as BaseButton, ButtonProps } from '@patternfly/react-core';

const Button = (props: ButtonProps) => <BaseButton {...props}>{props.children}</BaseButton>;

export default Button;
