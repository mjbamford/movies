import React from 'react';
import MovieForm from './MovieForm'
import { mount } from 'enzyme';

describe('MovieForm', () => {
    it('renders', () => {
        const onCreate = jest.fn()
        const wrapper = mount(<MovieForm onCreate={onCreate} />)
        const expected = { _id: 666, title: "TITLE", yearReleased: '1990' }
        const event = {
            target: {
                'movie[_id]': { value: expected._id },
                'movie[title]': { value: expected.title },
                'movie[yearReleased]': { value: expected.yearReleased }
            }
        }

        wrapper.find('form').simulate('submit', event)
        expect(onCreate.mock.calls.length).toBe(1)
        expect(onCreate.mock.calls[0][0]).toEqual(expected)
    })
})