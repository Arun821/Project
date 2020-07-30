export class DoctorModel{
    constructor(
        public doctorId : string,
        public name : string,
        public designation : string,
        public specialisation : string,
        public phone : number,
        public email : string,
        public imageUrl : string
    ){}
}