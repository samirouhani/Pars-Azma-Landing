type StatementBannerProps = {
    content: string;
};

export default function StatementBanner({ content }: StatementBannerProps) {
    return (
        <div className="flex justify-center border-b border-t border-border-gray py-8 px-5.5 sm:px-10 md:px-22 bg-slightly-blue">
            <div className="text-[0.75rem] tracking-[0.0625rem] font-semibold text-blue-gray text-center">{content.toUpperCase()}</div>
        </div>
    )
}