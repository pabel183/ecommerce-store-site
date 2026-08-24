interface MottoBannerProps {
    subtitle?: string;
    title?: string;
}

const MottoBanner: React.FC<MottoBannerProps> = ({
    subtitle = "Curated Collections",
    title = "✨ Elevate Your Everyday Style",
}) => {
    return (
        <div className="pt-4 px-4 sm:px-6 lg:px-8">
            <div className="w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-emerald-900/30 relative overflow-hidden">
                <div className="absolute right-0 top-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                <p className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-1">
                    {subtitle}
                </p>
                <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                    {title} . . .
                </h1>
            </div>
        </div>
    );
};

export default MottoBanner;