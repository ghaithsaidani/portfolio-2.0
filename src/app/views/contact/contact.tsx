import styles from './contact.module.scss';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import React, { useRef, useState } from 'react';
import { FormType } from '@/ts/form.type';
import { FormControl, FormHelperText, ThemeProvider } from '@mui/material';
import { RedditTextField } from '@/components/ui/reddit-text-field';
import { LoadingButton } from '@mui/lab';
import { Theme } from '@/mui';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { NavbarAvatar } from '../../../assets/images';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ParticlesBg from 'particles-bg';
import { useBreakpoints } from '@/hooks/useBreakpoints';

/* eslint-disable-next-line */
export interface ContactProps {
  name: string,
  email: string,
  subject: string,
  message: string
}

export function Contact() {
  const initialvalues: ContactProps = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  const validationschema = object({
    name: string().required('you need to enter your name'),
    email: string()
      .email('invalid email')
      .required('You need to enter you email'),
    subject: string().required('you need to enter a subject'),
    message: string()
      .required('You need to enter a message')
      .min(20, 'Message is too Short')
  });
  const [loading, setLoading] = useState(false);
  const sendEmail = () => {
    console.log('hello');
  };
  const { values, handleChange, errors, resetForm, touched } =
    useFormik({
      initialValues: initialvalues,
      validateOnChange: true,
      validateOnBlur: false,
      validationSchema: validationschema,

      onSubmit: (values) => {
        setLoading(true);
        sendEmail();
      }
    });
  const form = useRef<HTMLFormElement>(null);
  const forms: FormType[] = [
    {
      id: 'name',
      name: 'name',
      label: 'Name',
      type: 'name',
      value: values.name,
      error: touched.name && Boolean(errors.name),
      errorText: errors.name
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
      value: values.email,
      error: touched.email && Boolean(errors.email),
      errorText: errors.email
    },
    {
      id: 'subject',
      name: 'subject',
      label: 'Subject',
      type: 'text',
      value: values.subject,
      error: touched.subject && Boolean(errors.subject),
      errorText: errors.subject
    },
    {
      id: 'message',
      name: 'message',
      label: 'Message',
      type: 'text',
      value: values.message,
      error: touched.message && Boolean(errors.message),
      errorText: errors.message
    }
  ];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  const breakpoints=useBreakpoints()
  return (
    <section className={'contacts flex justify-center items-center'}>
      <LampContainer>
        <motion.article
          initial={{ opacity: 0.5, y: breakpoints.active==='2xl' ? 500 : 400 }}
          whileInView={{ opacity: 1, y: breakpoints.active==='2xl' ? 125 : 100}}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: 'easeInOut'
          }}

          /* className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"*/
        >
          <article>
            <div
              className=" w-full flex mx-auto rounded-none md:rounded-2xl overflow-hidden shadow-input bg-white dark:bg-black">
              <div className={'xl:px-10 2xl:px-20 py-10 flex flex-col gap-5'}>
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

                <form className="my-8" onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                      <Label htmlFor="firstname">First name</Label>
                      <Input id="firstname" placeholder="Ghaith" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Label htmlFor="lastname">Last name</Label>
                      <Input id="lastname" placeholder="Saidani" type="text" />
                    </LabelInputContainer>
                  </div>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="ghaith@domain.com" type="email" />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="help for doing a website" type="subject" />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-8">
                    <Label htmlFor="message">Message</Label>
                    <Input
                      id="message"
                      rows={5}
                      placeholder={`Type your query here.....`}
                      type="text"
                    />
                  </LabelInputContainer>

                  <Button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                  >
                    Sign up &rarr;
                    <BottomGradient />
                  </Button>

                </form>
              </div>
              <MapContainer center={[37.255, 9.824]} zoom={13} scrollWheelZoom={false}
                            style={{ width: breakpoints.active==='2xl'? '700px' :'500px', height:'741px', zIndex: 0 }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[37.255, 9.824]}>
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
