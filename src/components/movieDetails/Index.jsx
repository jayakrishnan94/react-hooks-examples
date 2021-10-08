import React from 'react'

const Index = () => {
    return (
        <section class="movieDetailWrapper">
            <div class="innerWrapper">
                <div class="poster">
                    <img src="https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg"
                        alt="" />
                </div>
                <div class="movieDetails">
                    <h1 class="title">Joker</h1>
                    <span class="rating"> Raing: 8.5</span>
                    <span class="language"> Language: English</span>
                    <span class="genre"> Genre: Drama</span>
                    <p class="plot">Plot: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus
                        itaque
                        commodi officiis magni quidem expedita quaerat. Provident, consectetur reprehenderit! Maxime
                        nemo quas omnis sunt tempora veritatis asperiores culpa repudiandae.</p>
                    <button>Watch Movie Now</button>
                </div>
            </div>
        </section>
    )
}

export default Index
