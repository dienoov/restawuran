class Page {
  static async render() {
    throw new TypeError('Abstract method, cannot be accessed directly.');
  }

  static async created() {
    throw new TypeError('Abstract method, cannot be accessed directly.');
  }
}

export default Page;
