import { Project, ServicePackage, SocialLinks } from './types';

/**
 * EDIT THIS FILE to update portfolio media, package copy, pricing, and contacts.
 * Paths beginning with /media/ resolve to files placed in public/media/.
 */

export const SOCIALS: SocialLinks = {
  instagram: 'https://www.instagram.com/m.shots3?igsh=czAwZzhrb2N2d2Jv&utm_source=qr',
  tiktok: 'https://www.tiktok.com/@m.shots3?_r=1&_t=ZS-93PILi15DXj',
  email: 'maksym.shots@gmail.com',
};

export const SITE_MEDIA = {
  // This uses the uploaded file's actual location under public/media/projects/Supra.
  hero: '/media/projects/Supra/supra photos-30.jpg',
    portrait: '/media/IMG_8751.JPG',
};

export const PROJECTS: Project[] = [
  {
    id: 'supra',
    title: 'Toyota Supra',
    category: 'mixed',
    cover: '/media/projects/Supra/supra photos-30.jpg',
    items: [
      { id: 'supra-rollers', type: 'video', src: '/media/projects/Supra/supra rollers.mov', poster: '/media/projects/Supra/supra photos-30.jpg', alt: 'Toyota Supra rolling shots', caption: 'Supra rollers' },
      { id: 'supra-27', type: 'photo', src: '/media/projects/Supra/supra photos-27.jpg', alt: 'Toyota Supra detail', caption: 'Supra detail' },
      { id: 'supra-28', type: 'photo', src: '/media/projects/Supra/supra photos-28.jpg', alt: 'Toyota Supra in profile', caption: 'Supra profile' },
      { id: 'supra-30', type: 'photo', src: '/media/projects/Supra/supra photos-30.jpg', alt: 'Toyota Supra hero image', caption: 'Supra hero' },
      { id: 'supra-45', type: 'photo', src: '/media/projects/Supra/supra photos-45.jpg', alt: 'Toyota Supra at dusk', caption: 'Supra at dusk' },
      { id: 'supra-53', type: 'photo', src: '/media/projects/Supra/supra photos-53.jpg', alt: 'Toyota Supra detail shot', caption: 'Supra detail' },
      { id: 'supra-91', type: 'photo', src: '/media/projects/Supra/supra photos-91.jpg', alt: 'Toyota Supra final shot', caption: 'Supra final frame' },
    ],
  },
  {
    id: 'august-14th-rally',
    title: 'August 14th Rally',
    category: 'mixed',
    cover: '/media/projects/August 14th Rally/bmw poster #1_1.2.1.jpg',
    items: [
      { id: 'rally-pak-day', type: 'video', src: '/media/projects/August 14th Rally/Pak day edit_prob4.mov', poster: '/media/projects/August 14th Rally/bmw poster #1_1.2.1.jpg', alt: 'August 14th Rally Pak day edit', caption: 'Pak day edit' },
      { id: 'rally-m3-m4', type: 'video', src: '/media/projects/August 14th Rally/m3 m4_prob4.mov', poster: '/media/projects/August 14th Rally/bmw poster #2_1.1.1.jpg', alt: 'BMW M3 and M4 rally video', caption: 'M3 + M4' },
      { id: 'rally-poster-1', type: 'photo', src: '/media/projects/August 14th Rally/bmw poster #1_1.2.1.jpg', alt: 'BMW rally poster one', caption: 'Rally poster' },
      { id: 'rally-poster-2', type: 'photo', src: '/media/projects/August 14th Rally/bmw poster #2_1.1.1.jpg', alt: 'BMW rally poster two', caption: 'Rally poster' },
    ],
  },
  {
    id: 'dirty-sips',
    title: 'Dirty Sips',
    category: 'mixed',
    cover: '/media/projects/Drinks/Dirty Sips-3.jpg',
    items: [
      { id: 'dirty-sips-film', type: 'video', src: '/media/projects/Drinks/dirty sips_prob4.mov', poster: '/media/projects/Drinks/Dirty Sips-3.jpg', alt: 'Dirty Sips beverage video', caption: 'Dirty Sips edit' },
      { id: 'dirty-sips-3', type: 'photo', src: '/media/projects/Drinks/Dirty Sips-3.jpg', alt: 'Dirty Sips drink photography', caption: 'Dirty Sips' },
      { id: 'dirty-sips-8', type: 'photo', src: '/media/projects/Drinks/Dirty Sips-8.jpg', alt: 'Dirty Sips drink detail', caption: 'Dirty Sips detail' },
      { id: 'dirty-sips-11', type: 'photo', src: '/media/projects/Drinks/Dirty Sips-11.jpg', alt: 'Dirty Sips drink composition', caption: 'Dirty Sips composition' },
    ],
  },
  {
    id: 'attic-insulation',
    title: 'Attic Insulation',
    category: 'mixed',
    cover: '/media/projects/Attic Insulation/topline-68.jpg',
    items: [
      { id: 'attic-long', type: 'video', src: '/media/projects/Attic Insulation/topline long_prob4.mov', poster: '/media/projects/Attic Insulation/topline-68.jpg', alt: 'Attic Insulation long-form video', caption: 'Topline long' },
      { id: 'attic-short', type: 'video', src: '/media/projects/Attic Insulation/topline short_prob4.mov', poster: '/media/projects/Attic Insulation/topline-68.jpg', alt: 'Attic Insulation short video', caption: 'Topline short' },
      { id: 'attic-photo', type: 'photo', src: '/media/projects/Attic Insulation/topline-68.jpg', alt: 'Attic Insulation image', caption: 'Topline' },
    ],
  },
  {
    id: 'more-cinematics',
    title: 'More Cinematics',
    category: 'video',
    cover: '/media/projects/Supra/supra photos-53.jpg',
    items: [
      { id: 'cinematic-bmws', type: 'video', src: '/media/projects/More Cinematics/Bmwws and boquets _prob4.mov', poster: '/media/projects/Supra/supra photos-53.jpg', alt: 'BMWs and bouquets video', caption: 'BMWs and bouquets' },
      { id: 'cinematic-corvette', type: 'video', src: '/media/projects/More Cinematics/Corvette C5 #2_prob4.mov', poster: '/media/projects/Supra/supra photos-30.jpg', alt: 'Corvette C5 video', caption: 'Corvette C5' },
      { id: 'cinematic-m5', type: 'video', src: '/media/projects/More Cinematics/M5 & S1k_prob4.mov', poster: '/media/projects/Supra/supra photos-45.jpg', alt: 'M5 and S1000 video', caption: 'M5 + S1K' },
      { id: 'cinematic-s5', type: 'video', src: '/media/projects/More Cinematics/S5 detail #2_prob42.mov', poster: '/media/projects/Supra/supra photos-27.jpg', alt: 'Audi S5 detail video', caption: 'S5 detail' },
      { id: 'cinematic-bmw', type: 'video', src: '/media/projects/More Cinematics/bmw m only_prob4.mov', poster: '/media/projects/Supra/supra photos-28.jpg', alt: 'BMW M video', caption: 'BMW M' },
      { id: 'cinematic-r8', type: 'video', src: '/media/projects/More Cinematics/double R8.mov', poster: '/media/projects/Supra/supra photos-91.jpg', alt: 'Double Audi R8 video', caption: 'Double R8' },
      { id: 'cinematic-g80', type: 'video', src: '/media/projects/More Cinematics/g80 detail..mov', poster: '/media/projects/Supra/supra photos-30.jpg', alt: 'BMW G80 detail video', caption: 'G80 detail' },
      { id: 'cinematic-g82', type: 'video', src: '/media/projects/More Cinematics/g82gelo _prob4.mov', poster: '/media/projects/Supra/supra photos-53.jpg', alt: 'BMW G82 video', caption: 'G82' },
      { id: 'cinematic-m4-detail', type: 'video', src: '/media/projects/More Cinematics/m4 detail_prob4.mov', poster: '/media/projects/Supra/supra photos-45.jpg', alt: 'BMW M4 detail video', caption: 'M4 detail' },
      { id: 'cinematic-m4-r8', type: 'video', src: '/media/projects/More Cinematics/m4comp & r8_prob4.mov', poster: '/media/projects/Supra/supra photos-27.jpg', alt: 'BMW M4 and Audi R8 video', caption: 'M4 + R8' },
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    category: 'video',
    cover: '/media/projects/Attic Insulation/topline-68.jpg',
    items: [
      { id: 'real-estate-house', type: 'video', src: '/media/projects/Real Estate/house video.mov', poster: '/media/projects/Attic Insulation/topline-68.jpg', alt: 'Real estate house video', caption: 'House film' },
    ],
  },
];

export const PACKAGES: ServicePackage[] = [
  {
    id: 'reels',
    title: 'Automotive reels',
    description: 'High-energy vertical or horizontal video, filmed and finished for social.',
    price: 125,
    icon: 'video',
    features: ['Professional filming', 'Smooth motion shots', 'Cinematic colour grade', 'Sound design'],
  },
  {
    id: 'photo',
    title: 'Photography',
    description: 'A high-resolution automotive or lifestyle shoot with a clean cinematic finish.',
    price: 100,
    icon: 'camera',
    features: ['Clean composition', 'High-resolution edits', 'Social-ready delivery', 'Personal branding'],
  },
  {
    id: 'combo',
    title: 'Photo + video',
    description: 'A complete content set: professionally edited photos and a cinematic reel.',
    price: 200,
    icon: 'layers',
    features: ['Full photo set', 'Cinematic reel', 'Best value', 'Priority editing'],
  },
];
