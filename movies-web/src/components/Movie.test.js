import React from 'react';
import Movie from './Movie'
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

describe('Movie', () => {
    const attrs = { _id: 666, title: 'Title 666', yearReleased: 1990 }
    it('renders the movie correctly', () => {
        const wrapper = shallow(<Movie {...attrs} />)
        expect(wrapper.contains('Title 666')).toEqual(true)
    })

    it('renders the snapshot', () => {
        const movie = renderer.create(
            <MemoryRouter>
                <Movie {...attrs} />
            </MemoryRouter>
        )
        expect(movie.toJSON()).toMatchSnapshot()
    })
})
