import { ApiFetch } from './../src/js/lyrics.js';

describe('ApiFetch', () => {

  let apiFetch;

  beforeEach(() => {
    apiFetch = new ApiFetch();
  });

  test('should return lyrics', async () => {
    const lyrics = await apiFetch.getLyricsPromise('daft punk','around the world');
    expect(lyrics.lyrics).toEqual("Around the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world");
  });

});
