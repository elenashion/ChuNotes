import { reactive, UnwrapNestedRefs } from 'vue';
// import { DialogsManager } from './dialog';


class Store {
    private _reactive: UnwrapNestedRefs<Store>;
    // private dialogsManager = new DialogsManager();

    constructor() {
        const refs = reactive(this);

        this._reactive = refs;
    };

    get reactive(): UnwrapNestedRefs<Store> {
      return this._reactive;
    }

    addMessageIntoDialog(message: string) {

    };

}


export function createStore(): UnwrapNestedRefs<Store> {
    return reactive(new Store());
};

let store: UnwrapNestedRefs<Store>;

export function useStore(): UnwrapNestedRefs<Store> {
    if (!store) {
        return createStore();
    }
    return store;
}