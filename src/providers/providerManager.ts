import { IProviderContructor } from '@src/types';
import { IProviderConfig, addProviderConfig } from '@src/ducks/providerConfigs';
import { providerStorage } from './providerStorage';
import { store } from '@src/ducks';

export function addProvider(
  providerName: string,
  Provider: IProviderContructor,
) {
  return providerStorage.setClass(providerName, Provider);
}

export function useProvider(
  providerName: string,
  instanceName: string,
  config: IProviderConfig,
  ...args: any[]
) {
  const Provider = providerStorage.getClass(providerName);
  const provider = new Provider(...args);
  providerStorage.setInstance(instanceName, provider);
  const action = addProviderConfig({ config: config, id: instanceName });
  store.dispatch(action);
  return config;
}