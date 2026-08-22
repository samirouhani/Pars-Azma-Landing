type VerticalDividerProps = {
    height: string;
};

export default function VerticalDivider({ height }: VerticalDividerProps) {
    return (
        <div 
            className={`w-px bg-border-gray`}
            style={{ height }}
        ></div>
    );
}