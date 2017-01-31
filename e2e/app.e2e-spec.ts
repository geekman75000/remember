import { RememberAngular2Page } from './app.po';

describe('remember-angular2 App', function() {
  let page: RememberAngular2Page;

  beforeEach(() => {
    page = new RememberAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
