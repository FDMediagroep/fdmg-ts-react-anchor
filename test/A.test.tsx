import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import A from '../src/A';

console.info = () => {};

describe('Anchor', () => {
    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() });
    });

    test('renders correctly', () => {
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

    test('renders correctly with href', () => {
        const component = renderer.create(
            <A href="https://fd.nl">test anchor</A>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders correctly with CSS class', () => {
        const component = renderer.create(
            <A className={'css-class-name'}>test anchor</A>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders correctly with tabIndex', () => {
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

    test('renders correctly with ARIA-label', () => {
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

    test('onClick callback handling', () => {
        const clickHandler = jest.fn();
        const component = mount(
            <A onClick={clickHandler}/>
        );
        component.simulate('click');
        expect(clickHandler).toHaveBeenCalled();
    });
});
