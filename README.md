> :exclamation: **DEPRECATED** :exclamation: : Superseded by @fdmg/design-system. See: https://github.com/FDMediagroep/fd-design-system

# fdmg-ts-react-anchor

[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-ts-react-anchor.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-ts-react-anchor)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-anchor/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-anchor?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Fts-react-anchor.svg)](https://badge.fury.io/js/%40fdmg%2Fts-react-anchor)


[ReactJS](https://reactjs.org/) Anchor component. This component renders an Anchor header.
You might think it silly to have this as a separate component. But when you use an Anchor-element multiple times in your
project then having that as a component might eventually save you some bytes.

## Installation
- Run `npm i --save-dev @fdmg/ts-react-anchor`

or

- Run `yarn add @fdmg/ts-react-anchor --dev`

## Usage
### TypeScript
```
import * as React from 'react';
import A from 'fdmg-ts-react-anchor';

export default class foo {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    render() {
        return (<span>
            <A className={'css-class-name'}>Anchor text</A>
            <A className={'css-class-name'} title='Title text'>Anchor text</A>
            <A className={'css-class-name'} ariaLabel='ARIA-label text'>Anchor text</A>
            <A className={'css-class-name'} title='Title text' ariaLabel='ARIA-label text'>Anchor text</A>
            <A href="https://fd.nl" 
                className={'css-class-name'} 
                title='Title text' 
                ariaLabel='ARIA-label text' 
                target="_blank" 
                tabIndex='2'>Anchor text</A>
        </span>);
    }
}
```

### Resulting HTML
```
<span>
    <a class="css-class-name" aria-label="Anchor text" tabIndex="0">Anchor text</a>
    <a class="css-class-name" aria-label="Title text" tabIndex="0">Anchor text</a>
    <a class="css-class-name" aria-label="ARIA-label text" tabIndex="0">Anchor text</a>
    <a class="css-class-name" aria-label="ARIA-label text" tabIndex="0">Anchor text</a>
    <a href="https://fd.nl" class="css-class-name" aria-label="ARIA-label text" target="_blank" tabIndex="2">Anchor text</a>
</span>
```
