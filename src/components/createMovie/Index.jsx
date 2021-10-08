import React, { useState } from 'react'

const MultiMediaData = () => {
    return (
        <>
            <img src="/images/no-image-icon.png" alt="" />
            <video width="320" height="240" controls>
                <source src="/images/Timelapse of a Cold Winter Day.mp4" type="video/mp4" />
                <source src="/images/Timelapse of a Cold Winter Day.mp4" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </>
    )
}

const Index = () => {
    const [state, setstate] = useState("")
    return (
        <section className="createMovieWrapper">
            <div className="innerWrapper">
                <div className="formWrapper">
                    <form action="">
                        <h1>Create Movie</h1>
                        <div className="field">
                            <input type="text" placeholder="Poster Link here" value={state} onChange={e => setstate(e.target.value)} />
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Movie Link here" />
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Title" />
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Language" />
                        </div>
                        <div className="field">
                            <select name="Genre" id="">
                                <option value="Select Genre">Select Genre</option>
                            </select>
                        </div>
                        <div className="field">
                            <textarea name="" id="" cols="60" rows="6">
                            </textarea>
                        </div>
                        <div className="field">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="preview">
                    <MultiMediaData />
                </div>
            </div>
        </section>
    )
}

export default Index
