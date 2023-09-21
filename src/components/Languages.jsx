const images = [
  { id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "react" },
  { id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "java" },
  { id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "javascript" },
  { id: 4, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "python" },
  { id: 5, src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", alt: "pandas" },
];


function Languages() {
  return (
    <div id="languages" className="flex flex-col w-full items-center justify-center py-5 px-11 bg-carafe-500 font-ysabeau">
      <div className="flex w-full justify-center">
        <h1 className="text-center text-tan-500 text-5xl mb-6"> 
          My Coding Languages 
        </h1>
      </div>
      <div className="flex flex-1 w-full justify-center pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 p-4">
          {images.map((image) => (
            <div key={image.id} className="flex justify-center w-24 h-24 md:w-32 md:h-32 bg-carafe-400 rounded-md">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full"  // Make the icon take up the full size of the div
              />
            </div>
          ))}
        </div>     
      </div>
    </div>
  )
}

export default Languages;