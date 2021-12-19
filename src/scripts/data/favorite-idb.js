import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

class FavoriteIdb {
  static get dbPromise() {
    return openDB(DATABASE_NAME, DATABASE_VERSION, {
      upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
      },
    });
  }

  static async all() {
    return (await this.dbPromise).getAll(OBJECT_STORE_NAME);
  }

  static async find(id) {
    return (await this.dbPromise).get(OBJECT_STORE_NAME, id);
  }

  static async put(data) {
    return (await this.dbPromise).put(OBJECT_STORE_NAME, data);
  }

  static async delete(id) {
    return (await this.dbPromise).delete(OBJECT_STORE_NAME, id);
  }
}

export default FavoriteIdb;
