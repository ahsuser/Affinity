import { AhsdPage } from './app.po';

describe('ahsd App', () => {
  let page: AhsdPage;

  beforeEach(() => {
    page = new AhsdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
