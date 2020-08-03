> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[Blogpost](https://weslleyaraujo.dev/posts/building-a-simon-says-game-with-react-and-redux) on how and why's I built this app

# React Simon Says

![React Simon Says](./screenshot.png)

So basically I needed a reason to play with the awesome [Styled Components](https://github.com/styled-components/styled-components) from [@mxstbr](http://twitter.com/mxstbr) and
then I decided to build a "Simon Says" like game

You can play it [here](https://weslleyaraujo.github.io/react-simon-says/)

## Summary

The app was build with [redux](https://github.com/reactjs/redux) so it was quite simple to manage the data flow using [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) functions together with [redux-thunk](https://github.com/gaearon/redux-thunk)

> tl;dr thunks and `async` functions play nice together :heart:

```js
const foo = (payload) => async (dispatch) => {
  await sleep(500);
  dispatch(bar());
};
```

### Quick Start

```
$ git clone https://github.com/weslleyaraujo/react-simon-says.git
$ cd react-simon-says
$ npm install
$ npm start
```

### Specs

I am using [Jest](https://facebook.github.io/jest/) as my spec runner, you can run it using:

```
$ npm test
```

and to get a coverage overview:

```
$ npm test -- --coverage
```

### Contributing

Changes and improvements are more than welcome! Feel free to fork and open a pull request. Please make your changes in a specific branch and request to pull into master! If you can, please make sure the game fully works before sending the PR, as that will help speed up the process.

### License

This application is licensed under the [Beerware License](https://en.wikipedia.org/wiki/Beerware)
