import { useEffect, useState } from 'react'
import axios from 'axios'
import Song from './Song'
import { SongProps } from './Song'

function App() {
  const [song, setSong] = useState<SongProps[]>([])
  const [activeSong, setActiveSong] = useState<number>(0)
  useEffect(() => {
    axios.get('https://emos-frontend-techtest.vercel.app/api/playlist')
      .then((res) => {
        console.log(res.data.data)
        setSong(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleNext = () => {
    // handle next song
    if (activeSong + 1 < song.length - 1)
      setActiveSong(activeSong + 1)
  }

  const handlePrev = () => {
    if (activeSong - 1 >= 0)
      setActiveSong(activeSong - 1)
  }

  const handleShuffle = () => {
    const shuffle = Math.floor(Math.random() * song.length)
    if (shuffle !== activeSong)
      setActiveSong(shuffle)
  }


  return (
    <div className='mx-auto border w-8/12 flex flex-col justify-center items-center gap-4 pt-4 bg-white'>
      <h1 className='font-bold'>Now Playing</h1>
      <div className="flex justify-between w-full bg-blue-100 p-3">
        <button className="text-blue-400 font-semibold" onClick={handlePrev}>Prev</button>
        <div className=" text-blue-600 text-center">
          <span className='font-bold'>{song.length > 0 && song[activeSong].title}</span>
          <br />
          {song.length > 0 && song[activeSong].artist}
        </div>
        <button className="text-blue-400 font-semibold" onClick={handleNext}>Next</button>
      </div>
      <button className=' pr-3 text-right w-full font-bold text-blue-500' onClick={handleShuffle}>Shuffle Song</button>
      {song.map((song, index) => {
        return (
          <Song
            key={song.id}
            id={song.id}
            artist={song.artist}
            title={song.title}
            handleClick={() => {
              setActiveSong(index)
            }}
          />
        )
      })}
    </div>
  )
}

export default App
