type ObjectOne = { name: string, address: string }
type ObjectTwo = { name: string, address: string };


type OneAndTwo = ObjectOne & ObjectTwo;

const person: OneAndTwo = {
    name: '택빈',
    address: '510 College Ave'
};

type Color = {
    color?: string,
    size: number,
    readonly position: number[]
};

type Profile = {
    name: string,
    phone: number,
    email: string,
}

type Adult = {
    under18?: boolean
}

type NewProfile = Profile & Adult
const profile: NewProfile =  { name : 'kim', phone : 123, email : 'abc@naver.com' }

