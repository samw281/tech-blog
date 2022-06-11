const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Pabst roof party keffiyeh seitan forage.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text:
      " Kickstarter post-ironic yuccie pitchfork. Fixie coloring book four dollar toast vice copper mug.",
    user_id: 3,
    post_id: 8,
  },
  {
    comment_text: " Unicorn mlkshk fixie before they sold.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text:
      "Letterpress af brooklyn forage. Kale chips activated charcoal listicle.",
    user_id: 3,
    post_id: 10,
  },
  {
    comment_text: " 3 wolf moon bespoke drinking vinegar.",
    user_id: 2,
    post_id: 5,
  },
  {
    comment_text: "Raclette sartorial sriracha jianbing salvia four loko.",
    user_id: 1,
    post_id: 9,
  },
  {
    comment_text: "Subway tile biodiesel drinking vinegar DIY vice art party.",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: " Sriracha hammock you probably haven't heard of them banjo.",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text:
      "Tousled kogi blue bottle flannel chia iceland fashion axe. Schlitz iceland taxidermy pug salvia dreamcatcher.",
    user_id: 3,
    post_id: 10,
  },
  {
    comment_text:
      "Truffaut taxidermy actually shabby chic 3 wolf moon pitchfork cold-pressed meh vinyl iPhone.",
    user_id: 3,
    post_id: 7,
  },
  {
    comment_text: ".",
    user_id: 3,
    post_id: 5,
  },
  {
    comment_text: "Donec ut mauris eget massa tempor convallis.",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text:
      "Salvia ugh ramps, viral prism brooklyn beard small batch ennui vexillologist asymmetrical fingerstache distillery heirloom.",
    user_id: 4,
    post_id: 9,
  },
  {
    comment_text:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    user_id: 4,
    post_id: 7,
  },
  {
    comment_text: " Blue bottle leggings fixie unicorn disrupt.",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "Kogi tofu iPhone chia kombucha fixie.",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text:
      "Migas DIY kogi normcore, cronut cliche bitters readymade tumeric mumblecore hot chickent.",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Polaroid bitters hella, snackwave selvage narwhal occupy.",
    user_id: 4,
    post_id: 9,
  },
  {
    comment_text:
      "Marfa echo park cloud bread edison bulb hammock gluten-free, viral sriracha tilde live-edge biodiesel iPhone. Chia distillery gochujang roof party skateboard synth bespoke wolf.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text:
      " Occupy iceland hoodie lyft leggings raw denim, authentic selvage banh mi PBR&B.",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: " Coloring book austin bushwick fanny pack salvia viral.",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text:
      "Gluten-free la croix scenester 90's photo booth, jean shorts you probably haven't heard of them.",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "Man bun vaporware keffiyeh farm-to-table.",
    user_id: 3,
    post_id: 8,
  },
  {
    comment_text: "Lo-fi af shabby chic retro iPhone.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text:
      "La croix gochujang woke bicycle rights, pitchfork post-ironic tbh vape occupy everyday carry franzen pork belly adaptogen health goth kale chips.",
    user_id: 1,
    post_id: 5,
  },
  {
    comment_text: "Celiac butcher YOLO air plant post-ironic.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "Green juice try-hard prism pickled slow-carb small batch.",
    user_id: 1,
    post_id: 5,
  },
  {
    comment_text: " Hexagon vaporware mumblecore meggings aesthetic fam.",
    user_id: 4,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
