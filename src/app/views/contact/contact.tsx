import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { NavbarAvatar } from '../../../assets/images';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import { Input } from '@/components/ui/input';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { Loader2 } from "lucide-react"
import { useToast } from '@/hooks/use-toast';

/* eslint-disable-next-line */

const formSchema = z.object({
  firstname: z.string().min(1,'Required').max(50),
  lastname: z.string().min(1,'Required').max(50),
  email: z.string().email('Invalid email'),
  subject: z.string().min(1, 'Required').max(150),
  message: z.string().min(20, 'message is too short')
});

export function Contact() {
  const icon = L.icon({iconUrl:'/images/marker-icon.png'})

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: ''
    }
  });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast()



  const sendEmail = () => {
    setLoading(true)
    emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID,import.meta.env.VITE_APP_TEMPLATE_ID, formRef.current as HTMLFormElement, import.meta.env.VITE_APP_PUBLIC_KEY)
      .then((result) => {
        setLoading(false);
        toast({
          title: "Email sent successfully",
          description:new Date().toLocaleDateString('en-US', { weekday:"long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"}),
          duration: 3000,
        })
        form.reset()
      }, (error) => {
        console.log('error sending message');
      });
  };

  const [loading, setLoading] = useState(false);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    sendEmail()
  }

  const breakpoints = useBreakpoints();
  return (
    <section className={'contacts flex justify-center items-center h-full'}>
      <LampContainer>
        <motion.article
          initial={{ opacity: 0.5, y: breakpoints.active === '2xl' ? 500 : 400 }}
          whileInView={{ opacity: 1, y: breakpoints.active === '2xl' ? 150 : 100 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: 'easeInOut'
          }}
          className={'w-full'}
          /* className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"*/
        >
          <article>
            <div
              className=" w-full flex mx-auto rounded-2xl overflow-hidden shadow-input bg-white dark:bg-black">
              <div className={'px-[5%] py-10 flex flex-col gap-5 justify-center'}>
                <h3 className={'font-sfProBold capitalize text-3xl'}>get in touch with me</h3>
                <div className={'flex justify-center items-center gap-5'}>
                  <div className={'overflow-hidden relative w-10 h-10 bg-primary rounded-full'}>
                    <img src={NavbarAvatar} alt={'avatar'} className={'absolute -bottom-1'} />
                  </div>
                  <div className={'px-4 py-2 border-2 rounded-xl w-96'}>
                    <p className={'font-sfPro text-gray-400 text-[0.85rem]'}>
                      Hi, I’m Ghaith. Need help? Use the form below or email me at ghaith.saidani@sesame.com.tn
                    </p>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} ref={formRef} className="space-y-2">
                    <div className={'flex flex-col md:flex-row space-y-2 md:space-y-0 md:justify-between'}>
                      <FormField
                        control={form.control}
                        name="firstname"

                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input placeholder="Tyler" {...field} className={'w-52'}/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                              <Input placeholder="Durden" {...field} className={'w-52'}/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="tyler@domain.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="help for creating a website" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Type your query here ..." rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      disabled={loading}
                      className="w-full h-10"
                      type="submit"
                    >
                      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Send Message&nbsp; &rarr;
                      <BottomGradient />
                    </Button>
                  </form>
                </Form>
              </div>
              <MapContainer center={[37.262, 9.823]} zoom={13} scrollWheelZoom={false}
                            style={{
                              width: breakpoints.active === '2xl' ? '700px' : '600px',
                              height: '780px',
                              zIndex: 0
                            }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[37.262, 9.823]} icon={icon}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>


          </article>

          {/*Build lamps <br /> the right way*/}
        </motion.article>
      </LampContainer>

    </section>

  );
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <span
        className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
                               children,
                               className
                             }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

export default Contact;
