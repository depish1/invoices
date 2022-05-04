import { AlertWrapper } from 'components/Utils/Alert/Alert.style';

interface IAlertProps {
  text: string;
}

const Alert = ({ text }: IAlertProps) => <AlertWrapper>{text}</AlertWrapper>;

export default Alert;
