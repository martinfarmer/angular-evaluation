import { AngularEvaluationPage } from './app.po';

describe('angular-evaluation App', () => {
  let page: AngularEvaluationPage;

  beforeEach(() => {
    page = new AngularEvaluationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
