import { FormsWrapper, SectionWrapper } from 'components/Home/Forms/Forms.style';
import RODO from 'components/Home/RODO/RODO';
import SignInForm from 'components/Home/SignInForm/SignInForm';
import SignUpForm from 'components/Home/SignUpForm/SignUpForm';
import Tabs from 'components/Home/Tabs/Tabs';

export enum EFormType {
  SIGN_IN = 'signin',
  SIGN_OUT = 'signout',
}

const tabsConfig = [
  {
    type: EFormType.SIGN_IN,
    renderTabContent: (key: string) => (
      <SectionWrapper key={key}>
        <SignInForm />
      </SectionWrapper>
    ),
    text: 'Logowanie',
  },
  {
    type: EFormType.SIGN_OUT,
    renderTabContent: (key: string) => (
      <SectionWrapper key={key}>
        <SignUpForm />
      </SectionWrapper>
    ),
    text: 'Rejestracja',
  },
];

const Forms = () => (
  <FormsWrapper>
    <Tabs defaultTab={EFormType.SIGN_IN} tabsConfig={tabsConfig} />
    <SectionWrapper>
      <RODO />
    </SectionWrapper>
  </FormsWrapper>
);

export default Forms;
