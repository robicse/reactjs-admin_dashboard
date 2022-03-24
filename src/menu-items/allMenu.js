// assets
import { IconKey, IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'Role',
                    title: 'Role',
                    type: 'item',
                    url: 'role',
                    target: false
                },
                {
                    id: 'Resource',
                    title: 'Resource',
                    type: 'item',
                    url: 'resource',
                    target: false
                },
                {
                    id: 'Permission',
                    title: 'permission',
                    type: 'item',
                    url: 'permission',
                    target: false
                }
            ]
        },
        {
            id: 'booking',
            title: 'Booking',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'pareclbooking',
                    title: 'Parcel Booking',
                    type: 'item',
                    url: 'parcel_booking',
                    target: false
                },
                {
                    id: 'moneybooking',
                    title: 'Money Booking',
                    type: 'item',
                    url: 'money_booking',
                    target: false
                }
            ]
        },
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconTypography,
            breadcrumbs: false
        }
    ]
};

export default pages;
