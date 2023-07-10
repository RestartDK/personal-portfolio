import dk from "/assets/dkpixel.png"

function Navbar() {
  return (
    <div id="navbar" className="flex justify-between items-center w-full h-20 px-5 font-kanit bg-carafe-500 sticky top-0">
      <img
        className="flex h-16" 
        src={dk} 
        alt="barrel"
      />
      <button className="flex bg-tan-500 rounded-md py-1 px-2 hover:bg-tan-600">
        Read My CV
      </button>
    </div>
  )
}

export default Navbar