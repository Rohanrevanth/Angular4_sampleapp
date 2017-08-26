import { Ng4SampleappPage } from './app.po';

describe('ng4-sampleapp App', () => {
  let page: Ng4SampleappPage;

  beforeEach(() => {
    page = new Ng4SampleappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
