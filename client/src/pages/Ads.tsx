import { Motion, PageTitle } from "components";
import { AdsCard } from "components";


export default function Ads(): JSX.Element {
    return (
        <Motion>
            <PageTitle title="Eʼlonlar" disc="" />
            <div className='container mt-6 mx-auto'>
                <h2 className="text-center">Mavjud emas ...</h2>
                <AdsCard />
            </div>
        </Motion>
    )


}