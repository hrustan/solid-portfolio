import { For, type Component } from 'solid-js';
import { Navigation } from './components/navigation/navigation';
import { ProjectDisplay } from './components/project-display/project-display';
import { projectList } from './static/projects'

const App: Component = () => {
  return (
    <div class="app">
      <Navigation />
      <For each={projectList.projects}>
        {project => (
          <ProjectDisplay project={project}/>
        )}
      </For>
    </div>
  );
};

export default App;
