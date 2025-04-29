'use client';
import { SiX, SiInstagram, SiDiscord } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Button } from '@/shared/ui/button';
import { Label } from '@/shared/ui/label';
import { Checkbox } from '@/shared/ui/checkbox';
import paperPlaneSrc from '@/assets/images/letter_send.png';
import PhoneIcon from '@/assets/icons/phone.svg';
import MailIcon from '@/assets/icons/email.svg';
import MapPinIcon from '@/assets/icons/map-pin.svg';

// Define the form schema with Zod
const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subjects: z.array(z.string()).min(1, 'Please select at least one subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subjects: [],
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

  const subjectOptions = [
    { id: 'general', label: 'General Inquiry' },
    { id: 'support', label: 'Technical Support' },
    { id: 'billing', label: 'Billing Question' },
    { id: 'feedback', label: 'Product Feedback' },
  ];

  return (
    <div className="w-full">
      <div className="text-center py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600">Any question or remarks? Just write us a message!</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="rounded-lg bg-white p-1 sm:p-3">
          <div className="grid md:grid-cols-2 overflow-hidden relative rounded-lg max-sm:text-center">
            {/* Contact Information */}
            <div className="flex flex-col bg-black text-white p-8 relative z-1">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-8">Say something to start a live chat!</p>
              <div className="space-y-6">
                <div className="flex max-sm:flex-col items-center">
                  <PhoneIcon className="mr-4 min-w-6" />
                  <a className="hover:underline" href="tel:+10123456789">
                    +1012 3456 789
                  </a>
                </div>
                <div className="flex max-sm:flex-col items-center">
                  <MailIcon className="mr-4 min-w-6" />
                  <a className="hover:underline" href="mailto:demo@gmail.com">
                    demo@gmail.com
                  </a>
                </div>
                <div className="flex max-sm:flex-col max-sm:items-center max-sm:text-center items-start">
                  <MapPinIcon className="mr-4 mt-1 min-w-6" />
                  <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                </div>
              </div>
              {/* Social Media Icons */}
              <div className="flex max-md:justify-center gap-4 mt-auto pt-8">
                <a
                  className="size-[30px] flex items-center justify-center rounded-full bg-white/18 hover:bg-white hover:text-black transition-colors"
                  href="/"
                >
                  <SiX size={16} />
                </a>
                <a
                  className="size-[30px] flex items-center justify-center rounded-full bg-white/18 hover:bg-white hover:text-black transition-colors"
                  href="/"
                >
                  <SiInstagram size={18} />
                </a>
                <a
                  className="size-[30px] flex items-center justify-center rounded-full bg-white/18 hover:bg-white hover:text-black transition-colors"
                  href="/"
                >
                  <SiDiscord size={18} />
                </a>
              </div>
              {/* Decorative Circles */}
              <div className="absolute bottom-0 right-0 -z-1 max-w-[33%] [&_svg]:max-w-full">
                <svg
                  fill="none"
                  height="209"
                  viewBox="0 0 208 209"
                  width="208"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="animate-pulse"
                    cx="162.5"
                    cy="160.5"
                    fill="#1A1A1A"
                    r="134.5"
                  />
                  <circle
                    className="animate-pulse delay-500"
                    cx="69"
                    cy="69"
                    fill="#484848"
                    fillOpacity="0.5"
                    r="69"
                  />
                </svg>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white p-8">
              {isSubmitSuccessful ? (
                <p className="text-3xl text-center bold">Message sent!</p>
              ) : (
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <Label className="text-sm text-gray-600" htmlFor="firstName">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      {...register('firstName')}
                      className={`form-control ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600" htmlFor="lastName">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      {...register('lastName')}
                      className={`form-control ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`form-control ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600" htmlFor="phone">
                      Phone Number
                    </Label>
                    <Input id="phone" type="tel" {...register('phone')} className="form-control" />
                  </div>
                  <div className="md:col-span-2">
                    <Label className="text-sm text-gray-600 mb-3">Select Subject?</Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <Controller
                        control={control}
                        name="subjects"
                        render={({ field }) => (
                          <>
                            {subjectOptions.map(option => (
                              <div key={option.id} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={field.value.includes(option.id)}
                                  id={option.id}
                                  onCheckedChange={checked => {
                                    if (checked) {
                                      field.onChange([...field.value, option.id]);
                                    } else {
                                      field.onChange(
                                        field.value.filter(value => value !== option.id)
                                      );
                                    }
                                  }}
                                />
                                <Label htmlFor={option.id}>{option.label}</Label>
                              </div>
                            ))}
                          </>
                        )}
                      />
                    </div>
                    {errors.subjects && (
                      <p className="text-red-500 text-xs mt-1">{errors.subjects.message}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <Label className="text-sm text-gray-600" htmlFor="message">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      className={`form-control ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Write your message.."
                      rows={4}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <Button
                      className="py-6 min-w-full md:min-w-[214px] transition-colors"
                      size="lg"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
              {/* Decorative Plane Image */}
              <div className="flex justify-end mt-8 -mb-12">
                <Image alt="Paper plane" height={217} src={paperPlaneSrc} width={266} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
