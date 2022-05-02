import { useState } from 'react';

import { Tab, TabsWrapper } from 'components/Home/Tabs/Tabs.style';

type TabsConfigType<T> = {
  type: T;
  renderTabContent: (key: string) => JSX.Element;
  text: string;
};

interface ITabsProps<T> {
  defaultTab: T;
  tabsConfig: TabsConfigType<T>[];
}

const Tabs = <T extends string>({ tabsConfig, defaultTab }: ITabsProps<T>) => {
  const [selectedTab, setSelectedTab] = useState<T>(defaultTab);

  return (
    <>
      <TabsWrapper>
        {tabsConfig.map(({ type, text }) => (
          <Tab key={type} isActive={selectedTab === type} onClick={() => setSelectedTab(type)}>
            {text}
          </Tab>
        ))}
      </TabsWrapper>
      {tabsConfig.map(({ renderTabContent, type }) => selectedTab === type && renderTabContent(type))}
    </>
  );
};

export default Tabs;
