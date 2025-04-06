import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import SiteBody from '../components/site-body';
import Content from '../components/content';

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <SiteBody/> }>
        <Route index element={<Navigate to="/about" />} />
        <Route path='about' element={ <Content/>} />
        <Route path='*' element={<Content />} />
    </Route>
  ));

  export default appRouter;