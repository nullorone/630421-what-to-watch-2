import React from 'react';
import {Main} from '../main/main';

const MOVIES = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: {
      src: `./img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      alt: `Fantastic Beasts: The Crimes of Grindelwald`,
    },
  },
  {
    title: `Bohemian Rhapsody`,
    img: {
      src: `./img/bohemian-rhapsody.jpg`,
      alt: `Bohemian Rhapsody`,
    },
  },
  {
    title: `Macbeth`,
    img: {
      src: `./img/macbeth.jpg`,
      alt: `Macbeth`,
    },
  },
  {
    title: `Aviator`,
    img: {
      src: `./img/aviator.jpg`,
      alt: `Aviator`,
    },
  },
  {
    title: `We need to talk about Kevin`,
    img: {
      src: `./img/we-need-to-talk-about-kevin.jpg`,
      alt: `We need to talk about Kevin`,
    },
  },
  {
    title: `What We Do in the Shadows`,
    img: {
      src: `./img/what-we-do-in-the-shadows.jpg`,
      alt: `What We Do in the Shadows`,
    },
  },
  {
    title: `Revenant`,
    img: {
      src: `./img/revenant.jpg`,
      alt: `Revenant`,
    },
  },
  {
    title: `Johnny English`,
    img: {
      src: `./img/johnny-english.jpg`,
      alt: `Johnny English`,
    },
  },
  {
    title: `Shutter Island`,
    img: {
      src: `./img/shutter-island.jpg`,
      alt: `Shutter Island`,
    },
  },
  {
    title: `Pulp Fiction`,
    img: {
      src: `./img/pulp-fiction.jpg`,
      alt: `Pulp Fiction`,
    },
  },
  {
    title: `No Country for Old Men`,
    img: {
      src: `./img/no-country-for-old-men.jpg`,
      alt: `No Country for Old Men`,
    },
  },
  {
    title: `Snatch`,
    img: {
      src: `./img/snatch.jpg`,
      alt: `Snatch`,
    },
  },
  {
    title: `Moonrise Kingdom`,
    img: {
      src: `./img/moonrise-kingdom.jpg`,
      alt: `Moonrise Kingdom`,
    },
  },
  {
    title: `Seven Years in Tibet`,
    img: {
      src: `./img/seven-years-in-tibet.jpg`,
      alt: `Seven Years in Tibet`,
    },
  },
  {
    title: `Midnight Special`,
    img: {
      src: `./img/midnight-special.jpg`,
      alt: `Midnight Special`,
    },
  },
  {
    title: `War of the Worlds`,
    img: {
      src: `./img/war-of-the-worlds.jpg`,
      alt: `War of the Worlds`,
    },
  },
  {
    title: `Dardjeeling Limited`,
    img: {
      src: `./img/dardjeeling-limited.jpg`,
      alt: `Dardjeeling Limited`,
    },
  },
  {
    title: `Orlando`,
    img: {
      src: `./img/orlando.jpg`,
      alt: `Orlando`,
    },
  },
  {
    title: `Mindhunter`,
    img: {
      src: `./img/mindhunter.jpg`,
      alt: `Mindhunter`,
    },
  },
  {
    title: `Midnight Special`,
    img: {
      src: `./img/midnight-special.jpg`,
      alt: `Midnight Special`,
    },
  }
];

const App = () => {
  return <Main
    movies={MOVIES}
  />;
};

export {App};
