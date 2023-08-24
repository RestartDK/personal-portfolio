const images = [
  { id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "react" },
  { id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "java" },
  { id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "javascript" },
  { id: 4, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "python" },
  { id: 5, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", alt: "pandas" },
]


function Languages() {
  return (
    <div id="languages" className="flex flex-col h-screen w-full items-center justify-start py-2 px-11 bg-carafe-400 font-ysabeau">
      <h1 className="text-center text-tan-500 text-5xl mb-6"> 
        Coding Languages I Know 
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className='w-32 h-32 object-cover'
          />
        ))}
      </div>     
    </div>
  )
}

export default Languages