const { Post } = require('../models');

const postdata = [
  {
    title: 'XOXO cray kickstarter gluten-free fingerstache.',
    post_url: 'https://google.com',
    user_id: 2
  },
  {
    title: 'Organic mumblecore cloud bread typewriter.',
    post_url: 'https://google.com',
    user_id: 3
  },
  {
    title: 'Farm-to-table VHS tilde letterpress man bun air plant blog banh mi.',
    post_url: 'https://google.com',
    user_id: 1
  },
  {
    title: 'Messenger bag affogato cardigan.',
    post_url: 'https://google.com',
    user_id: 4
  },
  {
    title: 'Sriracha kale chips glossier squid vape.',
    post_url: 'https://google.com',
    user_id: 2
  },
  {
    title: 'YOLO raclette actually roof party salvia poutine live-edge.',
    post_url: 'https://google.com',
    user_id: 3
  },
  {
    title: 'Fanny pack fashion axe beard asymmetrical polaroid.',
    post_url: 'https://google.com',
    user_id: 1
  },
  {
    title: 'Taiyaki gluten-free direct trade readymade chambray.',
    post_url: 'https://google.com',
    user_id: 1
  },
  {
    title: 'Mumblecore bespoke paleo.',
    post_url: 'https://google.com',
    user_id: 4
  },
  {
    title: 'Authentic taxidermy master cleanse.',
    post_url: 'https://google.com',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
