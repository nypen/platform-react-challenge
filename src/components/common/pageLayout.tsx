import { Outlet } from 'react-router';
import { appLinks } from '../../routes';
import { appName } from '../../constants';
import { NavBar } from './navBar';

const PageLayout = () => {
    return (
        <>
            <NavBar title={appName} links={appLinks} />
            <div className='px-16 py-4'>
                <Outlet />
            </div>
        </>
    );
};

export { PageLayout };
