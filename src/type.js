"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 100,
})
  .move(-13)
  .type("Passionate ")
  .pause(2000)
  .move(null, { to: "END" })
  .delete()
  .go();
