export interface IUser {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly password: string;
  readonly confirmedEmail: boolean;
  readonly confirmedPhone: boolean;
}
