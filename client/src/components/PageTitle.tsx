
type PageTitleProps = {
    title: string
    disc: string
}

export default function PageTitle({title, disc=' '} : PageTitleProps): JSX.Element {
    return (
        <header className="" >
            <div className="mx-auto lg:max-w-screen-xl md:max-w-screen-sm p-4 sm:px-6 lg:px-8 rounded-lg bg-current-gradient sm:shadow-xl">
                <h1 className="font-bold text-white text-[32px]">{title}</h1>
                <p className="mt-2 text-white/80 text-[16px] min-h-[18px]">{disc}</p>
            </div>
        </header>
    )
}
