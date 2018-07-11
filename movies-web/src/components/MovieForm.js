import React from 'react'

const handleSubmit = (event, onCreate) => {
    event.preventDefault()
    const form = event.target
    const _id = form['movie[_id]'].value
    const title = form['movie[title]'].value
    const yearReleased = form['movie[yearReleased]'].value
    onCreate({ _id, title, yearReleased })
}

const MovieForm = ({ movie, onCreate }) => {
    movie = movie || {}
    return (
        <div>
            <h4>Create a new movie</h4>
            <form key={movie._id} onSubmit={(event) => handleSubmit(event, onCreate)}>
                <input type="hidden" name="movie[_id]" value={movie._id} />
                <label>
                    <span>Title</span>
                    <input defaultValue={movie.title} name="movie[title]"/>
                </label>
                <label>
                    <span>Year Released</span>
                    <input defaultValue={movie.yearReleased} name="movie[yearReleased]"/>
                </label>
                <button type='submit'>
                    { (!!movie._id) ? 'Save' : 'Create' }
                </button>
            </form>
        </div>
    )
}

export default MovieForm