import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations : {
                'Write a comment' : 'Write a comment',
                'Share Blog' : 'Share Blog',
                'Choose photo' : 'Choose photo',
                'Eat' : 'Eat',
                'Hotel'  : 'Hotel',
                'History' : 'History',
                'Art' : 'Art'

            }
        },
        tr: {
            translations : {
                'Write a comment' : 'Yorum yazınız',
                'Share Blog' : 'Blog Paylaş',
                'Choose photo' : 'Fotoğraf seçiniz',
                'Eat' : 'Yemek',
                'Hotel'  : 'Otel',
                'History' : 'Tarih',
                'Art' : 'Sanat'

            }
        }
    },
    fallback: 'en',
    ns: ['translations'],
    defaultNS: ['translations'],
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: { 
        wait : true
    }
});

export default i18n;