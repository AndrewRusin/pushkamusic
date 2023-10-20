export interface ILoginForm {
    login:string;
    password:string;
}
export interface ILoginSentResponse {
	access_token?:string;
    message?: string;
}