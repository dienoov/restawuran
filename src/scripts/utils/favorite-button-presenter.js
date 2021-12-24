class FavoriteButtonPresenter {
  constructor({ button, favoriteRestaurants, restaurant }) {
    this._button = button;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;
  }

  async render() {
    const { id } = this._restaurant;

    if (!id) return;

    if (await this._isExist(id)) {
      this._renderRemove();
    } else {
      this._renderAdd();
    }
  }

  async _isExist(id) {
    const restaurant = await this._favoriteRestaurants.find(id);
    return !!restaurant;
  }

  _renderAdd() {
    this._button.innerText = 'Add to favorite';
    this._button.setAttribute('aria-label', 'Add to favorite');
    this._button.onclick = async () => {
      await this._favoriteRestaurants.put(this._restaurant);
      await this.render();
    };
  }

  _renderRemove() {
    this._button.innerText = 'Remove from favorite';
    this._button.setAttribute('aria-label', 'Remove from favorite');
    this._button.onclick = async () => {
      await this._favoriteRestaurants.delete(this._restaurant.id);
      await this.render();
    };
  }
}

export default FavoriteButtonPresenter;
