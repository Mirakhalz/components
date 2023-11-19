import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

//function to handle user clicking on links without a full page refresh
function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
    );

    const handleClick = (event) => {
        //add shortcut to open links in a new window
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        //prevent default page refresh behaviour
        event.preventDefault();

        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>)
};

export default Link;

