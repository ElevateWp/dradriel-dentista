import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const clinicPhotos = [
  {
    src: '/images/clinic-waiting-room.jpg',
    alt: 'Comfortable waiting area at Studio Dental Therapy',
    label: 'Waiting Area',
  },
  {
    src: '/images/clinic-exterior-manaus.jpg',
    alt: 'Exterior of the clinic building in Manaus',
    label: 'Clinic Location',
  },
  {
    src: '/images/treatment-room.jpg',
    alt: 'Dental treatment room with modern equipment',
    label: 'Treatment Room',
  },
  {
    src: '/images/reception-office.jpg',
    alt: 'Reception and office area at the clinic',
    label: 'Reception',
  },
  {
    src: '/images/reception-arch.jpg',
    alt: 'Clinic reception area with a decorative arch',
    label: 'Reception Area',
  },
  {
    src: '/images/consultation-room.jpg',
    alt: 'Consultation room prepared for a patient visit',
    label: 'Consultation Room',
  },
  {
    src: '/images/clinic-reception.jpg',
    alt: 'Clinic entry and reception seating',
    label: 'Clinic Entrance',
  },
  {
    src: '/images/dental-instruments.jpg',
    alt: 'Dental instruments arranged for patient care',
    label: 'Dental Instruments',
  },
  {
    src: '/images/doctor-workspace.jpg',
    alt: 'Dentist workspace inside the clinic',
    label: 'Clinical Workspace',
  },
  {
    src: '/images/clinic-hallway.jpg',
    alt: 'Interior hallway at Studio Dental Therapy',
    label: 'Clinic Hallway',
  },
  {
    src: '/images/dr-adriel-portrait.png',
    alt: 'Dr. Adriel Cavalcante at his clinic',
    label: 'Dr. Adriel Cavalcante',
  },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#2C2925] block mb-2 font-medium uppercase tracking-wider">
            Nossa Estrutura
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#2C2925]">
            Studio Dental Therapy em Manaus — Chapada
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicPhotos.map((photo, index) => (
            <AnimateOnScroll
              key={photo.src}
              animation={index === 0 ? 'fade-right' : 'zoom-in'}
              duration={0.8}
              delay={index === 0 ? 0 : Math.min((index % 3) * 0.1, 0.2)}
              className={`relative aspect-[4/3] overflow-hidden border border-[#DED6C9] bg-[#DED6C9] shadow-sm ${index === 0 ? 'sm:col-span-2 sm:aspect-[16/8]' : ''}`}
            >
              <MediaParallax speed={0.05 + (index % 3) * 0.01} className="w-full h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </MediaParallax>
              <div className="absolute bottom-3 left-3 bg-[#2C2925]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
                {photo.label}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
