import { EFormType } from 'components/Home/Forms/Forms';
import { ReactNode, createContext, useContext, useState } from 'react';

const TabsContext = createContext(undefined);

interface ITabsContextProviderProps {
  children: ReactNode;
  defaultTab: EFormType;
}

interface ITabs {
  activeTab: EFormType;
  changeTab: (tab: EFormType) => void;
}

const TabsContextProvider = ({ children, defaultTab }: ITabsContextProviderProps) => {
  const [activeTab, setActiveTab] = useState<EFormType>(defaultTab);

  const changeTab = (tab: EFormType) => setActiveTab(tab);

  const value = { activeTab, changeTab };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

const useTabsContext = () => {
  const context = useContext<ITabs>(TabsContext);
  if (context === undefined) {
    throw new Error('tabs must be used within a TabsContext');
  }
  return context;
};

export { TabsContextProvider, useTabsContext };
