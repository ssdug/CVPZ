import { WebuiPage } from './app.po';

describe('webui App', function() {
  let page: WebuiPage;

  beforeEach(() => {
    page = new WebuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
