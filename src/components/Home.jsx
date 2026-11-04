import { useState } from "react"

export default function Home({ onStart, onSampat }) {
  const [fading, setFading] = useState(false);

  const enter = () => {
    if (fading)
      retrun
    setFading(true)
    onStart()
    setTimeout(onSampat, 1100);
  }
  return (
    <div className={fading ? 'pulse band' : 'pulse hai'} onClick={enter}>
      <h1 className="text-4xl ">Welcome To The Cafe Of Pixl</h1>
      <p className="animate-pulse fade">Click here to see our menu</p>
    </div>
  )
}