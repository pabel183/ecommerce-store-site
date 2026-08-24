import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Organization */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="text-lg font-extrabold tracking-tight text-white uppercase">
              Aetheris<span className="text-emerald-400">.</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Powered by the Aetheris Digital Engine. Delivering high-performance, multi-channel commerce solutions across global digital storefronts.
            </p>
          </div>

          {/* Platform Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Featured Collection
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-emerald-400 transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/help" className="hover:text-emerald-400 transition-colors">
                  Help Center & FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-emerald-400 transition-colors">
                  Shipping & Logistics
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-emerald-400 transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & System Status */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Governance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li className="flex items-center gap-2 pt-2 text-emerald-400 font-mono text-[11px]">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                API Engine Online
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            &copy; {currentYear} <span className="font-semibold text-white">Aetheris Digital Suite, Inc.</span> All rights reserved.
          </p>
          <p className="text-[11px] text-slate-500 font-mono">
            Enterprise Multi-Tenant Storefront Engine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// const Footer=()=>{
//     return(
//         <footer className="bg-white border-t absolute bottom-0 right-0 left-0">
//             <div className="mx-auto py-10">
//                 <p className="text-center text-xs text-black">
//                     &copy; 2024 FakeStoreNameA, Inc. All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// }
// export default Footer;