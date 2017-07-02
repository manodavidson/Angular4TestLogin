import { Login123Page } from './app.po';

describe('login123 App', () => {
  let page: Login123Page;

  beforeEach(() => {
    page = new Login123Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
