import { AngularLab12bestPage } from './app.po';

describe('angular-lab12best App', () => {
  let page: AngularLab12bestPage;

  beforeEach(() => {
    page = new AngularLab12bestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
