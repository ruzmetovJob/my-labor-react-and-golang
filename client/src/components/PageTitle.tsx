
type PageTitleProps = {
    title: string
}

export default function PageTitle({title} : PageTitleProps): JSX.Element {
    return (
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
            </div>
        </header>
    )
}
