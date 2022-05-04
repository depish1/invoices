import { EFormType } from 'components/Home/Forms/Forms';
import { Tab, TabsWrapper } from 'components/Home/Tabs/Tabs.style';
import { useTabsContext } from 'components/Home/hooks/useTabsContext';

type TabsConfigType = {
  type: EFormType;
  renderTabContent: (key: string) => JSX.Element;
  text: string;
};

interface ITabsProps {
  defaultTab: EFormType;
  tabsConfig: TabsConfigType[];
}

const Tabs = ({ tabsConfig }: ITabsProps) => {
  const { activeTab, changeTab } = useTabsContext();

  return (
    <>
      <TabsWrapper>
        {tabsConfig.map(({ type, text }) => (
          <Tab key={type} isActive={activeTab === type} onClick={() => changeTab(type)}>
            {text}
          </Tab>
        ))}
      </TabsWrapper>
      {tabsConfig.map(({ renderTabContent, type }) => activeTab === type && renderTabContent(type))}
    </>
  );
};

export default Tabs;
