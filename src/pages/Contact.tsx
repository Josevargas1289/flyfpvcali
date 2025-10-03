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
import { motion, AnimatePresence } from 'framer-motion';

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

  // Traducciones legibles para "reason"
  const reasonMap: Record<string, string> = {
    info: 'Información',
    join: 'Unirme al club',
    sponsor: 'Patrocinio',
    other: 'Otro',
  };

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    try {
      await emailjs.send(
        'service_oave55u', // 👉 tu Service ID
        'template_ab40tbk', // 👉 tu Template ID
        {
          name: data.name,
          email: data.email,
          reason: reasonMap[data.reason] || data.reason,
          message: data.message,
        },
        '5BlZ50VZfn19HvbkT' // 👉 tu Public Key
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
      <Section
        title="Contacto"
        subtitle="¿Quieres unirte, patrocinar o tienes dudas? Escríbenos."
      >
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
              {errors.name?.message && (
                <span className="text-red-400 text-sm">{errors.name.message}</span>
              )}
            </label>

            <label className="grid gap-1">
              <span className="font-medium">Correo</span>
              <Input
                type="email"
                {...register('email')}
                placeholder="tucorreo@ejemplo.com"
              />
              {errors.email?.message && (
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
              {errors.reason?.message && (
                <span className="text-red-400 text-sm">{errors.reason.message}</span>
              )}
            </label>

            <label className="grid gap-1">
              <span className="font-medium">Mensaje</span>
              <Textarea
                rows={6}
                {...register('message')}
                placeholder="Cuéntanos tu idea"
              />
              {errors.message?.message && (
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
                href="mailto:info@flyfpvcali.com"
              >
                info@flyfpvcali.com
              </a>
            </div>
          </aside>
        </div>

        {/* Modal de confirmación */}
        <AnimatePresence>
          {isSent && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="rounded-2xl border border-white/10 bg-base-card/90 p-8 text-center max-w-sm mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <h3 className="text-neon-green text-lg font-bold mb-2">
                  ¡Gracias por contactarnos!
                </h3>
                <p className="text-base-text/80 mb-4">
                  Te responderemos lo más pronto posible.
                </p>
                <Button
                  className="glow"
                  onClick={() => setIsSent(false)}
                >
                  Aceptar
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
    </>
  );
}
