import Store from 'store';
import Collection from 'components/collection';
import Room from 'components/room';
import HUD from 'components/HUD';
import Rock from 'components/rock';
import Fire from 'components/fire';
import Fly from 'components/fly';
import Bomb from 'components/bomb';
import Coin from 'components/coin';
import Isaac from 'components/isaac';
import VolumeController from 'volume-controller';

Store.set('room', new Room());
Store.set('HUD', new HUD());
Store.set('noAchievement', true);
Store.set('hardMode', false);
Store.set('sounds', new VolumeController());
Store.set('backgroundObstacles', new Collection({ collection: [], }));

Store.set('tears', new Collection({ shouldUpdateBeforeRender: true, }));

Store.set('obstacles', new Collection({ collection:
[
    new Rock({ x: 450, y: 120, }),
    new Rock({ x: 65, y: 65, }),
    new Rock({ x: 115, y: 65, }),
    new Rock({ x: 165, y: 65, }),
    new Rock({ x: 65, y: 116, }),
    new Rock({ x: 115, y: 116, }),
    new Rock({ x: 165, y: 116, }),
], shouldUpdateBeforeRender: true, }));

Store.set('items', new Collection({ collection:
[
    new Bomb({ x: 82, y: 356, }),
    new Coin({ x: 140, y: 375, }),
    new Coin({ x: 160, y: 375, }),
    new Coin({ x: 180, y: 375, }),
    new Coin({ x: 200, y: 375, }),
    new Coin({ x: 680, y: 80, }),
    new Coin({ x: 680, y: 65, }),
], }));

Store.set('monsters', new Collection({ collection:
[
    new Fire({ x: 703, y: 65, }),
    new Fire({ x: 650, y: 65, }),
    new Fly({ x: 250, y: 65, }),
    new Fly({ x: 300, y: 65, name: 'homing', }),
    new Fly({ x: 330, y: 65, name: 'homing', }),
    new Fly({ x: 350, y: 65, name: 'homing', }),
    new Fly({ x: 360, y: 65, name: 'homing', }),
], shouldUpdateBeforeRender: true, }));

Store.set('player', new Isaac());
Store.set('playerItems', new Map());


export const background = new Collection({ collection:
[
    Store.get('room'),
    Store.get('backgroundObstacles'),
    Store.get('HUD'),
], });

export const foreground = new Collection({ collection:
[
    Store.get('obstacles'),
    Store.get('monsters'),
    Store.get('items'),
    Store.get('tears'),
    Store.get('player'),
], });


window.Store = Store;
window.Player = Store.get('player');
window.items = Store.get('items');

// export const obstacles = foreground[0];
// export const monsters = foreground[1];
// export const player = foreground[2];
