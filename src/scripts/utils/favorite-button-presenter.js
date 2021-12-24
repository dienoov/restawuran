import FavoriteIdb from '../data/favorite-idb';

class FavoriteButtonPresenter {
  constructor({ button, restaurant }) {
    this._button = button;
    this._restaurant = restaurant;
  }

  async render() {
    const { id } = this._restaurant;

    if (!id) return;

    if (await FavoriteButtonPresenter._isExist(id)) {
      this._renderRemove();
    } else {
      this._renderAdd();
    }
  }

  static async _isExist(id) {
    const restaurant = await FavoriteIdb.find(id);
    return !!restaurant;
  }

  _renderAdd() {
    this._button.innerText = 'Add to favorite';
    this._button.setAttribute('aria-label', 'Add to favorite');
    this._button.onclick = async () => {
      await FavoriteIdb.put(this._restaurant);
      await this.render();
    };
  }

  _renderRemove() {
    this._button.innerText = 'Remove from favorite';
    this._button.setAttribute('aria-label', 'Remove from favorite');
    this._button.onclick = async () => {
      await FavoriteIdb.delete(this._restaurant.id);
      await this.render();
    };
  }
}

export default FavoriteButtonPresenter;
