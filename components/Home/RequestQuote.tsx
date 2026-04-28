import Faqs from "./Faqs"
import { MdOutlineCloudUpload } from "react-icons/md"

const RequestQuote = () => {
    return (
        <section className='pb-16 quote-section relative'>
            <div className='container mx-auto md:px-0 px-4'>
                <h2 className='md:text-[32px] md:leading-none text-2xl text-primary text-center font-extrabold mb-4'>
                    Get a Free Quote & Ask Your Questions
                </h2>
                <p className='text-base leading-5 font-normal text-primary text-center max-w-[900px] mx-auto'>
                    Get instant pricing, expert design support, and answers to all your packaging queries in one place.
                </p>
            </div>
            <div className='max-w-[1012px] mx-auto px-4 mt-10 flex md:flex-row flex-col gap-9'>
                <div className='md:w-1/2 w-full'>
                    <form className='grid md:grid-cols-3 grid-cols-1 gap-4 md:pt-[32px] md:px-[35px] md:pb-7 p-6 bg-Wp_Green rounded-[25px]'>
                        <div>
                            <input
                                type='text'
                                name='name'
                                placeholder='Full Name'
                                className='text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none' />
                        </div>
                        <div>
                            <input
                                type='tel'
                                name='phone'
                                placeholder='Phone Number'
                                className='text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none' />
                        </div>
                        <div>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email Address'
                                className='text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none' />
                        </div>
                        <div>
                            <input
                                type='number'
                                name='length'
                                placeholder='Length'
                                className='text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none' />
                        </div>
                        <div>
                            <input
                                type='number'
                                name='width'
                                placeholder='Width'
                                className='text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none' />

                        </div>
                        <div>
                            <input
                                type='number'
                                name='depth'
                                placeholder='Depth'
                                className='text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none' />
                        </div>
                        <div>
                            <select
                                name='unit'
                                className="text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none">
                                <option>Unit</option>
                                <option>Inches</option>
                                <option>CM</option>
                                <option>MM</option>
                            </select>
                        </div>
                        <div>
                            <select
                                name="material"
                                className="text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none">
                                <option>Material</option>
                                <option>Kraft</option>
                                <option>Cardboard</option>
                                <option>Corrugated</option>
                            </select>
                        </div>
                        <div>
                            <select name="stock"
                                className="text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none">
                                <option>Stock</option>
                                <option>12pt</option>
                                <option>14pt</option>
                                <option>16pt</option>
                                <option>18pt</option>
                                <option>20pt</option>
                                <option>22pt</option>
                                <option>24pt</option>
                            </select>
                        </div>
                        <div className="md:col-span-3 grid md:grid-cols-2 grid-cols-1 gap-4">
                            <div>
                                <select name="printing"
                                    className="text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none">
                                    <option>Printing</option>
                                    <option>1 Color</option>
                                    <option>2 Color</option>
                                    <option>3 Color</option>
                                    <option>4 Color</option>
                                    <option>Full Color</option>
                                </select>
                            </div>
                            <div>
                                <input
                                    type='number'
                                    name='quantity'
                                    placeholder='Quantity'
                                    className='text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none' />
                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <textarea name="message"
                                placeholder='Additional Information'
                                className='h-[110px] text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none'></textarea>
                        </div>
                        <div className="md:col-span-3 flex md:flex-row flex-col gap-4">
                            <div className="md:w-2/5 w-full">
                                <label className="flex gap-1.5 text-white text-[15px] font-medium items-center justify-center py-2.5 px-4 border-dashed border-2 border-[#ddddddb8] rounded-sm">
                                    <MdOutlineCloudUpload size={20} />
                                    <span>Upload design</span>
                                    <input type="file"
                                        className="hidden text-[15px] font-normal text-desc placeholder:text-desc bg-white border-2 border-transparent rounded-xl py-2.5 px-4 w-full focus:border-primary outline-none" />
                                </label>
                            </div>
                            <div className="relative self-baseline md:w-3/5 w-full">
                                <input
                                    type='number'
                                    name='answer'
                                    placeholder='Captcha'
                                    className='text-[15px] font-normal text-desc bg-white border-2 border-[#fe0000] rounded-xl py-2.5 px-4 w-full focus:border-[#fe0000] outline-none' />
                                <span className="absolute right-0 bottom-0 py-1 px-2 bg-primary text-white text-lg rounded-md">1+6</span>
                            </div>
                        </div>
                        <div className='md:col-span-3'>
                            <button type='submit' className='text-[13px] font-semibold uppercase text-white bg-primary hover:scale-105 transition-all duration-200 py-3 px-6 rounded-lg md:w-[37%] w-full'>
                                Submit Now
                            </button>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 w-full ">
                    <Faqs />
                </div>
            </div>
        </section>
    )
}

export default RequestQuote