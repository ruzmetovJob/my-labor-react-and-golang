
type PageTitleProps = {
    title: string
    disc: string
}

export default function PageTitle({title, disc=''} : PageTitleProps): JSX.Element {
    return (
        <header className="">
            <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
                <h1 className="font-extrabold text-[#222328] text-[32px]">{title}</h1>
                <p className="mt-2 text-[#666e75] text-[16px]">{disc}</p>
            </div>
        </header>
    )
}
