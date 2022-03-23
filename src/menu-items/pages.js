// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
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
        }
    ]
};

export default pages;
