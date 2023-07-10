function ProjectItem({key, title, projectUrl, imgUrl, stack}) {
  return (
    <div className="rounded-md border-2 border-sanddollar-500 drop-shadow-md overflow-hidden">
      <img 
        src={imgUrl} 
        alt={title} 
        className="w-full h-64 object-cover object-center cursor-pointer"
      />
      <div className="w-full p-5">
        <h3 className="text-left font-semibold text-tan-500 text-xl pb-2">{title}</h3>
        <p className="flex flex-row flex-wrap text-left text-sanddollar-500 gap-2">
          {stack.map((item) => (
            <span key={key} className="rounded-md border-2 px-2 py-1 inline-block">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
    
  )
}

export default ProjectItem