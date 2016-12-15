import { Ng2BudgetPage } from './app.po';

describe('ng2-budget App', function() {
  let page: Ng2BudgetPage;

  beforeEach(() => {
    page = new Ng2BudgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
