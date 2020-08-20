import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Write a comment': 'Write a comment',
                'Share Blog': 'Share Blog',
                'Choose photo': 'Choose photo',
                'Eat': 'Eat',
                'Hotel': 'Hotel',
                'History': 'History',
                'ABOUT US': 'ABOUT US',
                'TRAWELL is a travel guide.': 'TRAWELL is a travel guide.',
                'TRAWELL enhances your travel experience and helps you plan a more enjoyable trip.': 'TRAWELL enhances your travel experience and helps you plan a more enjoyable trip.',
                'FOLLOW US': 'FOLLOW US',
                'TRAWELL | All right reserved': 'TRAWELL | All right reserved',
                'HOME': 'HOME',
                'LOCATION': 'LOCATION',
                'LOGIN': 'LOGIN',
                'REGISTER': 'REGISTER',
                'LOGOUT': 'LOGOUT',
                'PROFILE': 'PROFILE',
                'Write a blog title!': 'Write a blog title!',
                'Write a blog content!': 'Write a blog content!'
            }
        },
        tr: {
            translations: {
                'Write a comment': 'Yorum yazınız',
                'Share Blog': 'Blog Paylaş',
                'Choose photo': 'Fotoğraf seçiniz',
                'Eat': 'Yemek',
                'Hotel': 'Otel',
                'History': 'Tarih',
                'Art': 'Sanat',
                'ABOUT US': 'HAKKIMIZDA',
                'TRAWELL is a travel guide.': 'TRAWELL bir gezi rehberidir.',
                'TRAWELL enhances your travel experience and helps you plan a more enjoyable trip.': 'TRAWELL seyahat deneyiminizi arttırırken keyifli yolculuklar planlamanızı destekler.',
                'FOLLOW US': 'BIZI TAKIP EDIN',
                'TRAWELL | All right reserved': 'TRAWELL | Tüm hakları saklıdır',
                'HOME': 'ANASAYFA',
                'LOCATION': 'KONUM',
                'LOGIN': 'GİRİŞ YAP',
                'REGISTER': 'KAYDOL',
                'LOGOUT': 'ÇIKIŞ YAP',
                'PROFILE': 'PROFİL',
                'Write a blog title!': 'Blogun başlığını yazınız!',
                'Write a blog content!': 'Blogun içeriğini yazınız!'

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
        wait: true
    }
});

export default i18n;