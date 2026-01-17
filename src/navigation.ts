import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Startseite',
      href: getPermalink('/'),
    },
    {
      text: 'Leistungen',
      links: [
        {
          text: 'Tiefbau',
          href: getPermalink('/leistungen/tiefbau'),
        },
        {
          text: 'Asphaltierung',
          href: getPermalink('/leistungen/asphaltierung'),
        },
        {
          text: 'Spülbohrungen',
          href: getPermalink('/leistungen/spuelbohrungen'),
        },
        {
          text: 'Glasfaser',
          href: getPermalink('/leistungen/glasfaser'),
        },
      ],
    },
    {
      text: 'Über Uns',
      href: getPermalink('/ueber-uns'),
    },
    {
      text: 'Kontakt',
      href: 'mailto:info@stor-connect.at',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Leistungen',
      links: [
        { text: 'Tiefbau', href: getPermalink('/leistungen/tiefbau') },
        { text: 'Asphaltierung', href: getPermalink('/leistungen/asphaltierung') },
        { text: 'Spülbohrungen', href: getPermalink('/leistungen/spuelbohrungen') },
        { text: 'Glasfaser', href: getPermalink('/leistungen/glasfaser') },
      ],
    },
    {
      title: 'Unternehmen',
      links: [
        { text: 'Über uns', href: getPermalink('/ueber-uns') },
        { text: 'Kontakt', href: 'mailto:info@stor-connect.at' },
      ],
    },
    {
      title: 'Rechtliches',
      links: [
        { text: 'Impressum', href: getPermalink('/impressum') },
        { text: 'Datenschutz', href: getPermalink('/datenschutz') },
        { text: 'Cookie-Einstellungen', href: '#cookie-settings' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    © 2025 STOR Connect GmbH · Alle Rechte vorbehalten.
  `,
};
