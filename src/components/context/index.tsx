import React, { createContext } from 'react';
import { Routes } from 'components/app';

export interface Value {
	onDidNavigate: (route: Routes) => void;
}

export const RouterContext = createContext<Value>({ onDidNavigate: () => {} });

export const useRouter = () => React.useContext(RouterContext);
