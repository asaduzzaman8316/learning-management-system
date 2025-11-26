'use client'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '@/app/Redux/cartSlicer'
import useCourse from '@/app/DataFetch/useCourse'
import Image from 'next/image'
import { MdDelete } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'
import { toast } from 'react-toastify'

function CartPage() {
    const dispatch = useDispatch()
    const { course } = useCourse()
    const cartIds = useSelector((state) => state.cart.cartId)

    const cartCourses = course.filter(item => cartIds.includes(item.id))
    // console.log(cartCourses)

    const subtotal = cartCourses.reduce((total, item) => total + item.price, 0)

    const shippingCost =0;

    const totalPrice = subtotal + shippingCost

    const handleRemove = (id, title) => {
        dispatch(removeFromCart(id))
        toast.success(`${title} removed from cart!`, {
            position: "top-right",
            autoClose: 2000,
        })
    }

    return (
        <div className='min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='mb-8'>
                    <h1 className='text-4xl font-bold text-gray-800 flex items-center gap-3'>
                        <FaShoppingCart className='text-[#07a698]' />
                        Shopping Cart
                    </h1>
                    <p className='text-gray-600 mt-2'>
                        {cartCourses.length} {cartCourses.length === 1 ? 'course' : 'courses'} in your cart
                    </p>
                </div>

                {cartCourses.length === 0 ? (
                    <div className='bg-white rounded-3xl shadow-lg p-16 text-center'>
                        <div className='max-w-md mx-auto'>
                            <FaShoppingCart className='text-8xl text-gray-300 mx-auto mb-6' />
                            <h2 className='text-3xl font-bold text-gray-700 mb-4'>Your cart is empty</h2>
                            <p className='text-gray-500 mb-8'>
                                Looks like you haven&apos;t added any courses yet. Start exploring our amazing courses!
                            </p>
                            <Link
                                href='/coures'
                                className='inline-block bg-linear-to-r from-[#07a698] to-[#059c8e] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105'
                            >
                                Browse Courses
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className='grid lg:grid-cols-3 gap-8'>
                        <div className='lg:col-span-2 space-y-4'>
                            {cartCourses.map((item) => (
                                <div
                                    key={item.id}
                                    className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100'
                                >
                                    <div className='flex flex-col md:flex-row gap-6'>
                                        <div className='md:w-48 h-32 rounded-xl overflow-hidden shrink-0'>
                                            <Image
                                                src={item.course_image}
                                                width={300}
                                                height={200}
                                                alt={item.course_title}
                                                className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                                            />
                                        </div>

                                        <div className='flex-1 flex flex-col justify-between'>
                                            <div>
                                                <h3 className='text-xl font-bold text-gray-800 mb-2 line-clamp-2'>
                                                    {item.course_title}
                                                </h3>
                                                <p className='text-sm text-gray-600 mb-2'>
                                                    by <span className='font-semibold text-[#07a698]'>{item.instructor.name}</span>
                                                </p>
                                                <div className='flex items-center gap-4 text-sm text-gray-500'>
                                                    <span>{item.lessons} Lessons</span>
                                                    <span>•</span>
                                                    <span>{item.students_enrolled} Students</span>
                                                </div>
                                            </div>

                                            <div className='flex items-center justify-between mt-4'>
                                                <div className='text-2xl font-bold text-[#07a698]'>
                                                    ${item.price.toFixed(2)}
                                                </div>
                                                <button
                                                    onClick={() => handleRemove(item.id, item.course_title)}
                                                    className='flex items-center gap-2 text-red-500 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-full transition-all duration-300'
                                                >
                                                    <MdDelete className='text-xl' />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='lg:col-span-1'>
                            <div className='bg-white rounded-2xl shadow-lg p-8 sticky top-8 border border-gray-100'>
                                <h2 className='text-2xl font-bold text-gray-800 mb-6'>Order Summary</h2>

                                <div className='space-y-4 mb-6'>
                                    <div className='flex justify-between text-gray-600'>
                                        <span>Subtotal ({cartCourses.length} {cartCourses.length === 1 ? 'item' : 'items'})</span>
                                        <span className='font-semibold'>${subtotal.toFixed(2)}</span>
                                    </div>

                                    <div className='flex justify-between text-gray-600'>
                                        <span>Shipping</span>
                                        <span className='font-semibold'>
                                                <span className='text-green-600'>FREE</span>
                                        </span>
                                    </div>

                                    <div className='border-t border-gray-200 pt-4'>
                                        <div className='flex justify-between text-lg font-bold text-gray-800'>
                                            <span>Total</span>
                                            <span className='text-2xl text-[#07a698]'>${totalPrice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <button className='w-full bg-linear-to-r from-[#07a698] to-[#059c8e] text-white py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4'>
                                    Proceed to Checkout
                                </button>

                                <Link
                                    href='/coures'
                                    className='block text-center text-[#07a698] hover:text-[#059c8e] font-semibold transition-colors duration-300'
                                >
                                    Continue Shopping
                                </Link>

                                <div className='mt-8 pt-6 border-t border-gray-200'>
                                    <div className='space-y-3 text-sm text-gray-600'>
                                        <div className='flex items-center gap-2'>
                                            <svg className='w-5 h-5 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                                                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                                            </svg>
                                            <span>30-Day Money-Back Guarantee</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <svg className='w-5 h-5 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                                                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                                            </svg>
                                            <span>Lifetime Access</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <svg className='w-5 h-5 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                                                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                                            </svg>
                                            <span>Secure Payment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartPage
