export default function Footer() {
    return (
        <footer className="border-t bg-slate-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} Pars Azma. All rights reserved.
                </p>
            </div>
        </footer>
    );
}