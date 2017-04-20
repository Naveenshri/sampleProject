import { MakeshPage } from './app.po';

describe('makesh App', () => {
  let page: MakeshPage;

  beforeEach(() => {
    page = new MakeshPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
