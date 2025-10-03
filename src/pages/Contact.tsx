import Section from '@/components/ui/Section';
import PageTitle from '@/components/layout/PageTitle';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactForm } from '@/lib/validations';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { reason: 'info' },
  });

  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    try {
      await emailjs.send(
        'service_xxxxx', // 👉 tu Service ID
        'template_xxxxx', // 👉 tu Template ID
        {
          name: data.name,
          email: data.email,
          reason: data.reason,
          message: data.message,
        },
        'your_public_key' // 👉 tu Public Key
      );
      setIsSent(true);
      reset();
    } catch (error) {
      console.error('Error enviando el mensaje:', error);
      alert('❌ Hubo un error, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageTitle title="Contacto — FlyFPVCali" />
      <Section title="Contacto" subtitle="¿Quieres unirte, patrocinar o tienes dudas? Escríbenos.">
        {isSent ? (
          <div className="mx-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-base-card/40 p-6 text-center">
            <p className="text-neon-green text-lg font-semibold">¡Gracias por contactarnos!</p>
            <p className="text-base-text/80 mt-1">Te responderemos lo más pronto posible.</p>
          </div>
        ) : (
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-5">
            {/* Formulario */}
            <form
              className="order-2 mx-auto grid w-full max-w-2xl gap-4 rounded-2xl border border-white/10 bg-base-card/40 p-6 lg:order-1 lg:col-span-3"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <label className="grid gap-1">
                <span className="font-medium">Nombre</span>
                <Input {...register('name')} placeholder="Tu nombre" />
                {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
              </label>

              <label className="grid gap-1">
                <span className="font-medium">Correo</span>
                <Input type="email" {...register('email')} placeholder="tucorreo@ejemplo.com" />
                {errors.email && (
                  <span className="text-red-400 text-sm">{errors.email.message}</span>
                )}
              </label>

              <label className="grid gap-1">
                <span className="font-medium">Motivo</span>
                <Select {...register('reason')}>
                  <option value="info">Información</option>
                  <option value="join">Unirme al club</option>
                  <option value="sponsor">Patrocinio</option>
                  <option value="other">Otro</option>
                </Select>
                {errors.reason && (
                  <span className="text-red-400 text-sm">{errors.reason.message as string}</span>
                )}
              </label>

              <label className="grid gap-1">
                <span className="font-medium">Mensaje</span>
                <Textarea rows={6} {...register('message')} placeholder="Cuéntanos tu idea" />
                {errors.message && (
                  <span className="text-red-400 text-sm">{errors.message.message}</span>
                )}
              </label>

              <Button type="submit" className="glow" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>

            {/* Aside info */}
            <aside className="order-1 h-fit rounded-2xl border border-white/10 bg-base-card/40 p-6 lg:order-2 lg:col-span-2">
              <h3 className="neon-text text-xl font-bold">FlyFPVCali</h3>
              <p className="text-base-text/80 mt-1 text-sm">
                Velocidad, precisión y adrenalina. ¡Vuela con nosotros en Cali!
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="text-neon-green underline"
                  href="https://www.instagram.com/fly_fpv_cali/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram del club
                </a>
                <a
                  className="text-neon-green underline"
                  href="mailto:info@flyfpvcali.com
                  "
                >
                  info@flyfpvcali.com
                </a>
              </div>
            </aside>
          </div>
        )}
      </Section>
    </>
  );
}
