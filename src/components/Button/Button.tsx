import { Button, ButtonProps } from 'antd';

type ButtonComponentProps = ButtonProps & {
    label?: string;
};

export const ButtonComponent = ({ label, ...props }: ButtonComponentProps) => {
    return <Button {...props}>{label}</Button>;
};
