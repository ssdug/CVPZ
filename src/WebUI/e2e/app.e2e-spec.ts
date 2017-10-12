import { WebUIPage } from './app.po';

describe('web-ui App', () => {
  let page: WebUIPage;

  beforeEach(() => {
    page = new WebUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
