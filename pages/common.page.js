// Shared actions (navigate, click, fill, submit)
class CommonPage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '/') {
    await this.page.goto(path);
  }

  async clickElement(selector) {
    await this.page.click(selector);
  }

  async fillField(selector, value) {
    await this.page.fill(selector, value);
  }

  async getTitle() {
    return await this.page.title();
  }
}

module.exports = CommonPage;
