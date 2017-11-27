import * as React from 'react';
import * as renderer from 'react-test-renderer';
import A from '../src/A';

console.info = function() {};

test('A renders correctly', () => {
    let component = renderer.create(
        <A/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <A><span>testing 123</span><div>testing456</div></A>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('A renders correctly with href', () => {
    const component = renderer.create(
        <A href="https://fd.nl">test anchor</A>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('A renders correctly with CSS class', () => {
    const component = renderer.create(
        <A className={'css-class-name'}>test anchor</A>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('A renders correctly with tabIndex', () => {
    let component = renderer.create(
        <A tabIndex="2">test anchor</A>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <A tabIndex="-1">test anchor</A>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('A renders correctly with ARIA-label', () => {
    let component = renderer.create(
        <A>anchor text as ARIA-label</A>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <A ariaLabel="ARIA-label">anchor text, not ARIA</A>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <A title="title shown as ARIA-label">anchor text, not ARIA</A>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <A title="this should not be shown as ARIA-label" ariaLabel="ariaLabel shown as ARIA-label">anchor text, not ARIA</A>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <A title="title shown as ARIA-label"><span>testing 123</span><div>testing456</div></A>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <A ariaLabel="ariaLabel shown as ARIA-label"><span>testing 123</span><div>testing456</div></A>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
