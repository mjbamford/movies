import React from 'react';
import MovieList from './MovieList'
import Movie from './Movie'
import { shallow } from 'enzyme';

describe('MovieList', () => {
    it('renders without any movies', () => {
        const wrapper = shallow(<MovieList />)
        expect(wrapper.find(Movie)).toHaveLength(0)
    })

    it('renders 3 Movies', () => {
        const movies = [
            { _id: 666, title: 'Title 666' },
            { _id: 667, title: 'Title 667' },
            { _id: 668, title: 'Title 668' }
        ]
        const wrapper = shallow(<MovieList items={movies} />)
        // Extremely useful
        // console.log(wrapper.debug())
        expect(wrapper.find(Movie)).toHaveLength(3)
        expect(wrapper.contains(<Movie _id={666} title="Title 666"/>)).toEqual(true)
    })
})
