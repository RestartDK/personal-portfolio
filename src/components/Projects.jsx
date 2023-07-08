import ProjectItem from "./ProjectItem"
import projects from "../data/projects"

function Projects() {
  return (
    <div>
      <div id="projects" className="flex flex-col w-full items-center justify-center pt-2 pb-2 bg-carafe-500 font-ysabeau">
        <h1 className="flex text-tan-500 text-4xl py-4 ">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-4 m-20 px-6">
          {projects.map((project) => (
            <ProjectItem 
              key={project.id}
              title={project.title}
              projectUrl={project.projectUrl}
              imgUrl={project.imgUrl}
              stack={project.stack}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects