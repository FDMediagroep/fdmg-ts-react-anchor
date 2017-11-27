import * as React from 'react';
import {MouseEvent} from 'react';

export interface Props {
    ariaLabel?: string;
    children?: JSX.Element[]|HTMLElement[]|string|number;
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
    public state: any;
    public props: any;

    constructor(props: Props) {
        super(props);
        this.props = props;
        console.info('A component', props);
    }

    /**
     * Returns the ARIA-label text by following priority:
     * 1. ariaLabel property
     * 2. title property
     * 3. innerText
     *
     * @returns {string}
     */
    getAriaLabel(): string {
        let ariaLabel;
        if(this.props.ariaLabel) {
            ariaLabel = this.props.ariaLabel;
        } else if(this.props.title) {
            ariaLabel = this.props.title;
        } else if(this.props.children && typeof(this.props.children) === 'string') {
            ariaLabel = this.props.children;
        }
        return ariaLabel;
    }

    render() {
        return (
            <a href={this.props.href} className={this.props.className} aria-label={this.getAriaLabel()}
               target={this.props.target} tabIndex={this.props.tabIndex?this.props.tabIndex:0}
               title={this.props.title} onClick={this.props.onClick}>
                {this.props.children}
            </a>
        );
    }
}
