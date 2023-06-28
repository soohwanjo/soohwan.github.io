import imgTitle from './assets/images/main.webp';
import imgGroom from './assets/images/profile_groom.jpg';
import imgBride from './assets/images/profile_bride.jpg';

type accountType = {
    who: string;
    name: string;
    bank: string;
    number: string;
};
type Person = {
    name: {
        me: string;
        father: string;
        mother: string;
    };
    account: accountType[];
    profileImage: string;
};
export type LocType = {
    name : string;
    address : string;
    lat : number;
    long : number;
};

export type ConfigsType = {
    kakaoImage: string;
    weddingDate: string;
    weddingDateDetail: string;
    weddingLocation: LocType;
    groom: Person;
    bride: Person;
    titleImage: string;
};

export const configs: ConfigsType = {
    kakaoImage: imgTitle,
    weddingDate: 'YYYY.MM.DD',
    weddingDateDetail: 'YYYY년 MM월 DD일',
    weddingLocation: {
        name: '',
        address: '',
        lat: 37,
        long: 126,
    },
    groom: {
        name: {
            me: '***',
            father: '***',
            mother: '***'
        },
        account: [{
            who: '신랑',
            name: '***',
            bank: '****',
            number: '***-***-******',
        },{
            who: '아버지',
            name: '***',
            bank: '****',
            number: '***-***-******',
        },{
            who: '어머니',
            name: '***',
            bank: '****',
            number: '***-***-******',
        }],
        profileImage: imgGroom
    },
    bride: {
        name: {
            me: '***',
            father: '***',
            mother: '***'
        },
        account: [{
            who: '신부',
            name: '***',
            bank: '****',
            number: '***-***-******',
        },{
            who: '아버지',
            name: '***',
            bank: '****',
            number: '***-***-******',
        },{
            who: '어머니',
            name: '***',
            bank: '****',
            number: '***-***-******',
        }],
        profileImage: imgBride
    },
    titleImage: imgTitle
};

/* 화면 크기 */
export const mobileWidth: number = 767;
export const mobilePortraitWidth: number = 991;

/* 갤러리 */
type PhotoType = {
    src: string;
    width: number;
    height: number;
};