import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in local state", () => {
        const component = create(<ProfileStatus userStatus='asdasdasdasdas'/>);
        const instance = component.getInstance();
        expect(instance.state.userStatus).toBe("asdasdasdasdas");
    });

    test('input not visible if no-edit mode', ()=> {
        const component = create(<ProfileStatus userStatus='asdasdasdasdas'/>);
        const instance = component.root;
        expect(()=>{instance.findByType('input')}).toThrow()
    });

    test("span visible if no-edit mode", () => {
        const component = create(<ProfileStatus userStatus='asdasdasdasdas'/>);
        const instance = component.root;
        let span = instance.findByType('span');
        expect(span.children).not.toBe(null);
    });

    test("span contain true status", () => {
        const component = create(<ProfileStatus userStatus='asdasdasdasdas'/>);
        const instance = component.root;
        let span = instance.findByType('span');
        expect(span.children[0]).toBe('asdasdasdasdas');
    });

    test("input visible if edit mode", () => {
        const component = create(<ProfileStatus userStatus='asdasdasdasdas'/>);
        const instance = component.root;
        let span = instance.findByType('span');
        span.props.onDoubleClick();
        let input = instance.findByType('input');
        expect(input.props.value).toBe('asdasdasdasdas');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus updStatus={mockCallback} userStatus='asdasdasdasdas'/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});