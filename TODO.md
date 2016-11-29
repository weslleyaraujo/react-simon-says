# Simon

* state

```
  status: {
    onGoing: false,
    presentationOnGoing: false,
    currentScore: 0,
    highScore: 0,
  },
  match: [
    {
      color: 'red',
      success: true,
    },
    ...
  ],
```

## neon title

- Make title use `neon` helper, create a "smart" component with local state which from time to time will add a neon for each letter in a text
creating a "domino" effect
