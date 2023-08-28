import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
}) {

    const classes = className('px-3 py-1.5 border my-2', {
        'border-blue-200 bg-blue-600 text-white': primary,
        'border-gray-600 bg-gray-600 text-white': secondary,
        'border-orange-200 bg-orange-600 text-white': warning,
        'border-green-200 bg-green-600 text-white': success,
        'border-red-200 bg-red-600 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-900': outline && primary,
        'text-gray-700': outline && secondary,
        'text-orange-700': outline && warning,
        'text-green-700': outline && success,
        'text-red-700': outline && danger,
        
    });
    return <button className={classes}>{ children }</button>;
};

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!warning) +
            Number(!!success) +
            Number(!!danger);

        if (count > 1) {
            return new Error(
                'Only one of primary, secondary, success, warning, danger can be true'
            );
        }
    },
};

export default Button;
