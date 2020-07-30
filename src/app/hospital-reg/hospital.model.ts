export class HospitalModel{
    constructor(
        public regId: string,
        public hName: string,
        public place: string,
        public contact: number,
        public email: string,
        public password: string
    ){}
}