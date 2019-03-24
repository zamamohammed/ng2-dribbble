import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { count, click, wait } from './shared/action';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should display welcome message', () => {
    expect(page.getTitleText()).toEqual('Angular Behance');
  });

  it('should render behance cards', () => {
    expect(count(page.getCards(), 'behance cards')).toBeGreaterThanOrEqual(1);
  });

  it('should click on first card', () => {
    const title = page.getFirstCardTitle().getText();
    click(page.getFirstCardTitle(), 'first card');
    const heading = page.getBehancveDetailsPageHeading();
    wait(heading, 'Behance details page header');

    expect(heading.getText()).toBe(title);
  });

});
