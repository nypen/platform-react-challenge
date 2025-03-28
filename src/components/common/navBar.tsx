import { NavLink } from 'react-router';
import { LinkItem } from '../../routes';

interface NavBarProps {
    title: string;
    links: LinkItem[];
}

export const NavBar = ({ title, links }: NavBarProps) => {
    return (
        <div className='navbar bg-base-100 shadow-sm'>
            <div className='flex-1'>
                <a className='text-2xl font-extrabold'>{title}</a>
            </div>
            <div className='flex-none'>
                <ul className='flex gap-5 px-13'>
                    {links.map((link) => (
                        <li key={link.id}>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'underline' : '')}
                                key={link.id}
                                to={link.route}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
