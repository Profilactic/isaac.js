export const bombs =
{
    sprite: 'build/img/bombs_sprite.png',
    width: 32,
    height: 32,
    default:
    {
        position: [ 0, 0, ],
    },
    double:
    {
        position: [ 32, 0, ],
    },
    explosion:
    {
        sprite: 'build/img/explosion_sprite.png',
        width: 96,
        height: 96,
        states: 12,
    },
};

export const coins =
{
    sprite: 'build/img/coins_sprite.png',
    width: 20,
    height: 15,
    states: 6,
};

export default
{
    bombs,
};
