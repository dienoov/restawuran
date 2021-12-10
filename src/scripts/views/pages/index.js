import Page from './page';

class Index extends Page {
  static async render() {
    return '<app-list></app-list>';
  }

  static async created() {
    console.log(1);
  }
}

export default Index;
