# Simon

* state

```
  game: {
    presentation: false,
    score: 0,
    highscore: 0,
  },
  blocks: [
    {
      component: 'RedBlock',
      active: false,
    },
    {
      component: 'RedBlock',
      active: false,
    },
    {
      component: 'RedBlock',
      active: false,
    },
  ],
  match: [
    'red',
    'blue',
    'blue',
  ],
```
* actions

```
START_GAME
PRESS_COLOR ->
  async action which will re-consult ?

```


## neon title

- Make title use `neon` helper, create a "smart" component with local state which from time to time will add a neon for each letter in a text
creating a "domino" effect
