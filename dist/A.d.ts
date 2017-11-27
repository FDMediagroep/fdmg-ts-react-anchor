/// <reference types="react" />
import * as React from 'react';
import { MouseEvent } from 'react';
export interface Props {
    ariaLabel?: string;
    children?: JSX.Element[] | HTMLElement[] | string | number;
    className?: string;
    href?: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    target?: string;
    tabIndex?: number;
    title?: string;
}
/**
 * A compononent renders a heading
 */
export default class A extends React.Component<Props, any> {
    state: any;
    props: any;
    constructor(props: Props);
    /**
     * Returns the ARIA-label text by following priority:
     * 1. ariaLabel property
     * 2. title property
     * 3. innerText
     *
     * @returns {string}
     */
    getAriaLabel(): string;
    render(): JSX.Element;
}
