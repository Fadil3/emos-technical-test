export interface SongProps {
  id: string;
  artist: string;
  title: string;
  handleClick?: () => void;
}


export default function Song({ id = "100", artist = "hey", title = "John Doe", handleClick }: SongProps) {
  return (
    <section className="flex gap-5 w-full border-b pl-5 pb-5" id={id}>
      <button onClick={
        handleClick
      }>Play</button>
      <p>
        <span className="font-bold">
          {title}
        </span>
        <br />
        {artist}
      </p>
    </section>
  )
}