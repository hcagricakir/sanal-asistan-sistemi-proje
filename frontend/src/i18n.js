import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                'Sign Up':'Sign Up',
                'Password mismatch':'Password mismatch',
                Username: 'Username',
                'Display Name': 'Display Name',
                Password: 'Password',
                'Password Repeat': 'Password Repeat',
                Login: 'Login',
                Logout: 'Logout'
            }
        },
        tr: {
            translation: {
                'Sign Up':'Kayıt Ol',
                'Password mismatch':'Aynı sifreyi giriniz',
                Username: 'Kullanıcı Adı',
                'Display Name': 'Okul Mail Adresi',
                Password: 'Şifre',
                'Password Repeat': 'Şifreyi Tekrarla',
                Login: 'Sisteme Gir',
                Logout: 'Çık'
            }
        }
    },
    fallbackLng: 'tr',
    ns: ['translation'],
    defaultNS: 'translation',
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