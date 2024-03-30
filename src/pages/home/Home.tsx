import { useEffect, useState } from "react"
import { Navbar } from "../../components"

const Home = () => {
  const[focus, setFocus] = useState(false)
  const[search, setSearch] = useState('')

  const handleChange = (e:any) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if(search.length){
      setFocus(true)
    }
    else {
      setFocus(false)
    }
  },[search])

  const clearSearch = () => {
    setSearch('')
  }
  
  console.log(focus);
  
  return (
    <div>
      <Navbar onchange={handleChange} focus={focus} onclick={clearSearch} />
    </div>
  )
}

export default Home