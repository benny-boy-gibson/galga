sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let space_ship = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . . 9 9 9 9 2 3 3 3 . . . . . 
. 4 4 9 9 9 9 9 9 3 3 . . . . . 
. 4 4 9 9 9 2 4 9 9 9 9 . . . . 
. . . . . . 2 4 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
space_ship.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(space_ship, 200, 200)
space_ship = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . a . . . . . . . . . 
. . . . . . a a . . . . . . . . 
. . . 4 7 7 a a 7 4 . . . . . . 
. . . 4 7 7 7 7 7 7 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, dart, 200, 0)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . 2 8 f f 8 2 . . . . . 
. . . . 4 8 8 8 8 8 8 4 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(100, 0)
    bogey.setPosition(160, Math.randomRange(0, 112))
})
