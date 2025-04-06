import defineI18nConfig from '@nuxtjs/i18n'
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'de',
  messages: {
    de: {
      common: {
        couple_names: 'Nissy & Diego',
        wedding_date: '9. August 2025',
        location: 'Düren, Deutschland'
      },
      nav: {
        home: 'Startseite',
        story: 'Unsere Geschichte',
        details: 'Feierlichkeiten',
        gallery: 'Galerie',
        rsvp: 'Anmeldung'
      },
      hero: {
        title: 'Nissy & Diego',
        date: '9. August 2025 • Düren, Deutschland',
        subtitle: 'Wir heiraten!'
      },
      story: {
        title: 'Unsere Liebesgeschichte',
        how_we_met: 'Wir trafen uns 2018 in Köln während eines Musikfestivals. Diego spielte in einer Band und Nissy war mit Freunden dort.',
        first_date: 'Unser erstes Date war in einer kleinen Kaffeebar in der Altstadt. Wir haben drei Stunden geredet ohne es zu merken.',
        proposal: 'Diego hat vorgeschlagen während eines Sonnenuntergangs am Mittelmeer im Sommer 2023.',
        looking_forward: 'Wir freuen uns darauf, unser Leben gemeinsam zu verbringen und viele Abenteuer zu erleben.'
      },
      schedule: {
        title: 'Feierlichkeiten',
        ceremony: {
          title: 'Kirchliche Trauung',
          time: '14:00 Uhr',
          location: 'Kirche Le Rocher, Veldener Str. 45, 52349 Düren',
          description: 'Mit großer Freude laden wir euch ein, mit uns die Segnung unserer Ehe zu feiern.'
        },
        reception: {
          title: 'Sektempfang & Feier',
          time: '20:00 Uhr',
          location: 'Saal Grand Palace, Steffenrott 10, 52428 Jülich',
          description: 'Es wäre uns eine Ehre, euch an diesem besonderen Tag bei uns zu haben.'
        }
      },
      gallery: {
        title: 'Galerie',
        subtitle: 'Einige unserer schönsten Momente',
        more_photos: 'Mehr Fotos anzeigen'
      },
      rsvp: {
        title: 'Anmeldung',
        deadline: 'Bitte bestätigt eure Teilnahme bis spätestens',
        name: 'Name',
        email: 'Email',
        attending: 'Könnt ihr kommen?',
        yes: 'Ja, wir freuen uns darauf!',
        no: 'Leider können wir nicht kommen',
        guests: 'Anzahl der Gäste',
        dietary: 'Besondere Ernährungsanforderungen',
        dietary_placeholder: 'Vegetarisch, Vegan, Allergien, etc.',
        message: 'Nachricht für das Brautpaar',
        message_placeholder: 'Wir wünschen euch alles Gute...',
        submit: 'Absenden',
        contact: 'Kontakt für Fragen',
        success: 'Danke für deine Anmeldung! Wir freuen uns, dich zu sehen.'
      },
      footer: {
        quote: 'Liebe besteht nicht darin, dass man einander ansieht, sondern dass man gemeinsam in die gleiche Richtung blickt.',
        author: '- Antoine de Saint-Exupéry'
      }
    },
    fr: {
      common: {
        couple_names: 'Nissy & Diego',
        wedding_date: '9 août 2025',
        location: 'Düren, Allemagne'
      },
      nav: {
        home: 'Accueil',
        story: 'Notre histoire',
        details: 'Célébration',
        gallery: 'Galerie',
        rsvp: 'RSVP'
      },
      hero: {
        title: 'Nissy & Diego',
        date: '9 août 2025 • Düren, Allemagne',
        subtitle: 'Nous nous marions!'
      },
      story: {
        title: 'Notre histoire d\'amour',
        how_we_met: 'Nous nous sommes rencontrés en 2018 à Cologne lors d\'un festival de musique. Diego jouait dans un groupe et Nissy était là avec des amis.',
        first_date: 'Notre premier rendez-vous était dans un petit café du vieux ville. Nous avons parlé pendant trois heures sans nous en rendre compte.',
        proposal: 'Diego a proposé pendant un coucher de soleil sur la Méditerranée à l\'été 2023.',
        looking_forward: 'Nous avons hâte de vivre notre vie ensemble et de vivre de nombreuses aventures.'
      },
      schedule: {
        title: 'Célébration',
        ceremony: {
          title: 'Mariage religieux',
          time: '14h00',
          location: 'Église Le Rocher, Veldener Str. 45, 52349 Düren',
          description: 'C\'est avec une grande joie que nous vous invitons à célébrer avec nous la bénédiction de notre mariage.'
        },
        reception: {
          title: 'Réception & Fête',
          time: '20h00',
          location: 'Salle Grand Palace, Steffenrott 10, 52428 Jülich',
          description: 'Ce serait un honneur de vous avoir avec nous en ce jour spécial.'
        }
      },
      gallery: {
        title: 'Galerie',
        subtitle: 'Quelques-uns de nos plus beaux moments',
        more_photos: 'Voir plus de photos'
      },
      rsvp: {
        title: 'RSVP',
        deadline: 'Merci de confirmer votre présence avant le',
        name: 'Nom',
        email: 'Email',
        attending: 'Pouvez-vous venir?',
        yes: 'Oui, nous sommes impatients!',
        no: 'Non, malheureusement nous ne pouvons pas venir',
        guests: 'Nombre d\'invités',
        dietary: 'Exigences alimentaires particulières',
        dietary_placeholder: 'Végétarien, Vegan, Allergies, etc.',
        message: 'Message pour les mariés',
        message_placeholder: 'Nous vous souhaitons tout le bonheur...',
        submit: 'Envoyer',
        contact: 'Contact pour questions',
        success: 'Merci pour votre réponse! Nous avons hâte de vous voir.'
      },
      footer: {
        quote: 'Aimer, ce n\'est pas se regarder l\'un l\'autre, c\'est regarder ensemble dans la même direction.',
        author: '- Antoine de Saint-Exupéry'
      }
    }
  }
}))