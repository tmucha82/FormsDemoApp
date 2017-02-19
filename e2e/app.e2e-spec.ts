import { FormsDemoAppPage } from './app.po';

describe('forms-demo-app App', function() {
  let page: FormsDemoAppPage;

  beforeEach(() => {
    page = new FormsDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
