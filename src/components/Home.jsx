import { useState } from "react"

export default function Home({ onSampat }) {
  const [fading, setFading] = useState(false);

  const enter = () => {
    if (fading)
      retrun
    setFading(true)
    setTimeout(onSampat, 1100);
  }
  return (
    <div className={fading ? 'pulse bund' : 'pulse hai'} onClick={enter}>
      <h1 className="text-4xl ">Welcome To The Cafe Of Pixl</h1>
      <p className="animate-pulse fade">Click here to see our menu</p>
    </div>
  )
}