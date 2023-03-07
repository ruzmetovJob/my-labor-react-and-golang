import qr from "/public/imgs/favicon-color.png"

export default function MilliyQR() {
    return (
        <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors bg-gray-100/70 hover:bg-white sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500">
                    <path d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
                <img alt="" src={qr} width="80" height="80" decoding="async" data-nimg="1" loading="lazy" style={{ color: "transparent" }} />
            </div>
            <div className="ml-8 lg:w-64">
                <p className="text-base font-semibold text-gray-900">
                    <a target="_blank" href="https://milliy.nbu.uz/pay-free/instant/441/1068?hash=t32teb045d78d273107348b0300c01d29b7552d622abbc6faf81b3ec55359aa9950c&menu_id=1068&2958=23"><span className="absolute inset-0 sm:rounded-2xl"></span>To`lov uchun havola</a>
                </p>
                <p className="mt-1 text-sm text-gray-700">QR kodni skanerlang va ushbu xizmat uchun to`lovni amalga oshiring</p>
            </div>
        </div>
    )
}