import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { BannerPayments, LoginButton, MilliyQR, PageTitle } from "components";
import { MyAppContext } from "contexts/ThemeContext";
import { useMyServicesOneQuery, useServiceSaveMutation } from "store/api/api";
import { ageCalculator, errorNotify, succesNotify, toBase64 } from "utils";
import { EpsTopikShow, LoadingShow } from "./show";
import defavatar from "/public/imgs/0.png";


type Inputs = {
    rozilik: string,
    service_id: string,
    pin: string,
    pay: any,
    photo_file: any,
    pasport_num: string,
    first_name: string,
    sur_name: string,
    middle_name: string,
    region: string,
    city: string,
    street_address: string,
    phone: string,
    email: string,
    pasport_file: any,
    //paycheck_file: any | null,
};



export default function EpsTopik(): JSX.Element {

    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState(defavatar);
    const [paymentsService, setPaymentsService]: any = useState(false);
    const { userData } = useContext<any>(MyAppContext);


    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm<Inputs>();

    const { data: myService, isFetching: myServiceLoading, error: myServiceError,refetch }:any = useMyServicesOneQuery({ pinfl: userData?.uinfo?.pin, service_id: '1' }, {
        refetchOnFocus: false,
    });

    const [createUser, { isLoading: isUpdating, data: result,error: errorSave }]:any = useServiceSaveMutation()

    let Age:any = ageCalculator(userData?.uinfo?.birth_date)



    const onImageChange = (event: { target: { files: any[] } }) => {
        if (event.target.files && event.target.files[0]) {
            let img: MediaSource = event.target.files[0];
            setSelectedImage(URL.createObjectURL(img));
        } else {
            setSelectedImage(defavatar);
        }
    };


    useEffect(() => {
        if(myServiceError?.status=="FETCH_ERROR") {
            errorNotify("Serverga sorovda xatolik \n useMyServicesOneQuery \n"+myServiceError?.error)
            console.log(myServiceError);
        }
        if(errorSave?.status=="FETCH_ERROR") {
            errorNotify("Serverga sorovda xatolik \n useServiceSaveMutation \n"+errorSave?.error)
            console.log(myServiceError);
        }
    },[myServiceError,errorSave])

    const onSubmit: SubmitHandler<Inputs> = async data => {
        if (data.photo_file) {
            data.photo_file = await toBase64(data.photo_file[0]);
        }
        /*if (data.paycheck_file[0]) {
            data.paycheck_file = await toBase64(data.paycheck_file[0]);
        } else if (paymentsService[0]) {
            data.pay = paymentsService
        }*/
        if (data.pasport_file) {
            data.pasport_file = await toBase64(data.pasport_file[0]);
        }
        if (!paymentsService[0]) {
            errorNotify("To`lov malumotlari topilmadi...")
            return
        }else{
            data.pay = paymentsService
        }

        try {
            const res: any = await createUser(data).unwrap();
            console.log(res)
            if (res?.success) {
                succesNotify("Sizning murojaatingiz saqlandi!")
                refetch()
            } else {
                errorNotify(res?.message ? res?.message : "Xatolik yuzberdi!")
                if(res?.message=="Sizda ushbu xizmat mavjud"){
                    refetch()
                }
            }
        } catch (e: any) {
            errorNotify(e.message)
        }
        
    }


    if(Age>=40){
        return (
            <h2>Xurmatli fuqaro sizning yoshingiz {Age} da bo`lib, ushbu ro`yxatdan o`ta olmaysiz. Talabga ko`ra yosh chegarasi <b>40 yoshga to‘lmagan</b> fuqarolar ro`yxatdan o`tishi mumkin</h2>
        )
    }

    return (
        <>
            <PageTitle title="Xizmatlar" disc={""} />
            <main className="my-3 mb-12 sm:mx-14">
                <div className="w-full mx-auto md:flex block">
                    <div className="md:w-2/5 p-4">
                        <div className="p-4">
                            <a className="cursor-pointer" onClick={e => { navigate(-1) }}>&lArr; Ortga qaytish</a>
                            <div className="my-3">
                                <h2 className="text-3xl font-semibold my-6">Koreya Respublikasiga vaqtinchalik mehnat faoliyatini amalga
                                    oshirish uchun 2023 yilda rejalashtirilayotgan test imtihonida qatnashish</h2>
                                <p className="text-justify">O‘zbekiston Respublikasi fuqarolari yosh chegarasi 40 yoshga to‘lmagan,

                                    horijga chiqish uchun taqiqi mavjud bo‘lmagan, 

                                    har tomonlama sog‘lom, yuqumli kasallikka chalinmagan fuqarolar, 

                                    Koreya Respublikasi xududiga kirishga taqiqi yo‘q, sudlanmagan fuqarolar, Koreya
                                    Respublikasida 5 yildan ortiq muddatda ishlamagan fuqarolar.

                                    Fuqaro faqat EʼLONDA ko‘rsatilgan sanada test imtixoniga kirish uchun to‘lov (28 AQSH dollari)ni
                                    O‘zbekiston Respublikasi milliy valyutasi ekvavilentida shu kundagi Markaziy bank tomonidan belgilab
                                    bergan kurs bo‘yicha amalga oshiradilar. To‘lov kvitansiyasi faqat xorijga chiqish pasporti maʼlumoti
                                    asosida to‘ldiriladi. Yaʼni test imtihoniga kirish istagida bo‘lgan fuqaro Familiya Ismi Sharifi
                                    (xorijga chiqish pasport bo‘yicha ko‘rsatiladi), pasport seriya va raqami, to‘lov elektron tarzda, tarif (Koreys tili bo‘yicha EPS-TOPIK test imtihoni uchun tolov) bo‘yicha amalga oshirilishi shart.</p>
                            </div>

                            <MilliyQR />

                        </div>
                    </div>
                    <div className="md:w-3/5 p-4 relative overflow-hidden">

                        {userData?.uinfo?.pin ?
                            <>
                                {myServiceLoading?
                                    <LoadingShow />
                                    :
                                    <>
                                        {(myService && !myServiceError?.status) ?
                                            <>
                                            <EpsTopikShow data={myService} />
                                            </>

                                            :
                                            <>
                                                {!paymentsService && <BannerPayments pin={userData?.uinfo?.pin} give={setPaymentsService} />}

                                                <div className="bg-white rounded-lg pt-6 border border-1 overflow-hidden shadow">
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        <h3 className="text-xl font-semibold mx-4">Rozilik ofertasi</h3>
                                                        <div className="grid grid-cols-6 sm:gap-6">
                                                            <div className="col-span-6 sm:col-span-4">
                                                                <p className="text-sm text-gray-500 p-4">
                                                                    Men, {userData?.uinfo?.full_name} shaxsga doir maʼlumotlarimga ishlov berilishiga roziman va ushbu
                                                                    shaklni to‘ldirishim Koreya Respublikasiga ishga ketishimni kafolatlamaydi.
                                                                </p>
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-2">
                                                                <div className="flex justify-center mt-2 mb-4 sm:mb-0">
                                                                    <div className="form-check form-switch">
                                                                        <input  {...register("rozilik", { required: true })}
                                                                            className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                                                                            type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                                        <label className="form-check-label inline-block" htmlFor="flexSwitchCheckDefault">Tanishib chiqdim, va
                                                                            roziman</label>
                                                                    </div>
                                                                </div>
                                                                <span className="err transition-all">{errors.rozilik && 'Ushbu maydon majburiy'}</span>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            {
                                                                paymentsService[0] && (
                                                                    <div className="bg-gray-100 w-full p-2 mb-2">
                                                                        <h3 className="text-xl font-semibold mx-4">To`lov kvitansiyasi</h3>
                                                                        <div className="grid grid-cols-12 gap-0 sm:gap-4 w-full m-2">
                                                                            <div className="col-span-12 sm:col-span-4 gap-0 sm:gap-2">Kim tomonidan: <b>{paymentsService[0].s_name + " " + paymentsService[0].f_name}</b></div>
                                                                            <div className="col-span-6 sm:col-span-3 gap-0 sm:gap-2">Pasport: <b>{paymentsService[0].passport}</b></div>
                                                                            <div className="col-span-6 sm:col-span-2 gap-0 sm:gap-2">Summa: <b>{paymentsService[0].data.paid_amount} so'm</b></div>
                                                                            <div className="col-span-12 sm:col-span-3 gap-0 sm:gap-2">ID:  <b>{paymentsService[0].data.transaction_id}</b></div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }

                                                            <input type="text" id="service_id" className="mt-1 hidden " defaultValue="1" {...register("service_id", { required: true })} />
                                                            <input type="text" id="pin" className="mt-1 hidden" defaultValue={userData?.uinfo?.pin} {...register("pin", { required: true, pattern: /^[\d]{14}$/ })} />
                                                            <input type="text" id="pay" className="mt-1 hidden " defaultValue={paymentsService} {...register("pay", { required: true })} />
                                                            <div className="overflow-hidden">
                                                                <h3 className="text-xl font-semibold mx-4">Ariza beruvchi shaxs</h3>
                                                                <div className="bg-white px-4 py-5 pt-0 sm:p-6 sm:pt-2">
                                                                    <div className="grid grid-cols-6 gap-6">
                                                                        <div className="col-span-6 sm:col-span-3 mt-3">
                                                                            <label className="block text-sm font-medium text-gray-700">Foto rasm 3x4 <span className="text-gray-300 text-xs">(15kb)</span></label>
                                                                            <div className="mt-1 flex items-center">
                                                                                <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                                                                                    <img src={selectedImage} />
                                                                                </span>
                                                                                <input type="file" accept="image/*" className="hidden" {...register("photo_file", {
                                                                                    required: true,
                                                                                    onChange: onImageChange,
                                                                                    validate: {
                                                                                        lessThan10MB: files => files[0]?.size < 15360 || 'Maksimal xajm 15kb',
                                                                                        acceptedFormats: files =>
                                                                                            ['image/jpeg', 'image/png', 'image/jpg'].includes(
                                                                                                files[0]?.type
                                                                                            ) || 'Tog`ri format PNG, JPEG va JPG',
                                                                                    },
                                                                                })} name="photo_file" id="photo_file" />{/*onChange={onImageChange}*/}
                                                                                <label htmlFor="photo_file" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Yuklash
                                                                                </label>
                                                                            </div>
                                                                            <span className="err transition-all">{errors.photo_file && (<>{errors.photo_file.message}</> || 'Ushbu maydon majburiy')}</span>
                                                                        </div>

                                                                        <div className="col-span-6 sm:col-span-2 mt-4">
                                                                            <label htmlFor="pasport_num" className="block text-sm font-medium text-gray-700">Xorijga chiqish
                                                                                pasportingiz seriya va raqami</label>
                                                                            <input type="text" id="pasport_num" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                                                                {...register("pasport_num", { required: true, pattern: /^[A-Z]{2}[\d]{7}$/ })} maxLength={9} />
                                                                            <span className="err transition-all">{errors.pasport_num && (<>{errors.pasport_num.message}</> || 'Ushbu maydon majburiy')}</span>
                                                                        </div>

                                                                        <div className="col-span-6 sm:col-span-2">
                                                                            <label htmlFor="sur_name" className="block text-sm font-medium text-gray-700">Familiyangiz</label>
                                                                            <input type="text"  {...register("sur_name", { required: true })} defaultValue={userData?.uinfo?.body.sur_name} name="sur_name" id="first_name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
                                                                            <span className="err transition-all">{errors.sur_name && 'Ushbu maydon majburiy'}</span>
                                                                        </div>

                                                                        <div className="col-span-6 sm:col-span-2">
                                                                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Ismingiz</label>
                                                                            <input type="text" {...register("first_name", { required: true })} defaultValue={userData?.uinfo?.body.first_name} name="first_name" id="first_name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
                                                                            <span className="err transition-all">{errors.first_name && 'Ushbu maydon majburiy'}</span>
                                                                        </div>

                                                                        <div className="col-span-6 sm:col-span-2">
                                                                            <label htmlFor="middle_name" className="block text-sm font-medium text-gray-700">Sharifingiz</label>
                                                                            <input type="text" {...register("middle_name", { required: true })} defaultValue={userData?.uinfo?.body.mid_name} name="middle_name" id="middle_name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
                                                                            <span className="err transition-all">{errors.middle_name && 'Ushbu maydon majburiy'}</span>
                                                                        </div>

                                                                        <div className="col-span-6 sm:col-span-2">
                                                                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">Yashash hududingiz</label>
                                                                            <select {...register("region", { required: true })} id="region" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm">
                                                                                <option></option>
                                                                                <option value="Qoraqapog‘iston Respublikasi">Qoraqapog‘iston Respublikasi</option>
                                                                                <option value="Andijon viloyati">Andijon viloyati</option>
                                                                                <option value="Buxoro viloyati">Buxoro viloyati</option>
                                                                                <option value="Jizzax viloyati">Jizzax viloyati</option>
                                                                                <option value="Samarqand viloyati">Samarqand viloyati</option>
                                                                                <option value="Sirdaryo viloyati">Sirdaryo viloyati</option>
                                                                                <option value="Surxondaryo viloyati">Surxondaryo viloyati</option>
                                                                                <option value="Qashqadaryo viloyati">Qashqadaryo viloyati</option>
                                                                                <option value="Namangan viloyati">Namangan viloyati</option>
                                                                                <option value="Navoiy viloyati">Navoiy viloyati</option>
                                                                                <option value="Farg‘ona viloyati">Farg‘ona viloyati</option>
                                                                                <option value="Xorazm viloyati">Xorazm viloyati</option>
                                                                                <option value="Toshkent viloyati">Toshkent viloyati</option>
                                                                                <option value="Toshkent shahri">Toshkent shahri</option>
                                                                            </select>
                                                                            <span className="err transition-all">{errors.region && 'Ushbu maydon majburiy'}</span>
                                                                        </div>

                                                                        <div className="col-span-6 sm:col-span-2">
                                                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Tuman nomi</label>
                                                                            <input type="text" {...register("city", { required: true })} name="city" id="city" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
                                                                            <span className="err transition-all">{errors.city && 'Ushbu maydon majburiy'}</span>
                                                                        </div>

                                                                        <div className="col-span-6 sm:col-span-2">
                                                                            <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Manzil (M.F.Y, ko‘cha, uy)</label>
                                                                            <input type="text" {...register("street_address", { required: true })} defaultValue={userData?.uinfo?.body.per_adr} name="street_address" id="street_address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
                                                                            <span className="err transition-all">{errors.street_address && 'Ushbu maydon majburiy'}</span>
                                                                        </div>

                                                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon raqamingiz</label>
                                                                            <input type="text" {...register("phone", { required: true })} defaultValue={userData?.uinfo?.body.mob_phone_no} name="phone" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
                                                                            <span className="err transition-all">{errors.phone && 'Ushbu maydon majburiy'}</span>
                                                                        </div>

                                                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Elektron pochtangiz</label>
                                                                            <input type="email" {...register("email", { required: true })} defaultValue={userData?.uinfo?.body.email} name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" />
                                                                            <span className="err transition-all">{errors.email && 'Ushbu maydon majburiy'}</span>
                                                                        </div>

                                                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                            <label htmlFor="pasport_file" className="block text-sm font-medium text-gray-700">Xorijga chiqish pasportingiz nusxasi <span className="text-gray-300 text-xs">(60kb)</span></label>
                                                                            <input type="file" {...register("pasport_file", {
                                                                                required: true,
                                                                                validate: {
                                                                                    lessThan10MB: files => files[0]?.size < 61440 || 'Maksimal xajm 60kb',
                                                                                    acceptedFormats: files =>
                                                                                        ['image/jpeg', 'image/png', 'image/jpg'].includes(
                                                                                            files[0]?.type
                                                                                        ) || 'Tog`ri format PNG, JPEG va JPG',
                                                                                },
                                                                            })} name="pasport_file" id="pasport_file" accept="image/jpeg,image/jpg" className="form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" />
                                                                            <span className="err transition-all">{errors.pasport_file && (<>{errors.pasport_file.message}</> || 'Ushbu maydon majburiy')}</span>
                                                                        </div>
                                                                        {/*
                                                                            !paymentsService[0] && (
                                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                                    <label htmlFor="paycheck_file" className="block text-sm font-medium text-gray-700">Tolov kvitansiyangiz nusxasi</label>
                                                                                    <input type="file" {...register("paycheck_file", {
                                                                                        required: true,
                                                                                        validate: {
                                                                                            lessThan10MB: files => files[0]?.size < 61440 || 'Maksimal xajm 60kb',
                                                                                            acceptedFormats: files =>
                                                                                                ['image/jpeg', 'image/png', 'image/jpg'].includes(
                                                                                                    files[0]?.type
                                                                                                ) || 'Tog`ri format PNG, JPEG va JPG',
                                                                                        },
                                                                                    })} name="paycheck_file" id="paycheck_file" accept="image/*" className="form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none" />
                                                                                    <span className="err transition-all">{errors.paycheck_file && (<>{errors.paycheck_file.message}</> || 'Ushbu maydon majburiy')}</span>
                                                                                </div>
                                                                            )
                                                                        */
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                                                    {isUpdating ? (
                                                                        <button type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium shadow rounded-md bg-blue-400 text-white transition ease-in-out duration-150 cursor-not-allowed">
                                                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                            </svg>
                                                                            Saqlanmoqda...
                                                                        </button>
                                                                    ) :
                                                                        (
                                                                            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Saqlash</button>

                                                                        )}
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </form>
                                                </div>
                                            </>
                                        }
                                    </>
                                }


                            </>

                            :
                            (
                                <div className="flex items-center justify-center h-full w-full bg-white/80 mb-8">
                                    <div className="text-center my-4">
                                        <h2 className="text-xl font-semibold">Ro‘yxatdan o‘tishingiz uchun OneID orqali tizimga kirishingiz lozim</h2>
                                        <br />
                                        <LoginButton />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </main>
        </>
    )
}