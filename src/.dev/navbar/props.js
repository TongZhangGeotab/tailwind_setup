const config = require('../../config.json');
/**
 * Props item - Houses all the navbar items and submenu items
 */
const props = [
    
    
     {
         name: 'activity',
         labelText: {
             en: 'Activity'
            },
         hasSubmenu: true,
         submenuItems: [
                {
                    name: 'installTailwind',
                    labelText: config.items[0].menuName,
                }
            ]
    },
    
    
    
    
    
     
];

module.exports = props;