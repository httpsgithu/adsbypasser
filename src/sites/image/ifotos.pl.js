_.register({
  rule: [
    'http://ifotos.pl/zobacz/*',
    'https://postimg.cc/*',
    'https://pixxxels.cc/*',
    'https://img.javstore.net/image/*',
  ],
  async ready () {
    const m = $('meta[property="og:image"]');
    await $.openImage(m.content);
  },
});
