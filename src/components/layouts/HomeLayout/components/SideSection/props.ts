export interface ContainerProps {
    type?: 'first' | 'second';
}

export default interface SideSectionProps extends ContainerProps {
    header: string;
    children?: React.ReactNode;
    icons?: React.ReactNode;
}
