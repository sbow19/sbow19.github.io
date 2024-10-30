import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import SiteBody from '../components/site-body';
import Content from '../components/content';
import ProjectsOverviewContainer from '../containers/project-details/projects-overview-container';
import ProjectDetailsContainer from '../containers/project-details/project-details-cotainer';

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <SiteBody/> }>
        <Route index element={<Navigate to="/about" />} />
        <Route path='about' element={ <Content/>} />
        <Route path='projects' element={ <ProjectsOverviewContainer/> }>
            <Route path=':name' element={ <ProjectDetailsContainer/> }/>
        </Route>
        <Route path='*' element={<Content />} />
    </Route>
  ));

  export default appRouter;