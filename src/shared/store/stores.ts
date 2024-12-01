import authStore, { authState } from './auth';

// ReturnType<typeof infoEntryStore>;
type Stores = {
  auth: authState;
};

const useStore = <T>(selector: (stores: Stores) => T): T => {
  const stores: Stores = {
    auth: authStore(),
  };

  return selector(stores);
};

export { useStore };
